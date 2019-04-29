import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';    
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import AppShow from './ShowApps.js'
import AppShowOldest from './ShowAppsOldest.js'
import AppShowPopular from './ShowAppsPopular.js'
import AppShowNotPopular from './ShowAppsNotPopular.js'
import App_total_details from './entire_details_app.js'
import creatorsView from './creatorsview.js'
import myProfil from './myProfil.js'
import LoginPage from './LoginPage.js'
import RegisterPage from './registration.js'
import Createapp from './createApp.js'
import Workon from './workon.js'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/apps" component={AppShow} />
        <Route path="/appsold" component={AppShowOldest} />
        <Route path="/appspopular" component={AppShowPopular} />
        <Route path="/appsnotpopular" component={AppShowNotPopular} />
        <Route path="/app/:appID" component={App_total_details} /> 
        <Route path="/creator/:creatorID" component={creatorsView} />
        <Route path="/profil/:profilID" component={myProfil} />
        <Route path="/signin/" component={LoginPage} />
        <Route path='/signup/' component={RegisterPage} />
        <Route path='/createapp/' component={Createapp} />
        <Route path='/myapps/' component={Workon} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();

// /apps/ funktioniert nicht bei Appdetails das es sich hierbei um nested-urls handelt