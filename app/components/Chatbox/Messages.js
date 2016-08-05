import React from 'react';
import './chatbox.css';

class Messages extends React.Component {
  componentDidUpdate() {
    this.chat.scrollTop = this.chat.scrollHeight;
  }
  render() {
    let messages = this.props.messages.map((message, index) => <p key={index}>{message}</p>);
    return <div className="chat" ref={(ref) => this.chat = ref} >{messages}</div>;
  }
}

Messages.propTypes = {
  messages: React.PropTypes.array.isRequired,
};

export default Messages;
