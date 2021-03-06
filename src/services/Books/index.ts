import { useState, useEffect } from 'react';
import { IBook, IBookDraft } from '../../types/Book';
import firebase from 'firebase';
import { logEvent, fire } from '../../services/Firebase';

export const createBook = ({
  name,
  author,
  description,
  isbn10,
  isbn13
}: IBookDraft): Promise<IBook | Error> => {
  const db = fire.firestore();
  const createdAt = firebase.firestore.Timestamp.fromDate(new Date());
  return db
    .collection('books')
    .add({
      name,
      author,
      description,
      isbn10,
      isbn13,
      createdAt
    })
    .then(docRef => {
      logEvent('created_book', {
        name,
        author,
        description,
        createdAt,
        isbn10,
        isbn13
      });
      return docRef;
    })
    .catch(err => err);
};

export const deleteBook = async (bookId: string): Promise<any | Error> => {
  console.groupCollapsed('Delete book');
  try {
    const db = fire.firestore();
    const result = await db
      .collection('books')
      .doc(bookId)
      .delete();
    console.log({ bookId, result });
    console.groupEnd();
    logEvent('delete_book', { bookId });
    return result;
  } catch (err) {
    console.log({ err });
    console.groupEnd();
    return err;
  }
};

export const getBookById = async (bookId: string): Promise<IBook> => {
  const db = fire.firestore();
  const book = await db
    .collection('books')
    .doc(bookId)
    .get();
  return book.data() as IBook;
};

export const useBooksFeed = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const addBook = (book: IBook) => {
    setBooks((books: IBook[]) => [...books, book]);
  };

  const resetBooks = () => setBooks([]);

  useEffect(() => {
    const db = fire.firestore();
    db.collection('books')
      .orderBy('createdAt', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          const book = doc.data() as IBook;
          addBook({ ...book, id: doc.id });
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });

    // get realtime updates
    db.collection('books')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        resetBooks();
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          const book = doc.data() as IBook;
          addBook({ ...book, id: doc.id });
        });
      });
  }, []);
  return books;
};
