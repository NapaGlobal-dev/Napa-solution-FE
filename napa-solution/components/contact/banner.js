import { getData } from "../../util/converArrayToObject";
import Head from "next/head";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Banner({ data }) {
  const banner = getData(data, /ContactBanner_bannerImg/)[0];
  const title = getData(data, /ContactBanner_bannerTitle/)[0];
  const subtitle = getData(data, /ContactBanner_bannerSubTitle/)[0];
  const content = getData(data, /ContactBanner_bannerContent/)[0];
  const subcontent = getData(data, /ContactBanner_bannerSubContent/)[0];
  
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
      
      <div className="banner-page banner">
        <div className="title">
          <h1 className="main-title">
            {title?.key}
            {title?.value}
          </h1>
          <div className="sub-menu">
            {subtitle?.key}
            {subtitle?.value}
          </div>
        </div>
        <div className="img-banner">
          <img src="/img/img-map.svg" />
        </div>
      </div>
    </>
  );
}
