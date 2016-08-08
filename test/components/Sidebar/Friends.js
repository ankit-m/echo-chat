import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Friends from '../../../app/components/Sidebar/Friends';

describe('Friends', () => {
  const friendList = { uid: { name: 'test', image: 'check' } };
  const wrapper = mount(<Friends friendList={friendList} />);
  it('should render all friends as Links', () => {
    expect(wrapper.find('Link').length).to.equal(1);
  });
  it('should render sidenav class', () => {
    expect(wrapper.find('.sidenav').length).to.equal(1);
  });
});
