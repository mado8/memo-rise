import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  query User {
    user {
      _id
      username
      memoryCount
      email
      memories
    }
  }
`;

export const QUERY_MEMORY = gql`
  query memory {
    memory {
      MemoryID
      title
      description
      user
      savedQuestion
    }
  }
`;


export const QUERY_QUESTION = gql`
  query Question {
    question {
      questionID
      title
      answer
    }
  }
`;