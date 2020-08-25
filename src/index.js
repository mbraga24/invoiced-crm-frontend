import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
