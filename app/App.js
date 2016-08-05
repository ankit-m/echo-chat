import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Chatbox from './components/Chatbox/Chatbox';
import './css/main.css';
import './bootstrap/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false,
      friends: ['Jack', 'Allen', 'Paul'],
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }
  render() {
    return (
      <div id="wrapper" className={this.state.toggleMenu ? 'menuDisplayed' : ''}>
        <Sidebar friends={this.state.friends} />
        <div id="content-wrapper">
          <div className="container-fluid" style={{ padding: '0' }}>
            {/*<a className="btn btn-primary" onClick={this.toggleClass} id="toggle-menu">Toggle</a>*/}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/users" component={Chatbox}>
        <Route path="/users/:userId" component={Chatbox} />
      </Route>
      <IndexRoute component={Chatbox} />
    </Route>
  </Router>,
  mount
);
