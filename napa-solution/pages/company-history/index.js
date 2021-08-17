import Banner from "../../components/company-history/Banner";
import Timeline from "../../components/company-history/Timeline";
import Credo from "../../components/company-history/Credo";

import { GET_COMPANYHISTORY, PROJECTS } from "../../query/general";
import Head from "next/head";
import { client } from "../../apolo-client";
import Project from "../../components/homepage/Project";

export default function CompanyHistory({ data, projects, ...props }) {
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
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Banner data={data} />
      <Timeline data={data} />
      <Credo data={data} />
      <Project data={projects} />
    </>
  );
}

export async function getStaticProps() {
  const [pageData, projectData] = await Promise.allSettled([
    client.query({ query: GET_COMPANYHISTORY }),
    client.query({ query: PROJECTS }),
  ]);

  return {
    props: {
      data: { ...pageData.value.data },
      projects: projectData.value.data.projects[0],
    },
  };
}
