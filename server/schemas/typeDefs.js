const { gql } = require('apollo-server-express')

const typeDefs = gql`

  type User {
    _id: ID
    username: String!
    email: String
    memories: [Memory]!
  }

  type Memory {
    _id: ID
    title: String!
    description: String
    user: User,
    created_at: String,
    questions: [Question]!
  }

  type Question {
    _id: ID!
    question: String!
    answer: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  } 
  

  input UserInput {
    username: String!
    email: String!
    password: String!
  }


  input MemoryInput {
    title: String!
    description: String
  }
  
  input QuestionInput {
    question: String!
    answer: String!
  }
  


  type Mutation {
    addUser(userData: UserInput): Auth
    addMemory(memoryData: MemoryInput): Memory!
    removeMemory(memoryID: ID!): User!
    addQuestion(questionData: QuestionInput, memoryID: ID!): Memory!
    login(username: String!, password: String!): Auth
  }
`

module.exports = typeDefs
