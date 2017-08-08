// Modules
import React from 'react';
import {List, Map, fromJS} from 'immutable';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chaiImmutable from 'chai-immutable';
chai.use(chaiEnzyme);
chai.use(chaiImmutable);

// Components
import Voting from '../../src/components/Voting';
import Vote from '../../src/components/Vote';
import Winner from '../../src/components/Winner';

import reducer from '../../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({Trainspotting: 1})
        })
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal( fromJS({
      vote: {
        pair: [ 'Trainspotting', '28 Days Later' ],
        tally: { Trainspotting: 1 }
      }
    }));

  });

  it("handles SET_STATE with vanilla JavaScript", () => {

    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Trainspotting', '28 Days Later'],
          tally: { Trainspotting: 1 }
        }
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal( fromJS({
      vote: {
        pair: [ 'Trainspotting', '28 Days Later' ],
        tally: { Trainspotting: 1 }
      }
    }));

  });
  
  it("removes hasVoted on new SET_STATE", () => {

    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { Trainspotting: 1 }
      },
      hasVoted: 'Trainspotting'
    });

    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Sunshine', 'Slumdog Millionaire'],
        }
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal( fromJS({
      vote: {
        pair: ['Sunshine', 'Slumdog Millionaire'],
      }
    }));


  });

  it("handles SET_STATE without an initial state", () => {
    const action = {
      type: 'SET_STATE',
      state: {
        pair: [ 'Trainspotting', '28 Days Later' ],
        tally: { Trainspotting: 1 }
      }
    };
    const newState = reducer(undefined, action)

    expect(newState).to.equal( fromJS({
      pair: [ 'Trainspotting', '28 Days Later' ],
      tally: { Trainspotting: 1 }
    }));
  });

  it('handles VOTE by setting hasVoted', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { Trainspotting: 1 }
      }
    }); // fromJS

    const action = { type: 'VOTE', entry: 'Trainspotting' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal( fromJS({
      vote: {
        pair: [ 'Trainspotting', '28 Days Later' ],
        tally: { Trainspotting: 1 }
      },
      hasVoted: 'Trainspotting'
    }));

  });

  it('does not set hasVoted for invalid entry', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { Trainspotting: 1 }
      }
    }); // fromJS

    const action = { type: 'VOTE', entry: 'Braveheart' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal( fromJS({
      vote: {
        pair: [ 'Trainspotting', '28 Days Later' ],
        tally: { Trainspotting: 1 }
      }
    }));

  });



});
