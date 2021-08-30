import Head from "next/head";
import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
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
        <div className="overlay-header-banner"></div>
        <LazyLoadImage
          effect="blur"
          src={data["CompanyAbout_Banner_Img"]?.image?.original}
          placeholderSrc={data["CompanyAbout_Banner_Img"]?.image?.thumbnail}
          threshold={100}
          width="100%"
          height='100%'
          className="image-banner"
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">
            {data["CompanyAbout_Banner_Title"].value}
          </h1>
          <div className="sub-title">
            {data["CompanyAbout_Banner_SubTitle"].value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        {/* <div className="wrap-content-banner">
          <div className="content-banner">
            {data["CompanyAbout_Banner_Content"].value}
          </div>
          <div className="subcontent-banner">
            {data["CompanyAbout_Banner_SubContent"].value}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
