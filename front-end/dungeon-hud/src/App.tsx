import React from 'react';
import styles from './App.module.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import { Navigation } from './components/containers/Navigation/Navigation';

import CharacterSheet from './components/containers/characterSheet/CharacterSheet';
import reducer from './store/reducers/characterSheets';

import Examples from './components/containers/examples';


function App() {
  let routes = (
    <Switch>
      <Route path='/characterSheet' component={CharacterSheet} />
      <Route path='/examples' component={Examples} />
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