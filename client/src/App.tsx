import React, { useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Navigation } from './components/containers/Navigation/Navigation';

import {CharacterSheet} from './components/containers/characterSheet/container/CharacterSheet';
import {CreateCharacterSheet} from './components/containers/characterSheet/container/CreateCharacterSheet';

import Examples from './components/containers/examples';
import { LoginSignUp } from './components/containers/LoginSignUp/containers/LoginSignUp';
import { emptyUser } from './store/User/model';
import { UserContext } from './store/User/UserContext';
import { CharacterSelect } from './components/containers/CharacterSelect/container/CharacterSelect';


function App() {
  const [user, setUser] = useState(emptyUser);

  const userContextValue = useMemo(() => ({ user, setUser }), [user, setUser])
  
  const routes = (
    <Switch>
      <Route path='/examples' component={Examples} />
      <Route path='/login' component={LoginSignUp} />
      
      <Route path='/characterSheet/create'>
        {!user._id ? <Redirect to='/login' /> : <CreateCharacterSheet />}
      </Route>
      <Route path='/characterSheet/:id'>
        {!user._id ? <Redirect to='/login' /> : <CharacterSheet />}
      </Route>
      <Route path='/characterSheet/'>
        {!user._id ? <Redirect to='/login' /> : <CharacterSelect />}
      </Route>
    </Switch>    
  );

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    // call custom hook to fetch user data if token is valid
    // const user = useFetchUser(token);
    // // store it into user context
    // setUser(user);
  });

  return (
    <div className={styles.App}>
      <UserContext.Provider value={userContextValue}>
        <Navigation />
        {routes}
      </UserContext.Provider>
    </div>
  );
}

export default withRouter(App);
