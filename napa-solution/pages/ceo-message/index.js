import React from "react";
import Head from "next/head";
import { contactQuery, companyAbout, PROJECTS, GET_CEOMESSAGE } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
// import ContactBanner from "../../components/company-history/Banner";
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

        <script
          key="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"
          src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"
        ></script>

        <script
          key="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"
          src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"
        ></script>
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
