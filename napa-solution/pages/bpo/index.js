import React from "react";
import Head from "next/head";
import BPOBanner from "../../components/services/BPO/BPOBanner";
import Project from "../../components/homepage/Project";
import BPO from "../../components/services/BPO/bpo";
import { convertArrToObject } from "../../util/converArrayToObject";
import { client } from "../../apolo-client";
import { GET_SERVICES_PAGE_DATA, PROJECTS } from "../../query/general";

const Services = ({ projects, ...props }) => {
  const data = convertArrToObject(props.data.page[0].layouts);
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
          key="css/home-page-slide.css"
          rel="stylesheet"
          href="css/home-page-slide.css"
        />
        <link
          key="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <BPOBanner data={data.ServicesBPO_Banner} />
      <BPO data={data.BPO} />
      <Project data={projects} />
    </>
  );
};

export async function getStaticProps() {
  const [pageData, projectData] = await Promise.allSettled([
    client.query({
      query: GET_SERVICES_PAGE_DATA,
      variables: { id: "611d02a01a5f420538983592" },
    }),
    client.query({ query: PROJECTS }),
  ]);

  return {
    props: {
      data: pageData.value.data,
      projects: projectData.value.data.projects[0],
    },
  };
}

export default Services;