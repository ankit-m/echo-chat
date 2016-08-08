import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Messages from '../../../app/components/Chatbox/Messages';

describe('Messages', () => {
  const messages = [
    { type: 1, message: 'test' },
    { type: 0, message: 'check' },
    { type: 0, message: 'check' },
  ];
  const wrapper = render(<Messages messages={messages} />);
  it('should render 3 messages', () => {
    expect(wrapper.find('.message').length).to.equal(3);
  });
  it('should render 2 mine messages and 1 other message', () => {
    expect(wrapper.find('.mine').length).to.equal(2);
    expect(wrapper.find('.other').length).to.equal(1);
  });
  it('should render 3 timestamps', () => {
    expect(wrapper.find('.timestamp').length).to.equal(3);
  });
});
