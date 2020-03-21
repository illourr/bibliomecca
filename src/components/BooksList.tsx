import React, { useEffect, useState } from 'react';
import { List, ListItem, ListIcon } from '@chakra-ui/core';
import { IBook } from '../types/Book';
import fire from '../Firebase';

const useBooks = () => {
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
          addBook(book);
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  }, []);
  return books;
};

type BookProps = {
  name: string;
  description: string;
  author: string;
};
const Book = ({ name, description, author }: BookProps) => (
  <ListItem>
    {name} by {author}
  </ListItem>
);
export const BooksList = () => {
  const books = useBooks();
  return (
    <List>
      {books.length > 0
        ? books.map(book => <Book key={book.isbn10} {...book} />)
        : 'Books loading'}
    </List>
  );
};
