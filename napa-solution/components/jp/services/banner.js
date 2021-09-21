import React from "react";
import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import { useEffect, useState } from "react";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  useEffect(() => {
    document.getElementById("banner").className = "wrap-banner open";
  }, []);
  return (
    <>
      <div className="banner">
        <div className="overlay-header-banner"></div>
        <img
          src={data["Services_Banner_Image"].image.original}
          className="image-banner"
          alt=""
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">{data["Services_Banner_NameEN"].value}</h1>
          <div className="sub-title">
            {data["Services_Banner_NameJP"].value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        <div className="wrap-content-banner">
          <div className="content-banner">{data["Services_Banner_Title"].value}</div>
          <div className="subcontent-banner">
            {data["Services_Banner_Subtitle"].value}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
