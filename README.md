# Invoiced CRM Application

### Create App
```
npx create-react-app invoiced-crm-frontend app
```

### Install Pure CSS
```
 npm install purecss --save   

```
__Import__
```
=============
  index.js
=============
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css'; <============== import purecss
import App from './components/App.js';
```
### Install react-router-dom
#### About react router
> => BrowserRouter is the router implementation for HTML5 browsers (vs Native).
> => Link is your replacement for anchor tags.
> => Route is the conditionally shown component based on matching a path to a URL.
> => Switch returns only the first matching route rather than all matching routes.
```
npm install --save react-router-dom
```
__Import__
```
=============
  index.js
=============
import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure.css';
import { BrowserRouter as Router } from 'react-router-dom'; <============== import react-router-dom
import App from './components/App.js';
import './index.css';
```