import React from 'react';
import { Link } from 'react-router';

const Friends = (props) => {
  const friends = Object.keys(props.friendList).map((uid) => {
    const link = `/users/${uid}`;
    return (
      <li key={uid}>
        <Link className="link" activeClassName="active-chat" to={link}>
          {props.friendList[uid].name}
        </Link>
      </li>
    );
  });
  return (
    <ul className="sidenav">
      {friends}
    </ul>
  );
};

Friends.propTypes = {
  friendList: React.PropTypes.object.isRequired,
};

export default Friends;
