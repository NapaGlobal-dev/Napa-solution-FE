import React from "react";
import Head from "next/head";
import Banner from "../../../components/case-study/banner";
import Project from "../../../components/homepage/Project";
import Service from "../../../components/case-study/service";
import { convertArrToObjectBySpecialName } from "../../../util/converArrayToObject";
import { client } from "../../../apolo-client";
import {
  GET_CASESTUDY_PAGE,
  GET_SERVICES_PAGE_DATA,
  GET_SERVICE_URL,
  PROJECTS,
} from "../../../query/general";

const Services = ({ projects, ...props }) => {
  const banner = convertArrToObjectBySpecialName(
    props.data?.page[0].childrenPage[0].layouts[0].property
  );

  // let service = convertArrToObjectBySpecialName(props.data.page[0].layouts[1].property);
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
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Head>
      <Banner banner={banner} />
      <Service data={props.data?.page[0].childrenPage[0].layouts[1].property} />
      <Project data={projects} />
    </>
  );
};

export async function getStaticProps({ params }) {
  const { slug, pid } = params;
  // const [pageData, projectData] = await Promise.allSettled([
  //   client.query({
  //     query: GET_CASESTUDY_PAGE,
  //     variables: { slug: slug, pid: pid },
  //   }),
  //   client.query({ query: PROJECTS }),
  // ]);

  const pageData = await client.query({
    query: GET_CASESTUDY_PAGE,
    variables: { slug: slug, pid: pid },
  });
  const projectData = await client.query({ query: PROJECTS });
  return {
    props: {
      data: pageData.data,
      projects: projectData.data.projects[0],
    },
  };
}

export async function getStaticPaths() {
  // const data = await Promise.allSettled([
  //   client.query({ query: GET_SERVICE_URL }),
  // ]);
  const data = await client.query({ query: GET_SERVICE_URL });
  let paths = [];
  for (let i = 0; i < data?.data?.page[0].childrenPage.length; i++) {
    if (data.data?.page[0].childrenPage[i].length === 0) {
      paths.push({
        params: {
          slug: data.data?.page[0].childrenPage[i].slug,
          pid: "",
        },
      });
    } else {
      for (
        let k = 0;
        k < data?.data?.page[0].childrenPage[i].childrenPage.length;
        k++
      ) {
        paths.push({
          params: {
            slug: data.data?.page[0].childrenPage[i].slug,
            pid: data.data?.page[0].childrenPage[i].childrenPage[k].slug,
          },
        });
      }
    }
  }
  return {
    paths,
    fallback: true,
  };
}

export default Services;
