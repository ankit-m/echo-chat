import React from 'react';
import ChatTitle from './ChatTitle';
import Messages from './Messages';
import NewMessage from './NewMessage';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.messages = chat.messages;
    this.state = { name: chat.name, messages: chat.messages, load: true };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.onSocketOpen = this.onSocketOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const websocket = new WebSocket('ws://echo.websocket.org/');
    websocket.onopen = this.onSocketOpen;
    websocket.onclose = this.onClose;
    websocket.onmessage = this.onMessage;
    websocket.onerror = this.onSocketError;
    this.websocket = websocket;
  }
  componentWillReceiveProps(props) {
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.setState({ name: chat.name, messages: chat.messages });
  }
  onSocketOpen() {
    this.setState({ loading: false });
  }
  onMessage(evt) {
    this.addNewMessage(evt.data, 1);
  }
  onSocketError(evt) {
    console.log('error', evt);
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
    return (
      <div>
        <ChatTitle title={this.state.name} />
        <Messages messages={this.state.messages} />
        <NewMessage handler={this.sendMessage} />
      </div>
    );
  }
}

export default Chatbox;
