import { useState, useEffect } from 'react';
import { IBook } from '../../types/Book';
import firebase, { fire } from '../../services/Firebase';

export const createBook = ({
  name,
  author,
  description,
  isbn10,
  isbn13
}: IBook): Promise<IBook | Error> => {
  const db = fire.firestore();

  return db
    .collection('books')
    .add({
      name,
      author,
      description,
      isbn10,
      isbn13,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date())
    })
    .then(docRef => {
      return docRef;
    })
    .catch(err => err);
};

export const useBooksFeed = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const addBook = (book: IBook) => {
    setBooks((books: IBook[]) => [...books, book]);
  };

  useEffect(() => {
    const db = fire.firestore();
    db.collection('books')
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
    db.collection('books').onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        const book = doc.data() as IBook;
        console.log({ newBook: book });
      });
    });
  }, []);
  return books;
};
