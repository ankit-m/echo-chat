import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Sidebar from '../../../app/components/Sidebar';

describe('Sidebar', () => {
  const wrapper = mount(<Sidebar />);
  afterEach(() => {
    localStorage.clear();
  });
  it('should render Title', () => {
    expect(wrapper.find('Title').length).to.equal(1);
  });
  it('should render Friends', () => {
    expect(wrapper.find('Friends').length).to.equal(1);
  });
  it('should render AddFriend', () => {
    expect(wrapper.find('AddFriend').length).to.equal(1);
  });
  it('should add a friend', () => {
    localStorage.setItem('friendList', '{}');
    wrapper.instance().addNewFriend('check');
    expect(Object.keys(localStorage).length).to.equal(2);
    expect(Object.keys(JSON.parse(localStorage.friendList)).length).to.equal(1);
  });
  it('should set state to friendList', () => {
    expect(wrapper.state('friendList')).to.exist;
  });
});
