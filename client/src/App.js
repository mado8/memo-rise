import React from 'react'
// import Container from "./components/MainContainer"
// import DashboardComponent from './components/Dashboard/Dashboard';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from "./components/MainContainer"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});






function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      

      {/* <DashboardComponent/> */}
      < Container/>
      {/* <CreateMemory /> */}
    
      </div>
      </ApolloProvider>
  )
}

export default App