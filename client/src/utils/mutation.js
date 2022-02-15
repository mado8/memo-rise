import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MEMORY = gql`
  mutation saveMemory($memoryData: MemoryInput!) {
    saveMemory(memoryData: $memoryData) {
      MemoryID
      title
      description
    
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  }
`;