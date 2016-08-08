import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from '../../../app/components/Chatbox/Loader';

describe('Loader', () => {
  it('should show a loader div', () => {
    expect(shallow(<Loader />)
      .contains(<div className="loader" />))
      .to.equal(true);
  });
});
