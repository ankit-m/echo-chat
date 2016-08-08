import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Title from '../../../app/components/Sidebar/Title';

describe('Title', () => {
  const wrapper = mount(<Title name="test" />);
  it('should have a status state', () => {
    expect(wrapper.text()).to.contain('test');
  });
  it('should render the name passed', () => {
    expect(shallow(<Title name="test" />)
      .contains(<b>test</b>))
      .to.equal(true);
  });
  it('should set status to online when computer is online', () => {
  });
  it('should set status to offline when computer goes offline', () => {
  });
});
