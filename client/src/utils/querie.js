import { gql } from '@apollo/client'

export const GET_ME = gql`
  query {
    user {
      _id
      username
      email
      memories {
        _id
      }
    }
  }
`

export const GET_MEMORY = gql`
  query ($_id: ID) {
    memory (_id: $_id){
      title
      description
    }
  }
`
