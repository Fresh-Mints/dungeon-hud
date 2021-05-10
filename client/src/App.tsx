import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import styles from './App.module.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Navigation } from './components/containers/Navigation/Navigation';

import {CharacterSheet} from './components/containers/characterSheet/container/CharacterSheet';

import Examples from './components/containers/examples';
import { LoginSignUp } from './components/containers/LoginSignUp/containers/LoginSignUp';
import { emptyUser, IUser } from './store/User/model';
import { UserContext } from './store/User/UserContext';
import { CharacterSelect } from './components/containers/CharacterSelect/container/CharacterSelect';


function App() {
  const [user, setUser] = useState(emptyUser);

  const userContextValue = useMemo(() => ({ user, setUser }), [user, setUser])
  
  const routes = (
    <Switch>
      <Route path='/characterSheet' component={CharacterSelect} />
      <Route path='/examples' component={Examples} />
      <Route path='/login' component={LoginSignUp} />
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
