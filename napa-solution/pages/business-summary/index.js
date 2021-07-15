// import "../../styles/Business.module.css";
// import "../../styles/operation-management.module.css";

import React from "react";
import Banner from "../../components/bussiness-summary/Banner";
import BusimessModel from "../../components/bussiness-summary/BusinessModel";
import Mission from "../../components/bussiness-summary/Mission";
import BusinessServices from "../../components/bussiness-summary/BusinessServices";
import Breadcrumb from "../../components/layout/breadcrumb";

import { businessSumaryQuery } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";

import Head from "next/head";

const BusinessSumary = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  const listBreadcrumb = [
    { url: props.data.page.url, pageName: props.data.page.name },
  ];

  return (
    <>
      <Head>
        <link key="css/header.css" rel="stylesheet" href="css/header.css" />
        <link
          key="css/operation-management.css"
          rel="stylesheet"
          href="css/operation-management.css"
        />
        <link
          key="css/business-summary.css"
          rel="stylesheet"
          href="css/business-summary.css"
        />
      </Head>
      <Banner data={data["business-summary_banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <BusimessModel data={data["business-summary_business-model"]} />
      <Mission data={data["business-summary_mission"]} />
      <BusinessServices data={props.data.page.subpages} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: businessSumaryQuery });

  return {
    props: { data },
  };
}

export default BusinessSumary;
