// Modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { List, Map } from 'immutable';

// Components
import { VotingContainer } from './Voting';
import { ResultsContainer } from './Results';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={VotingContainer}/>
        <Route path="/results" component={ResultsContainer} />
      </Switch>
    );
  }
}

export default App;
