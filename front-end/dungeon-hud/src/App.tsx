import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect, Provider } from 'react-redux'
import CharacterSheet from './components/containers/characterSheet/CharacterSheet';
import { ICharacterSheetState } from './models/characterSheet.model';
import reducer from './store/reducers/characterSheets'
import { combineReducers, createStore } from 'redux';

function App() {
  return (
      <CharacterSheet />
    
  );
}

export default App;

