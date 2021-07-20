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
    content:allLayouts(where:{name:"CompanyHistory_Content"}){
      name
      property(sortBy:name_ASC){
        name
        value
      }
    }
    history:allHistories(sortBy:name_ASC, search:"CompanyHistory"){
      name
      year
      milestones(sortBy:name_ASC){
        name
        date
        events(sortBy:name_ASC){
          name
          event
        }
      }
    }
  }
`;
export const GET_COMPANYPAGES = gql`
  query getCompanyPages{
    pages:allLayouts(where:{name:"CompanyPages"}){
      name
      property(sortBy:name_ASC){
        name
        url
        image{
          publicUrl
        }
      }
    }
  }
`;
