import { getData } from "../../../util/converArrayToObject";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Banner({ data }) {
  const banner = getData(data, /ServicesWeb_Banner_Img/)[0];
  const title = getData(data, /ServicesWeb_Banner_Title/)[0];
  const subtitle = getData(data, /ServicesWeb_Banner_SubTitle/)[0];
  const content = getData(data, /ServicesWeb_Banner_Content/)[0];
  const subcontent = getData(data, /ServicesWeb_Banner_SubContent/)[0];
  useEffect(() => {
    window.onload = function () {
      document.getElementById("banner").className = "wrap-banner open";
    };
  }, []);
  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>
      <div className="banner">
        {/* <LazyLoadImage
                    effect='blur'
                    src={banner?.image?.original}
                    placeholderSrc={banner?.image?.thumbnail}
                    threshold={100}
                    height='100%'
                    width='100%'
                    className="image-header"
                /> */}
        <div className="overlay-header-banner"></div>
        <img src={banner?.image?.original} className="imageA" alt="" />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">
            {title?.key}
            {title?.value}
          </h1>
          <div className="sub-menu">
            {subtitle?.key}
            {subtitle?.value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        {/* <div className="wrap-content-banner">
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
