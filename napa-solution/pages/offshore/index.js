import React from "react";
import Banner from "../../components/offshore/Banner";
import Head from "next/head";
import Advantages from "../../components/offshore/Advantages";
import Method from "../../components/offshore/Method";
import Project from "../../components/homepage/Project/index.js";
import Breadcrumb from "../../components/layout/breadcrumb";
import { OffshoreQuery } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
const Offshore = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  const listBreadcrumb = [
    { url: props.data.page.url, pageName: props.data.page.name },
  ];
  return (
    <>
      <Head>
        <link key="css/common.cs" rel="stylesheet" href="css/common.cs" />
        <link
          key="css/operation-management.css"
          rel="stylesheet"
          href="css/operation-management.css"
        />
        <link
          key="css/privacy-policy.css"
          rel="stylesheet"
          href="css/privacy-policy.css"
        />
        <link
          key="css/outsourcing.module.css"
          rel="stylesheet"
          href="css/outsourcing.module.css"
        />
        <link
          key="css/home-page-slide.css"
          rel="stylesheet"
          href="css/home-page-slide.css"
        />
        <link
          key="css/slides-section.module.css"
          rel="stylesheet"
          href="css/slides-section.module.css"
        />
      </Head>
      {/* <div
        id="root"
        className="container-fluid content-wrapper no-default-spacing operation-management-wrapper privacy-policy-wrapper"
      > */}
      <Banner data={data["Outsourcing_Banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <Advantages data={data["Offshore_Advantages"]} />
      <Method data={data["Offshore_Method"]} />
      <Project data={data["Slide_Section"]} />
      {/* </div> */}
      {/* <iframe
        src="./html/slide.html"
        style={{
          border: "unset",
          marginTop: "20px",
          width: "100%",
        }}
      ></iframe> */}
      {/* <a href="#root" id="scroll" style={{ display: "none" }}>
        <img src="./img/scroll-top.png"></img>
      </a> */}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: OffshoreQuery });

  return {
    props: { data },
  };
}

export default Offshore;
