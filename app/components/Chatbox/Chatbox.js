import React from 'react';
import ChatTitle from './ChatTitle';
import Messages from './Messages';
import NewMessage from './NewMessage';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    const messages = chat.messages;
    const title = chat.name;
    this.messages = messages;
    this.state = {
      title,
      messages,
    };
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
  componentWillReceiveProps(props) {
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    const messages = chat.messages;
    const title = chat.name;
    this.setState({ title, messages });
  }
  onOpen(evt) {
    console.log('connected', evt);
  }
  onClose(evt) {
    console.log('closed');
  }
  onMessage(evt) {
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
    localStorage.setItem(this.props.routeParams.userId, JSON.stringify({
      name: this.state.title,
      messages,
    }));
    this.setState({ messages });
  }
  render() {
    return (
      <div>
        <ChatTitle title={this.state.title} />
        <Messages messages={this.state.messages} />
        <NewMessage handler={this.sendMessage} />
      </div>
    );
  }
}

export default Chatbox;
