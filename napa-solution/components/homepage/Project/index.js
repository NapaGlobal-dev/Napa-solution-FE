import SlideSection from "../SlideSection";
import React from "react";
import { convertArrToObject } from "../../../util/converArrayToObject";
const Project = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div className="sl-container">
      <div className="sl-pos-relative">
        <div className="sl-container-ratio"></div>
        <div className="sl-box-color">
          <h4 className="sl-box-title">{data["Slides_List_Title"]?.value}</h4>
          <p className="sl-box-subtitle">
            {data["Slides_List_Subtitle"]?.value}
          </p>
          <div className="sl-quarter-img">
            <img src="/img/home/box-style.svg" />
          </div>
          <div className="sl-control">
            <img
              src="/img/home/arrow-left.svg"
              id="carousel-control-prev-footer"
              href="#carousel-example"
              data-slide="prev"
            />
            <img
              src="/img/home/arrow-right.svg"
              id="carousel-control-next-footer"
              href="#carousel-example"
              data-slide="next"
            />
          </div>
        </div>

        <div className="sl-slider">
          <SlideSection data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default Project;
