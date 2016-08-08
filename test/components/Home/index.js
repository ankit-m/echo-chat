import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Home from '../../../app/components/Home';

describe('Home', () => {
  it('should render left icon in home component', () => {
    expect(shallow(<Home />)
      .contains(<span className="glyphicon glyphicon-hand-left" />))
      .to.equal(true);
  });
});
