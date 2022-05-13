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
// export const PAGE_GROUPS = gql`
//   query PageGroups {
//     groups: allPages(
//       where: {
//         OR: [
//           { nameEN_contains: "Infomation" }
//           { nameEN_contains: "Services" }
//           { nameEN_contains: "Company" }
//         ]
//       }
//     ) {
//       name
//       nameEN
//       url
//       childrenPage {
//         name
//         nameEN
//         url
//       }
//     }
//   }
// `;

export const BUSINGESS_SUMMARY_QUERY = gql`
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

export const COMPANY_QUERY = gql`
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

export const HOME_PAGE = gql`
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
    banner: allBanners {
      name
      property {
        name
        value
      }
    }
    clientSay: ClientSayVideo(where: { id: "610c7b46f17d152a94a2c535" }) {
      name
      title
      subTitle
      video
      poster {
        original: publicUrl
        thumbnail: publicUrlTransformed(transformation: { width: "64" })
      }
    }
  }
`;

export const CONTACT_QUERY = gql`
  query getContact {
    page: Page(where: { id: "60f10dca64a49c3384b60661" }) {
      name
      url
      layouts {
        name
        property {
          name
          key
          value
          url
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
        }
      }
    }
  }
`;

export const FOOTER_DATA_QUERY = gql`
  query FooterData {
    layout: allLayouts(where: { name: "Footer" }, first: 1) {
      name
      property {
        name
        content {
          name
          value
        }
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

    groups: allPages(
      where: {
        OR: [
          { name: "情報" }
          { name: "サービス" }
          { name: "企業情報" }
        ]
      }
      sortBy: footerOrder_ASC
    ) {
      name
      nameEN
      url
      footerOrder
      childrenPage(sortBy: footerOrder_ASC) {
        name
        nameEN
        url
      }
    }
  }
`;

export const GET_HEADER = gql`
  query getHeader {
    navbar: allPages(
      where: {
        OR: [
          { nameEN: "Home" }
          { name: "サービス" }
          { nameEN: "Contact" }
          { name: "企業情報" }
          { nameEN: "Offshore Development" }
        ]
      }
      sortBy: headerOrder_ASC
    ) {
      id
      name
      nameEN
      url
      childrenPage(sortBy: footerOrder_ASC) {
        name
        nameEN
        url
      }
      image {
        original: publicUrl
        thumbnail: publicUrlTransformed(transformation: { width: "64" })
      }
    }
  }
`;

// export const InspectMaintenanceQuery = gql`
//   query InspectMaintenanceQuery {
//     page: Page(where: { id: "60f0ef840682d00030558973" }) {
//       name
//       url
//       layouts {
//         name
//         property {
//           name
//           key
//           value
//           content {
//             name
//             key
//             value
//             content {
//               name
//               value
//             }
//           }
//           flag
//           url
//           content {
//             name
//             value
//             url
//           }
//           image {
//             original: publicUrl
//             thumbnail: publicUrlTransformed(transformation: { width: "64" })
//           }
//         }
//       }
//       subpages: childrenPage {
//         name
//         url
//         image {
//           original: publicUrl
//           thumbnail: publicUrlTransformed(transformation: { width: "64" })
//         }
//       }
//       parentPage {
//         name
//       }
//       image {
//         path
//       }
//     }
//   }
// `;
export const OFFSHORE_QUERY = gql`
  query getContact {
    page: Page(where: { id: "60f67674b9a5b934e0c79908" }) {
      name
      url
      layouts {
        name
        property {
          name
          content {
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
    }
  }
`;
export const GET_COMPANYHISTORY = gql`
  query getCompanyHistory {
    banner: allLayouts(where: { name: "CompanyHistory_Banner" }) {
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
    timeline: allLayouts(where: { name: "CompanyHistory_Timeline" }) {
      name
      property {
        name
        key
        value
        url
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
        content {
          name
          key
          value
        }
      }
    }
    credo: allLayouts(where: { name: "CompanyHistory_Credo" }) {
      name
      property {
        name
        key
        value
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
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "32" })
        }
      }
    }
  }
`;

