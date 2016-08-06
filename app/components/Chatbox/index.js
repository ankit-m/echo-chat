import React from 'react';
import ChatTitle from './ChatTitle';
import Messages from './Messages';
import NewMessage from './NewMessage';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.messages = chat.messages;
    this.state = { name: chat.name, messages: chat.messages, load: true, error: false };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.openSocket = this.openSocket.bind(this);
    this.onSocketOpen = this.onSocketOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onSocketError = this.onSocketError.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    this.openSocket();
  }
  componentWillReceiveProps(props) {
    // socket is opened again to simulate real life chat connections
    // for each user we will have to make a connection to a different
    // end point. This also makes recovery from internet failures possible
    this.websocket.close();
    this.openSocket();
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.setState({ name: chat.name, messages: chat.messages, load: true, error: false });
  }
  componentWillUnmount() {
    this.websocket.close();
  }
  onSocketOpen() {
    this.setState({ load: false, error: false });
  }
  onMessage(evt) {
    this.addNewMessage(evt.data, 1);
  }
  onSocketError() {
    this.setState({ error: true, load: false });
    this.websocket.close();
  }
  openSocket() {
    const websocket = new WebSocket('ws://echo.websocket.org/');
    websocket.onopen = this.onSocketOpen;
    websocket.onclose = this.onClose;
    websocket.onmessage = this.onMessage;
    websocket.onerror = this.onSocketError;
    this.websocket = websocket;
  }
  sendMessage(message) {
    this.websocket.send(message);
    this.addNewMessage(message, 0);
  }
  addNewMessage(message, type) {
    const d = new Date();
    const timestamp = d.getTime();
    const messages = this.state.messages.concat({ message, timestamp, type });
    this.setState({ messages });
    localStorage.setItem(this.props.routeParams.userId, JSON.stringify({
      name: this.state.name,
      messages,
    }));
  }
  render() {
    if (this.state.load) {
      return (
        <span className="text-muted">loading ... </span>
      );
    }
    if (this.state.error) {
      return (
        <span className="text-muted">error! </span>
      );
    }
    return (
      <div>
        <ChatTitle title={this.state.name} />
        <Messages messages={this.state.messages} />
        <NewMessage handler={this.sendMessage} />
      </div>
    );
  }
}

Chatbox.propTypes = {
  routeParams: React.PropTypes.object.isRequired,
};

export default Chatbox;