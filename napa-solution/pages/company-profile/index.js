import React from "react";
import Head from "next/head";
import { contactQuery, HomePage } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import ContactBanner from "../../components/contact/Banner";
import WhyNapa from "../../components/company-profile/WhyNapa";
import Message from "../../components/company-profile/Message";
const CompanyProfilePage = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  return (
    <>
      <Head>
        <link key="css/contact.css" rel="stylesheet" href="css/contact.css" />
      </Head>
      <ContactBanner data={data.ContactBanner} />
      <WhyNapa />
      <Message />
    </>
  );
};
export async function getStaticProps() {
  const { data } = await client.query({ query: contactQuery });
  const { data: dataHome } = await client.query({ query: HomePage });

  return {
    props: { data: { ...data, dataHome: dataHome.page.layouts } },
  };
}
export default CompanyProfilePage;
