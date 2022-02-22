import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MEMORY = gql`
  mutation addMemory($memoryData: MemoryInput) {
    addMemory(memoryData: $memoryData) {
      title
      description
      }
    }
  
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_MEMORY = gql`
  mutation deleteMemory($MemoryId: ID!) {
    deleteMemory(MemoryId: $MemoryId) {
      MemoryID
      }
    }
  
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($questionData: QuestionInput, $memoryID:ID!) {
    addQuestion(questionData: $questionData, memoryID: $memoryID) {
      _id
    	title
    	description
    	questions {
        _id
      }
    }
  }
`;