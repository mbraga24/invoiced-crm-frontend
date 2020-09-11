import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
