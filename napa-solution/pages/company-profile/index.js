import React from "react";
import Head from "next/head";
import Banner from "../../components/companyProfile/banner";
import Message from "../../components/companyProfile/message";
import { client } from "../../apolo-client";
import {
  GET_COMPANYPROFILE,
  PROJECTS,
  GET_CASESTUDIES,
  GET_IMAGE_PROPERTIES,
} from "../../query/general";
import { convertArrToObject, getData } from "../../util/converArrayToObject";
import Profile from "../../components/companyProfile/profile";
// import Project from "../../components/homepage/Project";
import { OurWorksCpn } from "../../components/case-study/ourworks/index.js";

const CompanyProfilePage = ({ projects, ...props }) => {
  const data = convertArrToObject(props.data.page.layouts);
  const convertImageSeo = convertArrToObject(
    props.imagePropertions.data.allProperties
  );
  const imageSeo =
    convertImageSeo["Image_Preview_Company_Profile"]?.image?.original;
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
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <meta property="og:image" content={imageSeo}></meta>
      </Head>
      <Banner data={data.CompanyProfile_Banner} />
      <Profile data={data.CompanyProfile_Corporate} />
      <Message data={data.CompanyProfile_Message} />
      {/* <Project data={projects} /> */}
      <OurWorksCpn center isRow={true} data={props.caseStudies} />
    </>
  );
};

export async function getStaticProps() {
  // const { data } = await client.query({ query: GET_COMPANYPROFILE });
  // const projectData = await client.query({ query: PROJECTS });

  // const [pageData, projectData] = await Promise.allSettled([
  //   client.query({ query: GET_COMPANYPROFILE }),
  //   client.query({ query: PROJECTS }),
  // ]);
  const pageData = await client.query({ query: GET_COMPANYPROFILE });
  // const projectData = await client.query({ query: PROJECTS });
  const caseStudies = await client.query({
    query: GET_CASESTUDIES,
  });
  const imagePropertions = await client.query({
    query: GET_IMAGE_PROPERTIES,
    variables: { name: "Image_Preview_Company_Profile" },
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

export default CompanyProfilePage;
