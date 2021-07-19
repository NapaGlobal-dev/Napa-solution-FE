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
export const GET_COMPANYHISTORY = gql`
  query getCompanyHistory{
    banner:allLayouts(where:{name:"CompanyHistory_Banner"}){
      name
      property(sortBy:name_ASC){
        name
        value
        image{
          publicUrl
        }
      }
    }
    breadcrumb:allLayouts(where:{name:"CompanyHistory_Breadcrumb"}){
      name
      property(sortBy:name_ASC){
        name
        value
        url
      }
    }
    history:allLayouts(where:{name:"CompanyHistory_History"}){
      name
      property(sortBy:name_ASC){
        name
        value
        content(sortBy:name_ASC){
          name
          value
          content(sortBy:name_ASC){
            name
            value
          }
        }
      }
    }
  }
`;
