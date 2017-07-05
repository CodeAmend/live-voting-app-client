import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme);

import {List, Map} from 'immutable';
import Results from '../../src/components/Results';

describe('Results', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Trainspotting', '28 Days Later');
    const tally = Map({'Trainspotting': 5});
    const component = shallow(
      <Results pair={pair} tally={tally} />
    );
    const entries = component.find('.entry');
    const [train, days] = entries.map( e => e.text() );

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Trainspotting');
    expect(train).to.contain('5');
    expect(days).to.contain('28 Days Later');
    expect(days).to.contain('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Trainspotting', '28 Days Later');
    const component = shallow(
      <Results pair={pair}
               tally={Map()}
               next={next}/>
    );

    component.find('button').simulate('click');
    expect(nextInvoked).to.equal(true);
  });

});
