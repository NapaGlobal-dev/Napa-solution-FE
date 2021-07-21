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
    page: allPages(where: { url: "/business-summary" }, first: 1) {
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

export const companyQuery = gql`
  query Company {
    page: allPages(where: { url: "/company" }, first: 1) {
      name
      url
      layouts {
        name
        property {
          name
          key
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

export const HomePage = gql`
  query HomePage {
    page: Page(where: { id: "60eea4008c27310035add3f4" }) {
      name
      url
      layouts {
        name
        property {
          name
          key
          url
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

export const footerDataQuery = gql`
  query FooterData {
    layout: allLayouts(where: { name: "Footer" }, first: 1) {
      name
      property {
        name
        value
        url
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }

    pages: allPages(
      where: { url_in: ["/business-summary", "/company"] }
      sortBy: footerOrder_ASC
    ) {
      name
      url
      subpages: childrenPage(sortBy: footerOrder_ASC) {
        name
        url
        footerOrder
      }
      footerOrder
    }
  }
`;

export const GET_HEADER = gql`
  query getHeader {
    navbar: allLayouts(where: { name: "Navbar" }) {
      name
      property(sortBy: name_ASC) {
        name
        value
        url
        image {
          publicUrl
        }
      }
    }
  }
`;

export const InspectMaintenanceQuery = gql`
  query InspectMaintenanceQuery {
    page: Page(where: { id: "60f0ef840682d00030558973" }) {
      name
      url
      layouts {
        name
        property {
          name
          key
          value
          content {
            name
            key
            value
            content {
              name
              value
            }
          }
          flag
          url
          content {
            name
            value
            url
          }
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
export const OutsourcingQuery = gql`
  query OutsourcingQuery {
    page: Page(where: { id: "60f67674b9a5b934e0c79908" }) {
      name
      url
      layouts {
        name
        property {
          name
          key
          value
          content {
            name
            key
            value
            content {
              name
              value
            }
          }
          flag
          url
          content {
            name
            value
            url
          }
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
  query getCompanyHistory {
    banner: allLayouts(where: { name: "CompanyHistory_Banner" }) {
      name
      property(sortBy: name_ASC) {
        name
        value
        image {
          publicUrl
        }
      }
    }
    breadcrumb: allLayouts(where: { name: "CompanyHistory_Breadcrumb" }) {
      name
      property(sortBy: name_ASC) {
        name
        value
        url
      }
    }
    content: allLayouts(where: { name: "CompanyHistory_Content" }) {
      name
      property(sortBy: name_ASC) {
        name
        value
      }
    }
    history: allHistories(sortBy: name_ASC, search: "CompanyHistory") {
      name
      year
      milestones(sortBy: name_ASC) {
        name
        date
        events(sortBy: name_ASC) {
          name
          event
        }
      }
    }
  }
`;
export const GET_COMPANYPAGES = gql`
  query getCompanyPages {
    pages: allLayouts(where: { name: "CompanyPages" }) {
      name
      property(sortBy: name_ASC) {
        name
        url
        image {
          publicUrl
        }
      }
    }
  }
`;

export const OperationManagermentQuery = gql `
query getContact {
  page: Page(where: { id: "60f0ef570682d00030558927" }) {
    name
    url
    layouts {
      name
      property {
        name
        content{
          name
          value
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
        }
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
  parentPage{
    name
    url
  }
  }
}`;