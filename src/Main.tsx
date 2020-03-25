import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Wrapper from './components/Wrapper';

const Main = () => {
  const location = useLocation();
  console.log({ location });
  return (
    <Wrapper>
      <Switch>
        <Route path="/book/:id/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Wrapper>
  );
};
export default Main;
