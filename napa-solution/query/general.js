import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query getNews {
    allNews {
      id
      name
      title
      dateSubmitted
    }
  }
`;

export const businessSumaryQuery = gql`
  query BusinessSummary {
    page: Page(where: { id: "60ee8e64df4207324c4d3a97" }) {
      name
      url
      layouts {
        name
        property {
          name
          value
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
        }
      }
      subpages: childrenPage {
        name
        url
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
      parentPage {
        name
      }
      image {
        path
      }
    }
  }
`;
export const GET_HEADER = gql`
  query getHeader{
    navbar:allLayouts(where:{name:"Navbar"}){
      name
      property(sortBy:name_ASC){
        name
        value
        url
        image{
          publicUrl
        }
      }
    }
  }
`;

export const contactQuery = gql`
query getContact {
  page: Page(where: { id: "60f10dca64a49c3384b60661" }) {
    name
    url
    layouts {
      name
      property {
        name
        value
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }
  }
}
`;