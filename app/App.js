import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './css/main.css';
import './bootstrap/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }
  render() {
    return (
      <div id="wrapper" className={this.state.toggleMenu ? 'menuDisplayed' : ''}>
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <a href="#" className="btn btn-primary" onClick={this.toggleClass} id="toggle-menu">Toggle</a>
              <p>
                ok
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <App />,
  mount
);
