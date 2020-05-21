const fs = require('fs');
const express = require('express');
const {ApolloServer, UserInputError} = require('apollo-server-express');
const {GraphQLScalarType} = require('graphql');
const {Kind} = require('graphql/language');

let aboutMessage = "Issue tracker v1.0";

const issuesDB = [
  {
    id: 1, status: 'New', owner: 'Ravan', effort: 5,
    created: new Date('2019-01-15'), due: undefined,
    title: 'Error in console when clicking Add',
  },
  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
    created: new Date('2019-01-16'), due: new Date('2019-02-01'),
    title: 'Missing bottom border on panel',
  },
];

const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'GraphQL date type scalar',
  serialize(value) {
    return value.toISOString();
  },

  parseValue(value) {
    console.log("value passing in: " + value);
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind == Kind.STRING) {
      const dateValue = new Date(ast.value);
      return isNaN(dateValue) ? undefined : dateValue;
    }
  },
});

function validateIssue(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Title must be at least 3 characters');
  }
  if (issue.status == 'Assigned' && !issue.owner) {
    errors.push('Field "Owner" is required when status is "Assigned".');
  }

  if (errors.length > 0) {
    throw new UserInputError('Invalid inputs', { errors });
  }
}

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
    issueAdd,
  },
  GraphQLDate,
};

function issueList() {
  return issuesDB;
}

function setAboutMessage(_, { message }) {
  return aboutMessage = message;
}

function issueAdd(_, { issue }) {
  validateIssue(issue);
  issue.created = new Date();
  issue.id = issuesDB.length + 1;
  issuesDB.push(issue);
  return issue;
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
  resolvers,
  GraphQLDate,

  formatError: error => {
    console.log(error);
    return error;
  }
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });


app.listen(3000, function(){
  console.log('App listening on port: 3000');
});