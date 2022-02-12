const { gql } = require('apollo-server-express')

const typeDefs = gql`

  type User {
    _id: ID!
    username: String!
    memoryCount: Int
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
  } 

  input UserInput {
    _id: ID!
    username: String!
    memoryCount: Int
    email: String!
  }

  input MemoryInput {
    MemoryID: ID!
    title: String!
    description: String
  }

  type Mutation {
    addUser(userData: UserInput): Auth
    addMemory(memoryData: MemoryInput): User!
    removeMemory(memoryID: ID!): User!
  }
`

module.exports = typeDefs
