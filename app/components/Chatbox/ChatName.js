import React from 'react';

const ChatName = (props) => (
  <nav className="navbar navbar-default" style={{ borderRadius: '0', margin: '0' }}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          {props.name}
        </a>
      </div>
    </div>
  </nav>
);

ChatName.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default ChatName;
