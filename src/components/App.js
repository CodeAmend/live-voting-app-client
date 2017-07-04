// Modules

import React from 'react';
import { Route } from 'react-router-dom';
import { List } from 'immutable';

// Components
import Voting from './Voting';

const pair = List.of('Trainspotting', '28 Days')

// Factory to add pair
const PropRoute = (props) => {
  return <props.component pair={pair} {...props}  />
}

class App extends React.Component {
  render() {
    return (
      <PropRoute path="/" component={Voting}/>
    );
  }
}


export default App;
