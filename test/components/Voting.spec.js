// Modules
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

// Load ReactTest Utils
const {
  renderIntoDocument
} = ReactTestUtils; 

// Components
import Voting from '../../src/components/Voting';

describe('Voting', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Voting pair={["Trainspotting", "28 Days Later"]} />
    );
  });

});
