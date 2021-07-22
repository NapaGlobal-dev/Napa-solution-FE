import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <>
      <div id="root" className="hearder-container">
        <div className="overlay-header"></div>
        <img
          src={data["Company_Banner_Image"]?.image?.original}
          className="image-header"
          alt="Company_Banner_Image"
        />
        <div className="header-service">
          <div className="header-service-text text-center">
            {data["Company_Banner_TitleEN"].value}
          </div>
          <div className="header-service-name text-center">
            {data["Company_Banner_TitleJP"].value}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
