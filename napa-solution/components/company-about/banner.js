import Head from "next/head";
import React from "react";
import { convertArrToObject, getData } from "../../util/converArrayToObject";
import { useEffect, useState } from "react";

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
        <div className="overlay-headerA"></div>
        <img
          src={data["CompanyAbout_Banner_Img"].image.original}
          className="imageA"
          alt=""
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">
            {data["CompanyAbout_Banner_Title"].value}
          </h1>
          <div style={{ marginTop: 20, fontSize: "1.2rem" }}>
            {data["CompanyAbout_Banner_SubTitle"].value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        <div className="textB">
          <div className="titleB">
            {data["CompanyAbout_Banner_Content"].value}
          </div>
          <div className="subtitleB">
            {data["CompanyAbout_Banner_SubContent"].value}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;