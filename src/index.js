// Modules
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Voting from './components/Voting';

// Props
const pair = ['Trainspotting', '28 Days'];

// Hello dude
ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('root')
);
