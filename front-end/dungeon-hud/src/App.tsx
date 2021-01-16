import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import CharacterSheet from './components/containers/characterSheet/CharacterSheet';

function App() {
  let routes = (
    <Switch>
      <Route path="/" render={props => <CharacterSheet />} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    routes
  );
}
export default withRouter(
  (App)
);
