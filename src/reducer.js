// Modules
import { Map, List, fromJS  } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentPair = state.getIn(['vote', 'pair']);
  if(currentPair && currentPair.includes(entry)) {
    return state.set('hasVoted', entry)
  }
  return state;
}

function resetVote(state) {
  return state.remove('hasVoted')
}


export default (state = Map(), action) => {

  switch (action.type) {
    case 'SET_STATE':
      return resetVote(setState(state, action.state));
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}
