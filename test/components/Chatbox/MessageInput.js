import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import MessageInput from '../../../app/components/Chatbox/MessageInput';

describe('MessageInput', () => {
  const sendMessage = sinon.spy();
  const wrapper = mount(<MessageInput handler={sendMessage} />);
  const input = wrapper.find('input');
  it('should render input bar with a className new-message', () => {
    expect(wrapper.find('.new-message').length).to.equal(1);
  });
  it('it should call sendmessage for text input', () => {
    input.get(0).value = 'check';
    input.simulate('keyPress', { keyCode: 13 });
    expect(sendMessage.called).to.equal(true);
  });
  it('it should not call sendMessage for blank input', () => {
    sendMessage.reset();
    input.get(0).value = '   ';
    input.simulate('keyPress', { keyCode: 13 });
    expect(sendMessage.called).to.equal(false);
  });
});
