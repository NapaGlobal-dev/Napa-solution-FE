import React from "react";
import AboutCompany from "../../components/company/AboutCompany";
import Banner from "../../components/company/Banner";
import Philosophy from "../../components/company/Philosophy";
import Norm from "../../components/company/Norm";
import Rules from "../../components/company/Rules";
import CompanyPages from "../../components/company/CompanyPages";

import Head from "next/head";
import { companyQuery } from "../../query/general";
import { convertArrToObject } from "../../util/converArrayToObject";
import { client } from "../../apolo-client";
import useDarkMode from "use-dark-mode";

const Company = (props) => {
  const data = convertArrToObject(props.page.layouts);
  const darkmode = useDarkMode();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/isotope.css"
          media="screen"
        />
        <link rel="stylesheet" href="/css/common.css" />
        <link rel="stylesheet" href="/css/company-03.css" />
        <link rel="stylesheet" href="/css/header.css" />
      </Head>
      <Banner data={data["Company_Banner"]} />
      <CompanyPages />
      <AboutCompany data={data["Company_AboutCompany"]} />
      <div className={darkmode?.value? "container-fluid content-wrapper-02 darkmode-content-wrapper-02":"container-fluid content-wrapper-02"}>
        <div className="container  cw2-child-01">
          <div className="row ">
            <Philosophy data={data["Company_Philosophy"]} />
            <Norm data={data["Company_Norm"]} />
            <Rules data={data["Company_Rules"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: companyQuery });

  return {
    props: { page: data.page[0] },
  };
}

export default Company;
