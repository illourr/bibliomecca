import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme';
import { Grid, Box, Heading } from '@chakra-ui/core';
import './App.css';
import CreateBookForm from './components/CreateBookForm';
import { BooksList } from './components/BooksList';

const Header = styled(Box)``;

interface FooterProps {
  bg: string;
}
const Footer = styled(Box)<FooterProps>`
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header as="header" className="nav-bar">
        <Heading>bibliomecca</Heading>
      </Header>
      <Grid as="main" templateColumns="2fr 1fr" gap={6} p="16px">
        <Box w="100%">
          <BooksList />
        </Box>
        <Box w="100%">
          <CreateBookForm />
        </Box>
      </Grid>
      <Footer as="footer" bg="gray.50">
        Copyright &copy; 2020 Bibliomecca LLC.
      </Footer>
    </ThemeProvider>
  );
}

export default App;
