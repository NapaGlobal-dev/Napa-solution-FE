import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/layout/breadcrumb";
import RemoteBanner from "../../components/remote-manage/RemoteBanner";
import OperationFlow from "../../components/remote-manage/OperationFlow";
import PointGroup from "../../components/remote-manage/PointGroup";
import Services from "../../components/remote-manage/Services";

import { RemoteManage } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
const index = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  const { parentPage, layouts } = props.data.page;
  const listBreadcrumb = [
    { url: parentPage.url, pageName: parentPage.name },
    { url: props.data.page.url, pageName: props.data.page.name },
  ];

  return (
    <>
      <Head>
        <link key="/css/header.css" rel="stylesheet" href="/css/header.css" />
        <link key="/css/common.css" rel="stylesheet" href="/css/common.css" />
        <link
          key="/css/operation-management.css"
          rel="stylesheet"
          href="/css/operation-management.css"
        />
        <link
          key="/css/recruit/page02.css"
          rel="stylesheet"
          href="/css/recruit/page02.css"
        />
        <link
          key="/css/remote-manage.css"
          rel="stylesheet"
          href="/css/remote-manage.css"
        />
      </Head>
      <RemoteBanner data={data["RemoteManage_Banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <OperationFlow data={data["RemoteManage_OperationFlow"]} />
      <PointGroup data={data["RemoteManage_PointWrapper"]} />
      <Services data={props.data.page.subpages} />
      <iframe
        src="./html/slide.html"
        style={{ border: "unset", marginTop: "20px", width: "100%" }}
      ></iframe>
    </>
  );
};
export async function getStaticProps() {
  const { data } = await client.query({ query: RemoteManage });

  return {
    props: { data },
  };
}

export default index;
