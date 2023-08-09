import Banner from "../../components/protectingPersonalInformation/Banner";

import { GET_PROTECTINGPERSONAL } from "../../query/general";

import Head from "next/head";
import { client } from "../../apolo-client";
import ProtectingPersonalInformation from "../../components/protectingPersonalInformation/ProtectingPersonalInformation";
function Index(data) {
  const listBreadcrumb = [];
  if (data?.protectingPersonal?.length) {
    listBreadcrumb.push({
      url: data.protectingPersonal[0].url,
      pageName: data.protectingPersonal[0].name,
    });
  }
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="./css/protecting-personal-information.css"
        />
      </Head>
      <Banner data={data} />
      <ProtectingPersonalInformation data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PROTECTINGPERSONAL });

  return {
    props: { data },
  };
}

export default Index;
