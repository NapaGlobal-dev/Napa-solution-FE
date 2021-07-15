import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const BusinessModel = (props) => {
  const data = convertArrToObject(props.data.property);

  const list =
    data["business-summary_business-model_content"].value.split("\\n");

  return (
    <div className="container-fluid container-top">
      <div className="container">
        <div className="row business-content-ori">
          <div className="col-sm-12">
            <div className="font_1 padding_1">
              <h2 className="operation-management-wrap operation-management-flow-title first-leter-upper-case">
                {/* <span className="operation-management-flow-spec">快</span> */}
                {data["business-summary_business-model_title"].value}
                {/* <span className="operation-management-break">るために。</span> */}
              </h2>
            </div>
          </div>
        </div>
        <div className="row business-model-block no-default-margin">
          <div className="col-sm-12">
            <img
              src={data["business-summary_business-model_image"].image.original}
              className="business-model"
            />
          </div>
        </div>
        <div className="row business-content-ori">
          <div className="col-sm-12">
            <div className="font_2 margin_1 width-haft">
              {data["business-summary_business-model_content"].value
                .split("\\n")
                .map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
