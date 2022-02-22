import { gql } from '@apollo/client';

export const GET_ME = gql`
 {
    me {
      _id
      username
      email
      bookCount
      savedBooks{
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;









































// import { gql } from '@apollo/client';



// export const QUERY_USER = gql`
//   query User {
//     user {
//       _id
//       username
//       memoryCount
//       email
//       memories
//     }
//   }
// `;

// export const QUERY_MEMORY = gql`
//   query memory {
//     memory {
//       MemoryID
//       title
//       description
//       user
//       questions
//     }
//   }
// `;


// export const QUERY_QUESTION = gql`
//   query Question {
//     question {
//       questionID
//       title
//       answer
//     }
//   }
// `;