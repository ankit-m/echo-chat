import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/App';

describe('<App />', () => {
  it('should mount a div', () => {
    expect(shallow(<App />).contains(<div />)).to.equal(true);
  });
});
