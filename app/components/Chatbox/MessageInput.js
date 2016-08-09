import React from 'react';

class MessageInput extends React.Component {
  constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code === 13 && !/^\s*$/.test(this.message.value)) {
      this.props.handler(this.message.value);
      this.message.value = '';
    }
  }
  render() {
    return (
      <input
        type="text"
        className="form-control new-message"
        placeholder="Say Hi!"
        ref={(ref) => this.message = ref}
        onKeyPress={this.sendMessage}
        autoFocus
      />
    );
  }
}

MessageInput.propTypes = {
  handler: React.PropTypes.func.isRequired,
};

export default MessageInput;
