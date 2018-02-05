//This file controls the paths of all routes in the app. It is to only be rendered once in the app component. We need react to use the JSX and we need router to perform the page changes.
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard1 from './components/Wizards/Wizard1/Wizard1';
import Wizard2 from './components/Wizards/Wizard2/Wizard2';
import Wizard3 from './components/Wizards/Wizard3/Wizard3';
import Wizard4 from './components/Wizards/Wizard4/Wizard4';
import Wizard5 from './components/Wizards/Wizard5/Wizard5';

export default (
  <Switch>
    <Route exact path="/" component={ Auth }/>
    <Route path="/dash" component={ Dashboard }/>
    <Route path="/1" component={ Wizard1 }/>
    <Route path="/2" component={ Wizard2 }/>
    <Route path="/3" component={ Wizard3 }/>
    <Route path="/4" component={ Wizard4 }/>
    <Route path="/5" component={ Wizard5 }/>
  </Switch>
)
