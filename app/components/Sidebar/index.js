import React from 'react';
import Title from './Title';
import Friends from './Friends';
import AddFriend from './AddFriend';
import guid from '../../utils/guid';
import './sidebar.css';

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = { friendList: JSON.parse(localStorage.getItem('friendList')) };
    this.addNewFriend = this.addNewFriend.bind(this);
  }
  addNewFriend(name) {
    const friendList = JSON.parse(localStorage.getItem('friendList'));
    const id = guid();
    friendList[id] = {
      name,
      image: '',
    };
    localStorage.setItem('friendList', JSON.stringify(friendList));
    localStorage.setItem(id, JSON.stringify({ name, messages: [] }));
    this.setState({ friendList });
  }
  render() {
    return (
      <div id="sidenav-wrapper">
        <Title />
        <Friends friendList={this.state.friendList} />
        <AddFriend handler={this.addNewFriend} />
      </div>
    );
  }
}

export default Sidebar;
