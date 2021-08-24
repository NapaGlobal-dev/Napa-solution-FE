import React from "react";
import Head from "next/head";
import { client } from "../../apolo-client";
import { GET_SERVICES_PAGE_DATA, PROJECTS } from "../../query/general";
import BlockchainBanner from "../../components/services/Blockchain/BlockchainBanner";
import Project from "../../components/homepage/Project";
import BlockChain from "../../components/services/Blockchain/blockchain";
import { convertArrToObject } from "../../util/converArrayToObject";

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
      <BlockchainBanner data={data.BlockchainServices_Banner} />
      <BlockChain data={data.BlockChain} />
      <Project data={projects} />
    </>
  );
};

export async function getStaticProps() {
  const [pageData, projectData] = await Promise.allSettled([
    client.query({
      query: GET_SERVICES_PAGE_DATA,
      variables: { name: "Blockchain" },
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
