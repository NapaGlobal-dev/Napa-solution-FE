import React from "react";
import Banner from "../../components/outsourcing/Banner";
import Head from "next/head";
import Bill from "../../components/outsourcing/Bill";
import Download from "../../components/outsourcing/Download";
import Breadcrumb from "../../components/layout/breadcrumb";

import { OutsourcingQuery } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";

const Outsourcing = (props) => {
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
      </Head>
      {/* <div
        id="root"
        className="container-fluid content-wrapper no-default-spacing operation-management-wrapper privacy-policy-wrapper"
      > */}
      <Banner data={data["Outsourcing_Banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <Bill data={data["Outsourcing_Bill"]} />
      <Download data={data["Outsourcing_Download"]} />
      {/* </div> */}
      <iframe
        src="./html/slide.html"
        style={{ border: "unset", marginTop: "20px", width: "100%" }}
      ></iframe>
      {/* <a href="#root" id="scroll" style={{ display: "none" }}>
        <img src="./img/scroll-top.png"></img>
      </a> */}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: OutsourcingQuery });

  return {
    props: { data },
  };
}

export default Outsourcing;
