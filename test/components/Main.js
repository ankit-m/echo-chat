import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Main from '../../app/components/Main';

describe('Main', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  const node = <div>test</div>;
  it('should render a child when passed to it', () => {
    const wrapper = shallow(<Main>{node}</Main>);
    expect(wrapper.contains(node)).to.eql(true);
  });
  it('should set localStorage if it is empty', () => {
    mount(<Main>{node}</Main>);
    expect(localStorage).to.deep.equal({ friendList: '{}' });
  });
  const wrapper = mount(<Main>{node}</Main>);
  it('should render Sidebar', () => {
    expect(wrapper.find('Sidebar').length).to.equal(1);
  });
  it('should render content-wrapper', () => {
    expect(wrapper.find('#content-wrapper').length).to.equal(1);
  });
});
