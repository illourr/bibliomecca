import React from 'react';
import {
  Grid,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/core';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
// TODO: Allow authenticating with multiple providers: https://firebase.google.com/docs/auth/web/account-linking
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  emailLinkSignIn: function() {
    return {
      // Additional state showPromo=1234 can be retrieved from URL on
      // sign-in completion in signInSuccess callback by checking
      // window.location.href.
      url: '/'
    };
  }
};
const LoginForm = () => {
  return (
    <form>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </form>
  );
};

const Landing = () => (
  <Box backgroundImage="url(images/library-background.jpg)">
    <Grid minH="100vh" justifyItems="center" alignItems="start">
      <Box
        w="md"
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

          <TabPanels
            alignItems="center"
            display="flex"
            justifyContent="center"
            minH="200px"
          >
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
