// Modules
import React from 'react';

export default (props) => {

  const getPair = () => props.pair || [];

  const getVotes = (entry) => {
    if(props.tally && props.tally.has(entry))
      return props.tally.get(entry);
    return 0;
  }

  return (
    <div className="voting">
      {getPair().map( entry =>
        <div key={entry} className="entry">
          <h1>{entry}</h1>
          <div className="vote-count">
            {getVotes(entry)}
          </div>
        </div>
      )}
      <div className="management">
        <button className="next"
                onClick={props.next}>
          Next
        </button>
      </div>
    </div>
  );
}
