# Invoiced CRM Application

### Create App
```
npx create-react-app invoiced-crm-frontend app
```

### Install Pure CSS
```
 npm install purecss --save   

```
_Import the pure.css file_
```
=============
  index.js
=============
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css'; <========== import purecss
import App from './components/App.js';
```
### Install react-router-dom
```
npm install --save react-router-dom
```
#### Quick review:
* **BrowserRouter** is the router implementation for HTML5 browsers (vs Native). 
* **Link** is your replacement for anchor tags.
* **Route** is the conditionally shown component based on matching a path to a URL.
* **Switch** returns only the first matching route rather than all matching routes.

_Import components from react-router-dom_
```
=============
  index.js
=============
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import { BrowserRouter as Router } from 'react-router-dom'; <========== import
import App from './components/App.js';
import './index.css';
```
_Wrap the the Router component around the App component_

```
ReactDOM.render(
  <Router> <========== open!
    <App />
  </Router>, <========== close!
  document.getElementById('root')
);
```
_Import components from react-router-dom to properly route your components
```
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; <========== import
import data from './data';
import Layout from './Layout';
import './App.css';
```