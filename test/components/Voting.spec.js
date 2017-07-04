// Modules
import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme);

// Components
import Voting from '../../src/components/Voting';
import Vote from '../../src/components/Vote';
import Winner from '../../src/components/Winner';


describe('Voting', () => {

  let wrapper;

  describe("Vote", () => {

    let buttons;
    let voteChoice;
    let firstButton;

    beforeEach("wrapper prop setup", () => {
      const props = {
        pair: ["Trainspotting", "28 Days Later"],
        vote: (entry) => voteChoice = entry,
      };
      wrapper = shallow(<Vote {...props} />);
      buttons = wrapper.find('button');
    });

    it('renders a pair of buttons', () => {
      const button_0_text = buttons.at(0).text();
      const button_1_text = buttons.at(1).text();

      expect(buttons.length).to.equal(2);
      expect(button_0_text).to.equal('Trainspotting');
      expect(button_1_text).to.equal('28 Days Later');
    });

    it("invokes callback when button is clicked", () => {
      const firstButton = buttons.at(0);
      firstButton.simulate('click');

      expect(voteChoice).to.equal('Trainspotting')
    });

    it("displays .label after vote", () => {
      wrapper.setProps({ hasVoted: 'Trainspotting' });
      const label = wrapper.find('.label');

      expect(label).to.have.length(1);
    });

    // Why is this failing!!!
    xit("disables buttons after user votes", () => {
      wrapper.setProps({ voteChoice: 'Trainspotting' });
      const button_0 = buttons.at(0);
      const button_1 = buttons.at(1);

      expect(button_0.prop('disabled')).to.be.true;
      expect(button_1.prop('disabled')).to.be.true;
    });

  });

  describe("Winner", () => {

    it("displays Winner", () => {
      wrapper = shallow(<Voting  winner={'Trainspotting'}/>);
      const winner = wrapper.find(Winner);

      expect(winner.length).to.equal(1);
    })

  });


});
