import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ChatName from '../../../app/components/Chatbox/ChatName';

describe('ChatName', () => {
  it('should show the correct name', () => {
    expect(shallow(<ChatName name="test" />)
      .contains(<a className="navbar-brand">test</a>))
      .to.equal(true);
  });
  it('have a nav element', () => {
  });
});
