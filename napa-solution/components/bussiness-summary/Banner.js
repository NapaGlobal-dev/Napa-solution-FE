import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div className="hearder-container">
      <div className="overlay-header"></div>
      <img src="img/header/_DSC0088.png" className="image-header" alt="" />
      <div className="header-service">
        <div className="header-service-text text-center">
          {data["business-summary_banner_title-en"].value}
        </div>
        <div className="header-service-name text-center">
          {data["business-summary_banner_title-jp"].value}
        </div>
      </div>
    </div>
  );
};

export default Banner;
