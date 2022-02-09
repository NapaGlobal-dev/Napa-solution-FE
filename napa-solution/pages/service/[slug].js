import React, { useState, useEffect } from "react";

import ServiceBanner from "../../components/services/serviceBanner";
// import Project from "../../components/homepage/Project";
import Service from "../../components/services/service";
import { OurWorksCpn } from "../../components/case-study/ourworks/index.js";
import { convertArrToObjectBySpecialName } from "../../util/converArrayToObject";
import { convertArrToObject } from "../../util/converArrayToObject";
import { client } from "../../apolo-client";
import {
  GET_SERVICES_PAGE_DATA,
  GET_SERVICE_URL,
  // PROJECTS,
  GET_CASESTUDIES,
  GET_IMAGE_PROPERTIES,
} from "../../query/general";
import Head from "next/head";
const Services = ({ projects, ...props }) => {
  let banner = convertArrToObjectBySpecialName(
    props.data?.page[0].layouts[2].property
  );
  let service = convertArrToObjectBySpecialName(
    props.data?.page[0].layouts[1].property
  );
  const convertImageSeo = convertArrToObject(
    props.imagePropertions?.data.allProperties
  );
  const imageSeo =
    convertImageSeo["Image_Preview_" + props.data?.page[0]?.slug]?.image
      ?.original;
  console.log(imageSeo,props.data?.page[0]?.slug); 
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
        <meta property="og:image" content={imageSeo} key="ogimage"></meta>
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

  const imagePropertions = await client.query({
    query: GET_IMAGE_PROPERTIES,
    variables: { name: "Image_Preview_" + slug },
  }); 

  return {
    props: {
      data: pageData.data,
      // projects: projectData.data.projects[0],
      caseStudies: caseStudies.data,
      imagePropertions: imagePropertions,
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
