import Banner from "../../components/privacyPolicy/Banner";
import PrivacyPolicy from "../../components/privacyPolicy/PrivacyPolicy";

import { GET_PRIVACYPOLICY } from "../../query/general";

import Head from "next/head";
import { client } from "../../apolo-client";
function Index(data) {
  const listBreadcrumb = [];
  if (data?.privacyPolicy?.length) {
    listBreadcrumb.push({
      url: data.privacyPolicy[0].url,
      pageName: data.privacyPolicy[0].name,
    });
  }
  console.log(data);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="./css/privacy-policy.css" />
      </Head>
      <Banner data={data} />
      <PrivacyPolicy data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({ query: GET_PRIVACYPOLICY });

  return {
    props: { data },
  };
}

export default Index;
