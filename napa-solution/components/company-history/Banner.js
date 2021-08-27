import { getData } from "../../util/converArrayToObject";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Banner({ data }) {
  const banner = getData(data, /CompanyHistory_Banner_Img/)[0];
  const title = getData(data, /CompanyHistory_Banner_Title/)[0];
  const subtitle = getData(data, /CompanyHistory_Banner_SubTitle/)[0];
  const content = getData(data, /CompanyHistory_Banner_Content/)[0];
  const subcontent = getData(data, /CompanyHistory_Banner_SubContent/)[0];
  // useEffect(() => {
  //   window.onload = function () {
  //     document.getElementById("banner").className = "wrap-banner open";
  //   };
  // }, []);
  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>
      <div className="banner">
        <div className="overlay-header-banner"></div>
        <img src={banner?.image?.original} className="imageA" alt="" />
        {/* {/* <div className="wrap-content-banner">
          <div className="content-banner">
            {content?.key}
            {content?.value}
          </div>
          <div className="subcontent-banner">
            {subcontent?.key}
            {subcontent?.value}
          </div>
        </div> */}
      </div>
    </>
  );
}