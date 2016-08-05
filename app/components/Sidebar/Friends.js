import React from 'react';
import { Link } from 'react-router';
import './sidebar.css';

class Friends extends React.Component {
  render() {
    const friends = this.props.friendList.map(function(friend, index) {
      return (
        <li key={index}><Link className="link" to="/users/">{friend}</Link></li>
      );
    });
    return (
      <ul className="sidenav">
        {friends}
      </ul>
    );
  }
}

export default Friends;
