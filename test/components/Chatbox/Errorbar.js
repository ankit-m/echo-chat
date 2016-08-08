import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Errorbar from '../../../app/components/Chatbox/Errorbar';

describe('Errorbar', () => {
  it('should show an error mark', () => {
    expect(shallow(<Errorbar />)
      .contains(<span className="glyphicon glyphicon-exclamation-sign" />))
      .to.equal(true);
  });
});
