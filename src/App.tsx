import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Button,
  Box,
  Heading,
  Text,
  Grid
} from '@chakra-ui/core';
import customTheme from './theme';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';

const Header = styled(Box)`
  color: #fff;
  display: flex;
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  justify-content: center;
  align-items: center;
`;

interface FooterProps {
  bg: string;
}

function App() {
  const [user] = useAuthState(firebase.auth());
  const handleLogout = () => firebase.auth().signOut();
  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Header as="header" className="nav-bar">
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            ml="2"
            mr="2"
          >
            <Heading>bibliomecca</Heading>
            {user && (
              <Grid
                alignItems="center"
                gridTemplateColumns="auto auto"
                gridGap="2"
              >
                <Text>Hello, {user.displayName}</Text>
                <Button variantColor="teal" onClick={handleLogout}>
                  Logout
                </Button>
              </Grid>
            )}
          </Flex>
        </Header>
        <Main />
        <Box as="footer" bg="gray.600" p="3" textAlign="center">
          <Box as="p" color="white">
            Copyright &copy; 2020 Bibliomecca LLC.
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
