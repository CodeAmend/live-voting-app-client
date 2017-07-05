// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

// Components
import App from './components/App';

ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
  document.getElementById('root')
);
