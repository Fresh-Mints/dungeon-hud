import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import characterSheetsReducer from './store/reducers/characterSheets';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = process.env.NODE_ENV === 'development' ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  characterSheetState: characterSheetsReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
