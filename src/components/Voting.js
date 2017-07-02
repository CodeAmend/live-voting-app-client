// Modules
import React from 'react';


export default ({pair}) =>
  <div className="voting">
    
    {pair.map( entry => {
      return <button key={entry}>
        {entry}
      </button>
    })}

  </div>
;
