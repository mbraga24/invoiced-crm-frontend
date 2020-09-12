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
* Follow [guide](https://create-react-app.dev/docs/adding-a-sass-stylesheet/).

Change the file extensions from .css to .scss or .sass in the file tree and on your imports.

### Using CSS Modules Stylesheet

* Follow [guide](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).
* Extra [resource](https://www.robinwieruch.de/create-react-app-css-modules).

### Find _webpack.config.js_ file (To customize the config.js file you will need to create it from scratch.)

[Source](https://stackoverflow.com/questions/48395804/where-is-create-react-app-webpack-config-and-files).

### React Redux Setup

#### Basic setup
1. Install 'redux' and 'react-redux'
2. Create reducer function and default state
3. Create 'store' with 'createStore'
4. Create 'Provider' at the top level of component hierarchy with the 'store' as a prop

#### Install 'redux' and 'react-redux'
```
npm install redux react-redux
```
#### Create reducer function and default state
```
===================================
     src -> store -> reducer.js    
===================================
const defaultContacts = {
  contacts: [
    { id: 1, name: 'Andrew', email: 'andrew@example.com' },
    { id: 2, name: 'Mark', email: 'mark@example.com' },
    { id: 3, name: 'Sarah', email: 'sarah@example.com' }
  ]
}

const reducer = (state = defaultContacts, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default reducer
```
#### Create 'store' with 'createStore'
```
===================================
     src -> store -> index.js    
===================================
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
```
#### Create 'Provider' at the top level of component hierarchy with the 'store' as a prop
```
================
    index.js    
================
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux' <========== import
import store from './store' <===================== import
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router> <============ Wrap
      <App />
    </Router>
  </Provider>, <========== Wrap
  document.getElementById('root')
```

Consult the docs: [redux.js.org](https://redux.js.org/introduction/getting-started)

#### Reading State with Hooks
1. Import 'useSelector' in your component
2. Write a selector function to return whatever piece of state is important to your component

```
==============
    App.js    
==============

import { useSelector } from 'react-redux'; <========== import

// retrieve contacts from store
const contacts = useSelector(state => state.contacts)

// use the data retrieved from store
const renderContacts = () => {
  return contacts.map(info => (
    <Contact key={info.id} { ...info } />
  ))
}

```

#### Updating State with Hooks
1. Import 'useDispatch' in your component
2. Call 'useDispatch' to get access to the 'dispatch' function
3. Call 'dispatch' with an action object: `{ type: "ACTION_TYPE, payload: data "}`
4. In your reducer, write code to handle the action type and return the new state

```
===============
    app.js
===============

import { useDispatch, useSelector } from 'react-redux';

  const dispatch = useDispatch() <======== Assign the dispatch function to dispatch variable

  useEffect(() => {
    fetch("http://localhost:3000/v1/contacts")
    .then(r => r.json())
    // pass the type and payload as parameters to the dispatch function
    .then(contacts => dispatch({ type: SET_CONTACTS, payload: contacts }))
  }, [])

===========================
    store -> reducer.js   
===========================

const defaultContacts = {
  contacts: []
}

const reducer = (state = defaultContacts, action) => {
  switch(action.type) {
    case SET_CONTACTS: 
      return {
        ...state, 
        contacts: action.payload <======= Set the array of contacts returned from fetch to the global state
      }
    default:
      return state
  }
}
```