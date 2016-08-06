import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home/Home';
import Chatbox from '../components/Chatbox/Chatbox';

export default (
  <Route path="/" component={Main}>
    <Route path="/users" component={Home} />
    <Route path="/users/:userId" component={Chatbox} />
    <IndexRoute component={Home} />
  </Route>
);
