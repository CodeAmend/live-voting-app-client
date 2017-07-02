// Modules
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import Voting from '../../src/components/Voting';


describe('Voting', () => {

  it('renders a pair of buttons', () => {

    const props = {
      pair: ["Trainspotting", "28 Days Later"]
    };

    const component = shallow(<Voting {...props} />
    );

    expect(component.find('button').length).to.equal(2);

  });

});
