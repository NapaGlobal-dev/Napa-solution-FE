import { gql } from '@apollo/client';

const ADD_CUSTOMER = gql`
  mutation AddCustomers(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    createCustomer(
      data: { name: $name, email: $email, subject: $subject, message: $message }
    ) {
      id
    }
  }
`;

const GET_PAGES = gql`
  query Pages {
    pages: allPageVNS {
      name
      alias
      language {
        vi
        en
        jp
      }
    }
  }
`;

const GET_LAYOUT = gql`
  query Layout($id: ID!) {
    layout: Layout(where: { id: $id }) {
      id
      name
      property {
        id
        name
        language {
          vi
          en
          jp
        }
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }
  }
`;

const GET_ALL_SERVICE = gql`
  query getAllServices {
    works: allServiceVNS {
      fullName
      layout {
        property {
          name
        }
      }
      features {
        name
        vi
        en
        jp
      }
      featureDetails {
        vi
        en
        jp
      }
      alias
      icon {
        original: publicUrlTransformed(
          transformation: { width: "32", height: "32" }
        )
        thumbnail: publicUrl
      }
      image {
        original: publicUrl
        thumbnail: publicUrl
      }
      description {
        name
        en
        vi
        jp
      }
    }
  }
`;

const GET_ALL_RECRUIT = gql`
  query getAllRecruits($limit: Int!, $offset: Int!) {
    recruits: allRecruits(
      sortBy: submittedDate_DESC
      first: $limit
      skip: $offset
    ) {
      id
      name
      description
      location
      submittedDate
    }
  }
`;

const GET_DETAIL_RECRUIT = gql`
  query getAllRecruits($id: ID!) {
    recruit: Recruit(where: { id: $id }) {
      id
      name
      description
      location
      header
      jobDescription {
        vi
      }
      generalRequirement {
        vi
      }
      benefit {
        vi
      }
      expirationDate
      jobPosition
      experience
      salary
      workplace
      image {
        original: publicUrl
        thumbnail: publicUrl
      }
    }
  }
`;

const GET_ALL_NEW = gql`
  query getAllNews($limit: Int!, $offset: Int!) {
    new: allNews(sortBy: dateSubmitted_DESC, first: $limit, skip: $offset) {
      id
      name
      alias
      dateSubmitted
      title {
        vi
        en
        jp
      }
      description {
        vi
        en
        jp
      }
      content {
        vi
        en
        jp
      }
      image {
        original: publicUrl
        thumbnail: publicUrlTransformed(transformation: { width: "64" })
      }
    }
  }
`;

const GET_ALL_BANNER = gql`
  query getAllBanner($limit: Int!) {
    banners: allBannerVNS(sortBy: dateSubmitted_DESC, first: $limit) {
      id
      name
      dateSubmitted
      title {
        vi
        en
        jp
      }
      description {
        vi
        en
        jp
      }
      content {
        vi
        en
        jp
      }
      image {
        original: publicUrl
        thumbnail: publicUrlTransformed(transformation: { width: "64" })
      }
    }
  }
`;

const CREATE_JOB_APPLICATION = gql`
  mutation(
    $name: String!
    $email: String!
    $coverLetter: String!
    $fileCVUrl: String!
  ) {
    createCandidate(
      data: {
        name: $name
        email: $email
        coverLetter: $coverLetter
        fileCVUrl: $fileCVUrl
      }
    ) {
      id
    }
  }
`;

const generalQueries = {
  ADD_CUSTOMER,
  GET_PAGES,
  GET_LAYOUT,
  GET_ALL_SERVICE,
  GET_ALL_NEW,
  GET_ALL_RECRUIT,
  GET_DETAIL_RECRUIT,
  GET_ALL_BANNER,
  CREATE_JOB_APPLICATION
};

export default generalQueries;
