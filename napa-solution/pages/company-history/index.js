import Banner from "../../components/company-history/Banner";
import Timeline from "../../components/company-history/Timeline";
import Credo from "../../components/company-history/Credo";
import { convertArrToObject } from "../../util/converArrayToObject";
import {
  GET_COMPANYHISTORY,
  PROJECTS,
  GET_CASESTUDIES,
  GET_IMAGE_PROPERTIES,
} from "../../query/general";
import Head from "next/head";
import { client } from "../../apolo-client";
// import Project from "../../components/homepage/Project";
import { OurWorksCpn } from "../../components/case-study/ourworks/index.js";

export default function CompanyHistory({ data, projects, ...props }) {
  const convertImageSeo = convertArrToObject(
    props.imagePropertions.data.allProperties
  );
  const imageSeo =
    convertImageSeo["Image_Preview_Company_History"]?.image?.original;
  return (
    <>
      <Head>
        <link
          key="css/company-history.css"
          rel="stylesheet"
          href="css/company-history.css"
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
      <Banner data={data} />
      <Timeline data={data} />
      <Credo data={data} />
      {/* <Project data={projects} /> */}
      <OurWorksCpn center isRow={true} data={props.caseStudies} />
    </>
  );
}

export async function getStaticProps() {
  const [pageData, projectData] = await Promise.allSettled([
    client.query({ query: GET_COMPANYHISTORY }),
    // client.query({ query: PROJECTS }),
  ]);
  const caseStudies = await client.query({
    query: GET_CASESTUDIES,
  });
  const imagePropertions = await client.query({
    query: GET_IMAGE_PROPERTIES,
    variables: { name: "Image_Preview_Company_History" },
  });

  return {
    props: {
      data: { ...pageData.value.data },
      // projects: projectData.value.data.projects[0],
      caseStudies: caseStudies.data,
      imagePropertions: imagePropertions,
    },
  };
}
