import React from "react";
import Head from "next/head";
import {
  contactQuery,
  companyAbout,
  PROJECTS,
  GET_CEOMESSAGE,
} from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import Banner from "../../components/ceo-message/banner";
import Message from "../../components/ceo-message";

const CompanyAbout = ({ projects, ...props }) => {
  const data = convertArrToObject(props.data.page.layouts);
  const adata = convertArrToObject(props.data.adata.page.layouts);

  return (
    <>
      <Head>
        <link
          key="css/home-page-slide.css"
          rel="stylesheet"
          href="css/home-page-slide.css"
        />
        <link
          key="css/ceo-message.css"
          rel="stylesheet"
          href="css/ceo-message.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Banner data={adata["CEOMessage_Banner"]} />
      <Message data={adata["CEOMessage_Message"]} />
      {/* <Project data={projects} /> */}
    </>
  );
};
export async function getStaticProps() {
  // const { data } = await client.query({ query: contactQuery });
  // const { data: adata } = await client.query({ query: companyAbout });

  // const [pageData, aboutData, projectData] = await Promise.allSettled([
  //   client.query({ query: contactQuery }),
  //   client.query({ query: companyAbout }),
  //   client.query({ query: PROJECTS }),
  // ]);
  const pageData = await client.query({ query: contactQuery });
  const aboutData = await client.query({ query: GET_CEOMESSAGE });
  const projectData = await client.query({ query: PROJECTS });

  return {
    props: {
      data: { ...pageData.data, adata: aboutData.data },
      projects: projectData.data.projects[0],
    },
  };
}
export default CompanyAbout;
