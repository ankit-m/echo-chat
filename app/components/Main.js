import React from 'react';
import Sidebar from './Sidebar';

class Main extends React.Component {
  constructor() {
    super();
    if (localStorage.getItem('friendList') === null) {
      localStorage.setItem('friendList', '{}');
    }
  }
  render() {
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid" style={{ padding: '0' }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Main;
