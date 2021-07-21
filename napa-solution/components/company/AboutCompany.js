import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const AboutCompany = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <>
      <div className="container-fluid content-wrapper-01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="font-special">き</span>
              <span className="font-01">
                {data["Company_AboutCompany_Title"].value}
              </span>
            </div>
          </div>
          <div className="row cw1-child-01">
            <div className="col-xl-4 order-1 order-xl-2 image-wrapper-02">
              <img
                className="image-06"
                src={data["Company_AboutCompany_Image"]?.image?.original}
                alt="Company_AboutCompany_Image"
              />
            </div>
            <div className="col-xl-8 order-2 order-xl-1 font-02-wrapper">
              <span className="font-02">
                {data["Company_AboutCompany_Content"].value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
