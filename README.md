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
import App from './App';
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
================
    index.js
================
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import { BrowserRouter as Router } from 'react-router-dom'; <========== import
import App from './App';
import './index.css';
```
_Wrap the the Router component around the App component_

```
================
    index.js    
================
ReactDOM.render(
  <Router> <========== open!
    <App />
  </Router>, <========== close!
  document.getElementById('root')
);
```
_Import components from react-router-dom to properly route your components_
```
==============
    App.js    
==============
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; <========== import
import './App.css';
```
_Wrap the the Switch component around all your Route components_
```
==============
    App.js    
==============
render() {
  return (
    <div id="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </div>
  );
}
```
### Install SASS
```
npm install node-sass --save
```
Follow [guide](https://create-react-app.dev/docs/adding-a-sass-stylesheet/).

Change the file extensions from .css to .scss or .sass in the file tree and on your imports.

### Using CSS Modules Stylesheet

Follow [guide](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).
Extre [resource](https://www.robinwieruch.de/create-react-app-css-modules).

