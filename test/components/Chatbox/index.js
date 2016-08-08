import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { WebSocket } from 'mock-socket';
import Chatbox from '../../../app/components/Chatbox';

describe('Chatbox', () => {
  localStorage.setItem('friendList', JSON.stringify({ uid1: { name: 'test', image: '' } }));
  localStorage.setItem('uid1', JSON.stringify({ name: 'test', messages: [] }));
  global.WebSocket = WebSocket;
  const wrapper = mount(<Chatbox routeParams={{ userId: 'uid1' }} />);
  it('should render ChatName and Messages all the time', () => {
    expect(wrapper.find('ChatName').length).to.equal(1);
    expect(wrapper.find('Messages').length).to.equal(1);
  });
  it('should render Loader if state is loading', () => {
    wrapper.setState({ load: true, error: false });
    expect(wrapper.find('Loader').length).to.equal(1);
  });
  it('should render Errorbar if state is error', () => {
    wrapper.setState({ load: false, error: true });
    expect(wrapper.find('Errorbar').length).to.equal(1);
  });
  it('should render input bar in normal state', () => {
    wrapper.setState({ load: false, error: false });
    expect(wrapper.find('MessageInput').length).to.equal(1);
  });
  it('should add new messages to localStorage', () => {
    wrapper.instance().addNewMessage('test', 1);
    expect(JSON.parse(localStorage.uid1).messages[0].message).to.equal('test');
    expect(JSON.parse(localStorage.uid1).messages[0].type).to.equal(1);
  });
});
