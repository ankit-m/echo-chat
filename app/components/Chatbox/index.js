import React from 'react';
import ChatName from './ChatName';
import Messages from './Messages';
import MessageInput from './MessageInput';
import Loader from './Loader';
import Errorbar from './Errorbar';
import './chatbox.css';

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.messages = chat.messages;
    this.state = { name: chat.name, messages: chat.messages, load: true, error: false };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.openSocket = this.openSocket.bind(this);
    this.closeSocket = this.closeSocket.bind(this);
    this.setError = this.setError.bind(this);
    window.addEventListener('offline', () => { this.setError(); });
    window.addEventListener('online', () => {
      setTimeout(() => { this.openSocket(); }, 500);
    });
  }
  componentDidMount() {
    this.openSocket();
  }
  componentWillReceiveProps(props) {
    // socket is opened again to simulate real life chat connections
    // for each user we will have to make a connection to a different
    // end point. This also makes recovery from internet failures possible
    this.closeSocket();
    this.openSocket();
    const chat = JSON.parse(localStorage.getItem(props.routeParams.userId));
    this.setState({ name: chat.name, messages: chat.messages, load: true, error: false });
  }
  componentWillUnmount() {
    this.closeSocket();
  }
  setError() {
    this.setState({ error: true, load: false });
    this.closeSocket();
  }
  closeSocket() {
    if (this.websocket && (this.websocket.readyState === 0 || this.websocket.readyState === 1)) {
      this.websocket.close();
    }
  }
  openSocket() {
    this.closeSocket();   // close a connection if it exists
    const websocket = new WebSocket('ws://echo.websocket.org/');
    websocket.onopen = () => { this.setState({ load: false, error: false }); };
    websocket.onmessage = (e) => { this.addNewMessage(e.data, 1); };
    websocket.onerror = () => { this.setError(); };
    websocket.onclose = (e) => { if (!e.wasClean) this.closeSocket(); };
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
        <div>
          <ChatName name={this.state.name} />
          <Loader />
          <Messages messages={this.state.messages} />
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div>
          <ChatName name={this.state.name} />
          <Messages messages={this.state.messages} />
          <Errorbar />
        </div>
      );
    }
    return (
      <div>
        <ChatName name={this.state.name} />
        <Messages messages={this.state.messages} />
        <MessageInput handler={this.sendMessage} />
      </div>
    );
  }
}

Chatbox.propTypes = {
  routeParams: React.PropTypes.object.isRequired,
};

export default Chatbox;
