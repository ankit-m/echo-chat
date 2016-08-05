import React from 'react';

const ChatTitle = (props) => (
  <nav className="navbar navbar-default" style={{ borderRadius: '0', margin: '0' }}>
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          {props.title}
        </a>
      </div>
    </div>
  </nav>
);

ChatTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default ChatTitle;
