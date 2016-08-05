import React from 'react';
import Title from './Title';
import Friends from './Friends';
import './sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidenav-wrapper">
        <Title />
        <Friends friendList={this.props.friends} />
      </div>
    );
  }
}

export default Sidebar;
