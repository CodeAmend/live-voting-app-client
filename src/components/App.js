// Modules

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List, Map } from 'immutable';

// Components
import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days');
const tally = Map({ 'Trainspotting': 4 , '28 Days': 4 });

// Factory to add pair
const PropRoute = (props) => {
  return <props.component pair={pair} tally={tally}{...props}  />
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <PropRoute exact path="/" component={Voting}/>
        <PropRoute path="/results" component={Results} />
      </Switch>
    );
  }
}


export default App;
