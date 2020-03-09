import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme';
import { Button } from '@chakra-ui/core';
import Box from './Box';
import './App.css';

const Header = styled(Box)``;
const Wrapper = styled(Box)`
  text-align: center;
  min-height: 90vh;
`;

const Footer = styled(Box)`
  text-align: center;
`;

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header as="header">
        <h1>bibliomecca</h1>
      </Header>
      <Wrapper as="main">
        <Button onClick={() => alert('LGTM')}>
          Click to confirm Chakra is working
        </Button>
      </Wrapper>
      <Footer as="footer">Copyright &copy; 2020 Bibliomecca LLC.</Footer>
    </ThemeProvider>
  );
}

export default App;
