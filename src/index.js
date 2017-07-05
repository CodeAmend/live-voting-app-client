// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import io from 'socket.io-client';

// Components
import App from './components/App';

// reducers
import reducer from './reducer';

// Actions
import { setState } from './action_creators';


const socket = io(`${location.protocol}//${location.hostname}:8090`)

const store = createStore(reducer);

socket.on('state', state =>
 store.dispatch( setState(state) )
);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2}
    }
  }
})


ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
  document.getElementById('root')
);
