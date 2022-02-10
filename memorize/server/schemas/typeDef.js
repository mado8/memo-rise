const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String!
  memoryCount: Int
  password: String!
  email: String!
  savedMemory: [Memory]!
}

type Memory {
    MemoryID: ID!
    title: String!
    description: String
    savedQuestion: [Question]!
    createdAt: Date;
  }

  type Question {
    questionID: ID!
    title: String!
    answer: String!

  }


type Query {
me: User
} 
input userInput {
    _id: ID!
  username: String!
  memoryCount: Int
  password: String!
  email: String!
  savedMemory: [Memory]!
  }
  input memoryInput {
    MemoryID: ID!
    title: String!
    description: String
    savedQuestion: [Question]!
    createdAt: Date;
  }




  type Mutation {
    addUser(userData: userInput): User!
    
    addMemory(memoryData: memoryInput): User!
    removeMemory(memoryID: ID!): User!
    
  }
`;

module.exports = typeDefs;

