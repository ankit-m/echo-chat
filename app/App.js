import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>Hi</h1>;

const mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <App />,
  mount
);
