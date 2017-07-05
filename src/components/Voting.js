// Modules
import React from 'react';
import { connect } from 'react-redux';

// Components
import Vote from './Vote';
import Winner from './Winner';


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
    pair: state.getIn(['vote', 'pair'])
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting);
