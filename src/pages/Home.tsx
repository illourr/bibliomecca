import React from 'react';
import { Grid, Box } from '@chakra-ui/core';
import CreateBookForm from '../components/CreateBookForm';
import { BooksList } from '../components/BooksList';

const Home = () => (
  <Grid as="main" templateColumns="2fr 1fr" gap={6} p="16px">
    <Box w="100%">
      <BooksList />
    </Box>
    <Box w="100%">
      <CreateBookForm />
    </Box>
  </Grid>
);

export default Home;
