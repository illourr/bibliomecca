import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { getBookById } from '../services/Books';
import { IBook } from '../types/Book';
import { useParams } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider
} from '@chakra-ui/core';

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
  return (
    <Wrapper>
      <Breadcrumb>
        <BreadcrumbItem>
          {/* 
  // @ts-ignore */}
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Checkout</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider />
      <Box>{book !== null ? <>{book.name}</> : <p>No book found!</p>}</Box>
    </Wrapper>
  );
};

export default Checkout;
