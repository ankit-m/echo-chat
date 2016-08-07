import React from 'react';

const chatNameStyle = { borderRadius: '0', margin: '0', borderLeft: '0' };

const ChatName = (props) => (
  <nav className="navbar navbar-default" style={chatNameStyle}>
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
