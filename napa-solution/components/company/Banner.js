import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import { useEffect, useState } from "react";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  useEffect(() => {
    window.onload = function () {
      document.getElementById('banner').className = 'wrap-banner open';
    };
  }, []);
  return (
    <>
      <div id="root" className="hearder-container">
        <div className="overlay-header"></div>
        <img
          src={data["Company_Banner_Image"]?.image?.original}
          className="image-header"
          alt="Company_Banner_Image"
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">{data["CompanyProfile_Banner_Title"].value}</h1>
          <div style={{ marginTop: 20, fontSize: "1.2rem" }}>
            {data["CompanyProfile_Banner_SubTitle"].value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
