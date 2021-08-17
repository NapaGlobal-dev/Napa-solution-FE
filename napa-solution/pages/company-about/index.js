import React from "react";
import Head from "next/head";
import { contactQuery, companyAbout, PROJECTS } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import ContactBanner from "../../components/company-history/Banner";
import WhyNapa from "../../components/company-about/WhyNapa";
import Message from "../../components/company-about/Message";
import Project from "../../components/homepage/Project";
const CompanyProfilePage = ({ projects, ...props }) => {
  const data = convertArrToObject(props.data.page.layouts);
  const adata = convertArrToObject(props.data.adata.page.layouts);

  return (
    <>
      <Head>
        <link key="css/contact.css" rel="stylesheet" href="css/contact.css" />{" "}
        <link
          key="css/home-page-slide.css"
          rel="stylesheet"
          href="css/home-page-slide.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <ContactBanner data={data.ContactBanner} />
      <WhyNapa data={adata["WhyNapa"]} />
      <Message data={adata["Message"]} />
      <Project data={projects} />
    </>
  );
};
export async function getStaticProps() {
  // const { data } = await client.query({ query: contactQuery });
  // const { data: adata } = await client.query({ query: companyAbout });

  const [pageData, aboutData, projectData] = await Promise.allSettled([
    client.query({ query: contactQuery }),
    client.query({ query: companyAbout }),
    client.query({ query: PROJECTS }),
  ]);

  return {
    props: {
      data: { ...pageData.value.data, adata: aboutData.value.data },
      projects: projectData.value.data.projects[0],
    },
  };
}
export default CompanyProfilePage;
