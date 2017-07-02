// Modules
import React from 'react';


export default ({pair, vote}) =>
  <div className="voting">

    {pair.map( entry => {
      return <button onClick={() => vote(entry)} key={entry}>
        {entry}
      </button>
    })}

  </div>
;
