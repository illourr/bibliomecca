import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme';
import { Box, Heading } from '@chakra-ui/core';
import './App.css';

const Header = styled(Box)``;

interface FooterProps {
  bg: string;
}
const Footer = styled(Box)<FooterProps>`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Header as="header" className="nav-bar">
          <Heading>bibliomecca</Heading>
        </Header>
        <Main />
        <Footer as="footer" bg="gray.50">
          Copyright &copy; 2020 Bibliomecca LLC.
        </Footer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
