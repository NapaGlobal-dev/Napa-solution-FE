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
