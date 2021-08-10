import React from "react";
import Head from "next/head";
import { contactQuery, companyAbout } from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import ContactBanner from "../../components/company-history/Banner";
import WhyNapa from "../../components/company-about/WhyNapa";
import Message from "../../components/company-about/Message";
const CompanyProfilePage = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  const adata = convertArrToObject(props.data.adata.page.layouts);

  return (
    <>
      <Head>
        <link key="css/contact.css" rel="stylesheet" href="css/contact.css" />
      </Head>
      <ContactBanner data={data.ContactBanner} />
      <WhyNapa data={adata["WhyNapa"]} />
      <Message data={adata["Message"]} />
    </>
  );
};
export async function getStaticProps() {
  const { data } = await client.query({ query: contactQuery });
  const { data: adata } = await client.query({ query: companyAbout });
  return {
    props: { data: { ...data, adata } },
  };
}
export default CompanyProfilePage;
