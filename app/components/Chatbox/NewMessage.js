import React from 'react';
import './chatbox.css'

class NewMessage extends React.Component {
  constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage() {
    this.props.handler(this.message.value);
    this.message.value = '';
  }
  render() {
    return (
      <div className="input-group" style={{ position: 'absolute ', bottom: '0', width: 'calc(100% - 250px)' }}>
        <input type="textarea" className="form-control" ref={(ref) => this.message = ref} />
        <span className="input-group-btn">
          <button className="btn btn-success" onClick={this.sendMessage} type="button">Send</button>
        </span>
      </div>
    );
  }
}

NewMessage.propTypes = {
  handler: React.PropTypes.func.isRequired,
};

export default NewMessage;
