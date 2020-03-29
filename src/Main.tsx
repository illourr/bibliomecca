import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Main = () => {
  // TODO: Destructure error from useAuthState and setup an error state in the UI
  const [user, loading] = useAuthState(firebase.auth());
  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <Switch>
          <Route path="/book/:id/checkout">
            <Checkout />
          </Route>
          <Route path="/">{user ? <Home /> : <Landing />}</Route>
        </Switch>
      )}
    </>
  );
};
export default Main;
