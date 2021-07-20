import { InspectMaintenanceQuery } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import Banner from "../../components/inspect-maintenance/Banner";
import MaintainAndChange from "../../components/inspect-maintenance/MaintainAndChange";
import Service from "../../components/inspect-maintenance/Service";
import Breadcrumb from "../../components/layout/breadcrumb";
import Head from "next/head";
const InspectMaintenance = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  const listBreadcrumb = [
    { url: props.data.page.url, pageName: props.data.page.name },
  ];
  // console.log("data maintain:", data);
  return (
    <>
      <Head>
        <link key="css/common.css" rel="stylesheet" href="css/common.css" />
        <link
          key="css/operation-management.css"
          rel="stylesheet"
          href="css/operation-management.css"
        />
        <link
          key="css/inspect-maintenance.css"
          rel="stylesheet"
          href="css/inspect-maintenance.css"
        />
        <link
          key="css/inspect-maintenance.module.css"
          rel="stylesheet"
          href="css/inspect-maintenance.module.css"
        />
      </Head>
      <Banner data={data["InspectMaintenance_Banner"]} />
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      <MaintainAndChange data={data["InspectMaintenance_MaintainAndChange"]} />
      <Service data={data["InspectMaintenance_Service"]} />
      <iframe
        src="./html/slide.html"
        style={{ border: "unset", marginTop: "20px", width: "100%" }}
      ></iframe>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: InspectMaintenanceQuery });

  return {
    props: { data },
  };
}

export default InspectMaintenance;
