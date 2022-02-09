const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers,  } = require('./schemas');
// const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express')
// import {typedef, resolver} = require
const { authMiddleWare } = require('./utils/auth')




const app = express();
const PORT = process.env.PORT || 3001;
// init new apollo server
const startServer = async () => 
{
  console.log("happened")
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleWare
  });
  await server.start();
  console.log("happened2");
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();
app.use(express.static(__dirname + "/client/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});