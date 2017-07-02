// Modules
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Components
import Voting from '../../src/components/Voting';


describe('Voting', () => {

  let wrapper;
  let buttons;

  beforeEach("wrapper prop setup", () => {
    const props = {
      pair: ["Trainspotting", "28 Days Later"]
    };
    wrapper = shallow(<Voting {...props} />);
  });

  it('renders a pair of buttons', () => {
    buttons = wrapper.find('button');
    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).text()).to.equal('Trainspotting');
    expect(buttons.at(1).text()).to.equal('28 Days Later');
  });

  it("invokes callback when button is clicked", () => {
    let voteChoice;
    const vote = (entry) => voteChoice = entry;

    wrapper.setProps({ vote })
    const button = wrapper.find('button').at(0);
    button.simulate('click');

    expect(voteChoice).to.equal('Trainspotting')
  });

});
