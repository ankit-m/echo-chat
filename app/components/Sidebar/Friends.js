import React from 'react';
import { Link } from 'react-router';
import './sidebar.css';

class Friends extends React.Component {
  render() {
    const friends = this.props.friendList.map((friend, index) => {
      const link = `/users/${index}`;
      return (
        <li key={index}><Link className="link" to={link}>{friend}</Link></li>
      );
    });
    return (
      <ul className="sidenav">
        {friends}
      </ul>
    );
  }
}

Friends.propTypes = {
  friendList: React.PropTypes.array.isRequired,
};

export default Friends;
