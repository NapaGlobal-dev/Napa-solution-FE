import React from "react";
import Head from "next/head";
import ServiceBanner from "../../components/services/serviceBanner";
// import Project from "../../components/homepage/Project";
import Service from "../../components/services/service";
import { OurWorksCpn } from "../../components/case-study/ourworks/index.js";
import { convertArrToObjectBySpecialName } from "../../util/converArrayToObject";
import { client } from "../../apolo-client";
import {
  GET_SERVICES_PAGE_DATA,
  GET_SERVICE_URL,
  // PROJECTS,
  GET_CASESTUDIES,
} from "../../query/general";

const Services = ({ projects, ...props }) => {
  let banner = convertArrToObjectBySpecialName(
    props.data?.page[0].layouts[2].property
  );
  let service = convertArrToObjectBySpecialName(
    props.data?.page[0].layouts[1].property
  );
  // console.log("props.ourworks", props);
  return (
    <>
      <Head>
        <link key="/css/banner.css" rel="stylesheet" href="/css/banner.css" />
        <link
          key="/css/services.css"
          rel="stylesheet"
          href="/css/services.css"
        />

        <link
          key="/css/home-page-slide.css"
          rel="stylesheet"
          href="/css/home-page-slide.css"
        />
        <link
          key="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <ServiceBanner banner={banner} />
      <Service service={service} />
      {/* <Project data={projects} /> */}
      <OurWorksCpn
        center
        isRow={true}
        data={props.caseStudies}
        service={props.data?.page[0]?.slug}
      />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  // const [pageData, projectData] = await Promise.allSettled([
  //   client.query({
  //     query: GET_SERVICES_PAGE_DATA,
  //     variables: { name: slug },
  //   }),
  //   client.query({ query: PROJECTS }),
  // ]);
  const caseStudies = await client.query({
    query: GET_CASESTUDIES,
  });
  const pageData = await client.query({
    query: GET_SERVICES_PAGE_DATA,
    variables: { name: slug },
  });

  // const projectData = await client.query({ query: PROJECTS });
  return {
    props: {
      data: pageData.data,
      // projects: projectData.data.projects[0],
      caseStudies: caseStudies.data,
    },
  };
}

export async function getStaticPaths() {
  // const data = await Promise.allSettled([
  //   client.query({ query: GET_SERVICE_URL }),
  // ]);
  const data = await client.query({ query: GET_SERVICE_URL });
  const paths =
    !data.loading &&
    data?.data?.page[0]?.childrenPage
      .map((page) => ({
        params: { slug: page.slug },
      }))
      .filter((prs) => prs.slug != null);
  // const paths = [{ params: { slug: "ai-solutions" } }];
  return {
    paths,
    fallback: true,
  };
}

export default Services;
