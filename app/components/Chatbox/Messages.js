import React from 'react';

class Messages extends React.Component {
  componentDidMount() {
    this.chat.scrollTop = this.chat.scrollHeight;
  }
  componentDidUpdate() {
    this.chat.scrollTop = this.chat.scrollHeight;
  }
  render() {
    let messages = this.props.messages.map((obj, index) => (
      <div key={index}>
        <div className={obj.type === 0 ? 'message mine' : 'message other'}>
          {obj.message}
          <br />
          <small className="pull-right timestamp">
            {`${(new Date(obj.timestamp)).getHours()}:${(new Date(obj.timestamp)).getMinutes()}`}
          </small>
        </div>
      </div>
    ));
    return <div className="chat" ref={(ref) => this.chat = ref} >{messages}</div>;
  }
}

Messages.propTypes = {
  messages: React.PropTypes.array.isRequired,
};

export default Messages;
