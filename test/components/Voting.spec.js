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

    const buttons = component.find('button');
    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).text()).to.equal('Trainspotting');
    expect(buttons.at(1).text()).to.equal('28 Days Later');

  });

});
