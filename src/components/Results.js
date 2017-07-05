// Modules
import React from 'react';
import { connect } from 'react-redux';


export const Results = (props) => {

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


function mapStateToProps(state) {
  return {
    tally: state.getIn(['vote', 'tally']),
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
