import React from 'react';
import { Link } from 'react-router';
import './sidebar.css';
import Title from './Title';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidenav-wrapper">
        <Title />
        <ul className="sidenav">
          <li><Link to="/channels">Home</Link></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
