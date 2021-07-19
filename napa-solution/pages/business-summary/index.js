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
  const pagedata = convertArrToObject(props.page.layouts);
  const listBreadcrumb = [{ url: props.page.url, pageName: props.page.name }];

  // console.log(data);

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
      <Banner data={pagedata["BusinessSummary_Banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <BusimessModel data={pagedata["BusinessSummary_BusinessModel"]} />
      <Mission data={pagedata["BusinessSummary_Mission"]} />
      <BusinessServices data={props.page.subpages} />
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: businessSumaryQuery });

  return {
    props: { page: data.page[0] },
  };
}

export default BusinessSumary;
