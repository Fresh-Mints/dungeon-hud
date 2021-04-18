import React from 'react';
import styles from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Navigation } from './components/containers/Navigation/Navigation';

import {CharacterSheet} from './components/containers/characterSheet/container/CharacterSheet';

import Examples from './components/containers/examples';
import { LoginSignUp } from './components/containers/LoginSignUp/containers/LoginSignUp';


function App() {
  let routes = (
    <Switch>
      <Route path='/characterSheet' component={CharacterSheet} />
      <Route path='/examples' component={Examples} />
      <Route path='/login' component={LoginSignUp} />
    </Switch>    
  );
  return (
    <div className={styles.App}>
      <Navigation />
      {routes}
    </div>
  );
}

export default withRouter(App);
