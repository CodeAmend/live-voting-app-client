// Modules
import React from 'react';

// Components
import Vote from './Vote';
import Winner from './Winner';


export default (props) => {

  const { pair, hasVoted, vote, winner} = props;
  const getPair = () => pair;
  const hasVotedFor = (entry) => hasVoted === entry;
  const isDisabled = () => !!hasVoted;

  return (
    <div className="voting">
      {winner ?
        <Winner winner={winner} /> :
        <Vote {...props} />
      }
    </div>
  );
}
