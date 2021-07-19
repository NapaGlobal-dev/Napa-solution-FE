import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  // console.log("ss", data);
  return (
    <div className="hearder-container">
      <div className="overlay-header"></div>
      <img
        src={data["BusinessSummary_Banner_Image"].image.origin}
        className="image-header"
        alt="BusinessSummary_Banner_Image"
      />
      <div className="header-service">
        <div className="header-service-text text-center">
          {data["BusinessSummary_TitleEN"].value}
        </div>
        <div className="header-service-name text-center">
          {data["BussinessSummary_TitleJP"].value}
        </div>
      </div>
    </div>
  );
};

export default Banner;
