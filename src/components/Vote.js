// Modules
import React from 'react';


export default ({pair, vote, hasVoted}) => {

  const getPair = () => pair;
  const hasVotedFor = (entry) => hasVoted === entry;
  const isDisabled = () => !!hasVoted;

  return (
    <div className="voting">
        {getPair().map( entry =>
          <button disabled={isDisabled()}
                  onClick={() => vote(entry)}
                  key={entry}>
            <h1>{entry}</h1>
            {hasVotedFor(entry) ? <div className="label">Voted</div> : null }
          </button>
        )}

    </div>
  );
}
