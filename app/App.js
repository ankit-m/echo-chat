import React from 'react';
import ReactDOM from 'react-dom';
import Friends from './components/Sidebar/Friends';

const App = () => <div><Friends /></div>;

const mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <App />,
  mount
);
