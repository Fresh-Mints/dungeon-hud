import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { cache } from './store/cache';
import { ApolloClient, ApolloProvider, createHttpLink, NormalizedCacheObject, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { loader } from 'graphql.macro';
import { config } from 'dotenv';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

config();

const schema = loader('../../api/src/schema.gql')

// Initialize http Link
const httpLink = createHttpLink({
  uri: process.env.API_HTTP_URI ?? 'http://127.0.0.1:4000/graphql'
});
// http auth link
const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('token');

  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
      },
  };
});
// websocket + auth link
const wsLink = new WebSocketLink({
  uri: process.env.API_WS_URI ?? 'ws://http://127.0.0.1:4000/graphql',
  options: {
    // reconnect: true,
    connectionParams: {
      isWebSocket: true,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
  }
})
// split for subscription & http
const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
wsLink,
authLink.concat(httpLink)
)

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: splitLink,
  cache: cache,
  typeDefs: schema,
})
  
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();