// export const OperationManagermentQuery = gql`
//   query getContact {
//     page: Page(where: { id: "60f0ef570682d00030558927" }) {
//       name
//       url
//       layouts {
//         name
//         property {
//           name
//           content {
//             name
//             value
//             image {
//               original: publicUrl
//               thumbnail: publicUrlTransformed(transformation: { width: "64" })
//             }
//           }
//           value
//           image {
//             original: publicUrl
//             thumbnail: publicUrlTransformed(transformation: { width: "64" })
//           }
//         }
//       }
//       subpages: childrenPage {
//         name
//         url
//         image {
//           original: publicUrl
//           thumbnail: publicUrlTransformed(transformation: { width: "64" })
//         }
//       }
//       parentPage {
//         name
//         url
//       }
//     }
//   }
// `;
// export const RemoteManage = gql`
//   query RemoteManage {
//     page: Page(where: { id: "60f54fd02022ea2760b0ad98" }) {
//       name
//       url
//       layouts {
//         name
//         property {
//           name
//           key
//           value
//           image {
//             original: publicUrl
//             thumbnail: publicUrlTransformed(transformation: { width: "64" })
//           }
//         }
//       }
//       subpages: childrenPage {
//         name
//         url
//         image {
//           original: publicUrl
//           thumbnail: publicUrlTransformed(transformation: { width: "64" })
//         }
//       }
//       parentPage {
//         name
//         url
//       }
//       image {
//         path
//       }
//     }
//   }
// `;

export const GET_PRIVACYPOLICY = gql`
  query getPrivacyPolicy {
    privacyPolicy: allPages(where: { url: "/privacy-policy" }) {
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
            value
          }
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
        }
      }
    }
  }
`;

export const GET_COMPANYPROFILE = gql`
  query getCompanyProfile {
    page: Page(where: { id: "60f0f35c0682d00030558c54" }) {
      name
      url
      layouts {
        name
        property {
          name
          value
          url
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
          content {
            name
            value
          }
        }
      }
    }
  }
`;

export const COMPANY_ABOUT = gql`
  query getCompanyAbout {
    page: Page(where: { id: "6112210aa5cb562704f92ecc" }) {
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
          content {
            name
            key
            value
            image {
              original: publicUrl
              thumbnail: publicUrlTransformed(transformation: { width: "64" })
            }
            content {
              name
              key
              value
            }
          }
        }
      }
    }
  }
`;

export const PROJECTS = gql`
  query Projects {
    projects: allLayouts(search: "Slides_Section", first: 1) {
      name
      property {
        name
        key
        value
        url
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }
  }
`;

export const GET_SERVICES_PAGE_DATA = gql`
  query getServicesPageData($name: String!) {
    page: allPages(where: { slug_contains: $name }) {
      name
      nameEN
      url
      slug
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

export const GET_SERVICE_URL = gql`
  query getServicesPageData {
    page: allPages(where: { nameEN_contains: "Services" }) {
      name
      nameEN
      url
      childrenPage {
        url
        slug
        childrenPage {
          slug
        }
      }
    }
  }
`;

export const GET_CASESTUDY_PAGE = gql`
  query getCaseStudyPageData($slug: String!, $pid: String!) {
    page: allPages(where: { slug_contains: $slug }) {
      url
      slug
      childrenPage(where: { slug_contains: $pid }) {
        slug
        layouts {
          name
          property {
            name
            value: valueEN
            content {
              name
              value: valueEN
              url
              image {
                original: publicUrl
                thumbnail: publicUrlTransformed(transformation: { width: "64" })
              }
            }
            image {
              original: publicUrl
              thumbnail: publicUrlTransformed(transformation: { width: "64" })
            }
          }
        }
      }
    }
  }
`;

export const GET_OURWORKS_DATA = gql`
  query getCaseStudy {
    layout: allLayouts(where: { name: "OurWorks" }) {
      name
      property {
        name
        value
        content {
          name
          key
          value
          content {
            name
            value
            content {
              value
            }
          }
          url
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
        }
      }
    }
  }
`;

export const GET_CEOMESSAGE = gql`
  query getCompanyProfile {
    page: Page(where: { id: "612f339e8268913928f70259" }) {
      name
      url
      layouts {
        name
        property {
          name
          key
          value
          url
          image {
            original: publicUrl
            thumbnail: publicUrlTransformed(transformation: { width: "64" })
          }
        }
      }
    }
  }
`;

export const GET_CASESTUDIES = gql`
  query getCaseStudies {
    caseStudies: allProperties(where: { name: "CaseStudies" }) {
      name
      key
      value: valueEN
      content {
        name
        key
        value: valueEN
        url
        image {
          original: publicUrl
          thumbnail: publicUrlTransformed(transformation: { width: "64" })
        }
      }
    }
    keys: allProperties(where: { name: "CaseStudy_Keys" }) {
      name
      content {
        name
        key
        value: valueEN
      }
    }
  }
`;

export const GET_IMAGE_PROPERTIES = gql`
  query getCaseStudies($name: String!) {
    allProperties(where: { name: $name }) {
      name
      key
      image {
        original: publicUrl
        thumbnail: publicUrlTransformed(transformation: { width: "64" })
      }
      value: valueEN
    }
  }
`;
