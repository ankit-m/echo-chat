import React from 'react';
import ChatTitle from './ChatTitle';
import Messages from './Messages';
import NewMessage from './NewMessage';

class Chatbox extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Postman',
      messages: [],
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const url = 'ws://echo.websocket.org/';
    const websocket = new WebSocket(url);
    websocket.onopen = this.onOpen;
    websocket.onclose = this.onClose;
    websocket.onmessage = this.onMessage;
    websocket.onerror = this.onError;
    this.websocket = websocket;
  }
  onOpen(evt) {
    console.log('connected', evt);
  }
  onClose(evt) {
    console.log('closed');
  }
  onMessage(evt) {
    console.log(evt.data);
    this.handleNewMessage(evt.data);
  }
  onError(evt) {
    console.log('error');
  }
  sendMessage(message) {
    this.websocket.send(message);
    this.handleNewMessage(message);
  }
  handleNewMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }
  render() {
    return (
      <div>
        <ChatTitle />
        <Messages messages={this.state.messages} />
        <NewMessage handler={this.sendMessage} />
      </div>
    );
  }
}

export default Chatbox;
