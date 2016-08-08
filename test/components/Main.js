import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Main from '../../app/components/Main';

describe('Main', () => {
  const wrapper = mount(<Main children={[]} />);
  it('should render Sidebar', () => {
    expect(wrapper.find('Sidebar').length).to.equal(1);
  });
  it('should render content-wrapper', () => {
    expect(wrapper.find('#content-wrapper').length).to.equal(1);
  });
  it('should set localStorage if it is empty', () => {
    expect(localStorage).to.deep.equal({ friendList: '{}' });
  });
});
