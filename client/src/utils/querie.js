import { gql } from '@apollo/client'

export const GET_ME = gql`
  {
    user {
      _id
      username
      email
      memories{
        _id
      }
    }
  }
`
