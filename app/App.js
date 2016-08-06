import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import './bootstrap/bootstrap.min.css';

const mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  mount
);
