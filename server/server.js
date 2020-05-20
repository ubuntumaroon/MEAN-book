const fs = require('fs');
const express = require('express');
const {ApolloServer} = require('apollo-server-express');

let aboutMessage = "Issue tracker v1.0";


const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setAboutMessage,
  },
};

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });


app.listen(3000, function(){
  console.log('App listening on port: 3000');
});