import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

const Main = () => (
  <Switch>
    <Route path="/book/:id/checkout">
      <Checkout />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Main;
