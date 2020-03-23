import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/Books';
import { IBook } from '../types/Book';
import { useParams } from 'react-router-dom';

interface CheckoutProps {
  bookId: string;
}
const Checkout = () => {
  const { id } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  useEffect(() => {
    if (typeof id === 'string') {
      getBookById(id).then((book: IBook) => setBook(book));
    }
  }, [id]);
  return book !== null ? <>{book.name}</> : 'No book found';
};

export default Checkout;
