import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import AddFriend from '../../../app/components/Sidebar/AddFriend';

describe('AddFriend', () => {
  const addFriend = sinon.spy();
  const wrapper = mount(<AddFriend handler={addFriend} />);
  const input = wrapper.find('input');
  it('should render input bar with a className add-friend', () => {
    expect(wrapper.find('input').length).to.equal(1);
    expect(wrapper.find('.add-friend').length).to.equal(1);
  });
  it('it should call addFriend for text input', () => {
    input.get(0).value = 'check';
    input.simulate('keyPress', { keyCode: 13 });
    expect(addFriend.called).to.equal(true);
  });
  it('it should not call addFriend for blank input', () => {
    addFriend.reset();
    input.get(0).value = '   ';
    input.simulate('keyPress', { keyCode: 13 });
    expect(addFriend.called).to.equal(false);
  });
});
