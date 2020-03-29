import React from 'react';
import {
  Grid,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button
} from '@chakra-ui/core';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
};
const LoginForm = () => {
  // TODO: Setup email/password login
  return (
    <form>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="username"
          aria-describedby="login-helper-text"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Password</FormLabel>
        <Input type="password" id="password" />
      </FormControl>
      <Button variantColor="teal" mt="2">
        Login
      </Button>
      <Text textAlign="center" fontSize="xl">
        or{' '}
      </Text>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </form>
  );
};

const Landing = () => (
  <Box backgroundImage="url(images/library-background.jpg)">
    <Grid minH="100vh" justifyItems="center" alignItems="start">
      <Box
        w="lg"
        borderWidth="1px"
        rounded="lg"
        p="2"
        m="2"
        mt="50px"
        bg="white"
      >
        <Tabs>
          <TabList>
            <Tab>Login</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="2">
              <LoginForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Grid>
  </Box>
);

export default Landing;
