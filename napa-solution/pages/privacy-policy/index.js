import Banner from "../../components/privacyPolicy/Banner";
import PrivacyPolicy from "../../components/privacyPolicy/PrivacyPolicy";

import { GET_PRIVACYPOLICY } from "../../query/general";
import { useQuery } from "@apollo/client";

import Head from "next/head";

export default function Index() {
  const { data, loading, error } = useQuery(GET_PRIVACYPOLICY);
  const listBreadcrumb = [];
  if (data?.privacyPolicy?.length) {
    listBreadcrumb.push({
      url: data.privacyPolicy[0].url,
      pageName: data.privacyPolicy[0].name,
    });
  }
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
