import React from 'react'
import Container from "./components/MainContainer"
import DailyActivities from './components/DailyActivities/DailyActivites';
import Home from './components/Home/home'
import Dashboard from './components/Dashboard/Dashboard';
import Activity from './components/DailyActivities/DailyActivites'
import Board from './components/MemoryGame/Board'
import Auth from './utils/auth'
// import DashboardComponent from './components/Dashboard/Dashboard';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DailyActivites from './components/DailyActivities/DailyActivites';



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
        <Router>
          <Switch>
            
            {/* {Auth.loggedIn() ? ( */}
              <Route exact path='/'>
                <Home />
              </Route>
            {/* ): ( */}
              {/* <Redirect to="/dashboard"></Redirect> */}
            {/* )} */}

            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/memoryGame">
              <Board />
            </Route>


            <Route path="/new-memory">

            </Route>
            <Route path="/activity">
              <DailyActivites/>
            </Route>

            <Route path="/container">
              <Container />
            </Route>
            <Route path="/activity">
                <DailyActivities />
              </Route>

            {
              sessionStorage.authtoken == null &&
              <Redirect to="/" />
            }
          </Switch>
        </Router>
      </div>
    </ApolloProvider>

  )
}

export default App