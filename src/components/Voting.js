// Modules
import React from 'react';
import { connect } from 'react-redux';

// Components
import Vote from './Vote';
import Winner from './Winner';

// Actions
import { vote } from '../action_creators';

export const Voting = (props) => {
  const { winner } = props;
  return (
    <div className="voting">
      {winner ?
        <Winner winner={winner} /> :
        <Vote {...props} />
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    winner: state.get('winner'),
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
  }
}

export const VotingContainer = connect(mapStateToProps, {
  vote
})(Voting);
