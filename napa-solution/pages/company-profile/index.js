import React from "react";
import Head from "next/head";
import Banner from "../../components/companyProfile/banner";
import Message from "../../components/companyProfile/message";
import { client } from "../../apolo-client";
import {
  contactQuery,
  GET_COMPANYPROFILE,
  PROJECTS,
} from "../../query/general";
import { convertArrToObject, getData } from "../../util/converArrayToObject";
import Profile from "../../components/companyProfile/profile";
import Project from "../../components/homepage/Project";

const CompanyProfilePage = ({ projects, ...props }) => {
  const data = convertArrToObject(props.data.page.layouts);

  return (
    <>
      <Head>
        <link
          key="css/company-profile.css"
          rel="stylesheet"
          href="css/company-profile.css"
        />
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
      <Banner data={data.CompanyProfile_Banner} />
      <Profile data={data.CompanyProfile_Corporate} />
      <Message data={data.CompanyProfile_Message} />
      <Project data={projects} />
    </>
  );
};

export async function getStaticProps() {
  // const { data } = await client.query({ query: GET_COMPANYPROFILE });
  // const projectData = await client.query({ query: PROJECTS });

  const [pageData, projectData] = await Promise.allSettled([
    client.query({ query: GET_COMPANYPROFILE }),
    client.query({ query: PROJECTS }),
  ]);

  return {
    props: {
      data: pageData.value.data,
      projects: projectData.value.data.projects[0],
    },
  };
}

export default CompanyProfilePage;
