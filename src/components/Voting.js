// Modules
import React from 'react';

// Components
import Vote from './Vote';
import Winner from './Winner';


export default (props) => {
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
