import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  // console.log("data banner", data);
  return (
    <div className="hearder-container">
      <div className="overlay-header"></div>
      <img
        src="./img/untitled-img/_DSC0074.png"
        className="image-header"
        alt=""
      />
      <div className="header-service">
        <div className="header-service-text text-center">
          {data["InspectMaintenance_Banner_Title"]?.value}
        </div>
        <div className="header-service-name text-center">
          {data["InspectMaintenance_Banner_Subtitle"]?.value}
        </div>
      </div>
      <div className="header-title-page">
        {data["InspectMaintenance_Banner_Content"]?.value}
      </div>
    </div>
  );
};

export default Banner;
