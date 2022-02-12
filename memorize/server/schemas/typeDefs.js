const { gql } = require('apollo-server-express')

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    memoryCount: Int
    password: String!
    email: String!
    memories: [Memory]!
  }

  type Memory {
    MemoryID: ID!
    title: String!
    description: String
    user: User,
    savedQuestion: [Question]!
  }

  type Question {
    questionID: ID!
    title: String!
    answer: String!
  }

  type Query {
    user: User
  } 

  input userInput {
    _id: ID!
    username: String!
    memoryCount: Int
    password: String!
    email: String!
  }

  input memoryInput {
    MemoryID: ID!
    title: String!
    description: String
  }

  type Mutation {
    addUser(userData: userInput): User!
    addMemory(memoryData: memoryInput): User!
    removeMemory(memoryID: ID!): User!
  }
`

module.exports = typeDefs
