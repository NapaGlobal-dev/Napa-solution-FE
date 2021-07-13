import { gql } from "@apollo/client"

export const GET_NEWS = gql`
query getNews{
    allNews{
      id
      name
      title
      dateSubmitted
    }
  }
`  