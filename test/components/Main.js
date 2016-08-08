import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Main from '../../app/components/Main';

describe('Main', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it('should set localStorage if it is empty', () => {
    mount(<Main children={[]} />);
    expect(localStorage).to.deep.equal({ friendList: '{}' });
  });
  it('should render Sidebar', () => {
    const wrapper = mount(<Main children={[]} />);
    expect(wrapper.find('Sidebar').length).to.equal(1);
  });
  it('should render content-wrapper', () => {
    const wrapper = mount(<Main children={[]} />);
    expect(wrapper.find('#content-wrapper').length).to.equal(1);
  });
});
