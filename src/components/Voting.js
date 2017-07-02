// Modules
import React from 'react';


export default ({pair, vote, hasVoted}) => {

  const hasVotedFor = (entry) => hasVoted === entry;

  return (
    <div className="voting">

      {pair.map( entry =>
        <button onClick={() => vote(entry)}
                key={entry}>
          <h1>{entry}</h1>
          {hasVotedFor(entry) ? <div className="label">Voted</div> : null }
        </button>
      )}

    </div>
  );
}
