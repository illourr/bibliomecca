import React from 'react';
import {
  Grid,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider
} from '@chakra-ui/core';
import CreateBookForm from '../components/CreateBookForm';
import { BooksList } from '../components/BooksList';
import Wrapper from '../components/Wrapper';

const Home = () => (
  <Wrapper>
    <Breadcrumb>
      <BreadcrumbItem>
        {/* 
  // @ts-ignore */}
        <BreadcrumbLink isCurrentPage>Home</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Divider />
    <Grid as="main" templateColumns="2fr 1fr" gap={6}>
      <Box w="100%">
        <BooksList />
      </Box>
      <Box w="100%">
        <CreateBookForm />
      </Box>
    </Grid>
  </Wrapper>
);

export default Home;
