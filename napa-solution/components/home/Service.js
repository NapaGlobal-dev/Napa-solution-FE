import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Service = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div class="service row no-default-spacing">
      <div class="col-12 no-default-spacing service-section">
        <span class="section-title section-title-service">
          {data["Home_Service_Title"].value}
        </span>
      </div>
      <div class="col-12 no-default-spacing service-section">
        <span class="section-title-cn section-title-cn-service">
          {data["Home_Service_Subtitle"].value}
        </span>
      </div>
      <div class="col-12 no-default-spacing service-section">
        <span class="section-content section-content-service">
          {data["Home_Service_Content"].value}
        </span>
      </div>
      <div class="col-md-4 col-xs-12 no-default-spacing position-relative">
        <a href="operation-management.html">
          <img class="service-image" src="./img/service/service-1.png" />
          <span class="image-content">{data["Home_Service_Item1"].value}</span>
          <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
        </a>
      </div>
      <div class="col-md-4 col-xs-12 no-default-spacing">
        <a href="inspect-maintenance.html">
          <img class="service-image" src="./img/service/service-2.png" />
          <span class="image-content">{data["Home_Service_Item2"].value}</span>
          <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
        </a>
      </div>
      <div class="col-md-4 col-xs-12 no-default-spacing">
        <a href="remote-manage.html">
          <img class="service-image" src="./img/service/service-3.png" />
          <span class="image-content">{data["Home_Service_Item3"].value}</span>
          <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
        </a>
      </div>
    </div>
  );
};

export default Service;
