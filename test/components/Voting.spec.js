// Modules
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme);

// Components
import Voting from '../../src/components/Voting';


describe('Voting', () => {

  let wrapper;
  let buttons;
  let voteChoice;
  let firstButton;

  beforeEach("wrapper prop setup", () => {
    const props = {
      pair: ["Trainspotting", "28 Days Later"],
      vote: (entry) => voteChoice = entry,
    };
    wrapper = shallow(<Voting {...props} />);
    buttons = wrapper.find('button');
    firstButton = buttons.at(0);
  });

  it('renders a pair of buttons', () => {
    expect(buttons.length).to.equal(2);
    expect(buttons.at(0).text()).to.equal('Trainspotting');
    expect(buttons.at(1).text()).to.equal('28 Days Later');
  });

  it("invokes callback when button is clicked", () => {
    firstButton.simulate('click');
    expect(voteChoice).to.equal('Trainspotting')
  });

  it("displays .label after vote", () => {
    expect(wrapper.find('.label')).to.have.length(0);
    wrapper.setProps({ voteChoice: 'Trainspotting' });
    expect(wrapper.find('.label')).to.have.length(1);
  });

  it("displays disables buttons after user votes", () => {
    wrapper.setProps({ voteChoice: 'Trainspotting' });
    const button1 = button.at(0);
    const button2 = button.at(1);

    expect(buttons.at(0).prop('disabled')).to.be.true;
    expect(buttons.at(1).prop('disabled')).to.be.true;
  });

});
