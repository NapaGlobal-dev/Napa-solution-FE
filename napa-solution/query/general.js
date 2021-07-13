import { gql } from "@apollo/client"

export const GET_NEWS = gql`
query getEvent{
    allNews{
      id
      name
      title
      dateSubmitted
    }
  }
`  