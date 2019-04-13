import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppShow from './ShowApps.js'
import Appdetails from './detail_app.js'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/apps/" component={AppShow} />
        <Route path="/app/:appID" component={Appdetails} /> 
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();

// /apps/ funktioniert nicht bei Appdetails das es sich hierbei um nested-urls handelt