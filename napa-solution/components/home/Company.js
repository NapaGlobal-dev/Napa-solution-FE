import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Company = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div class="company row no-default-spacing">
      <div class="col-xl-6 col-xs-12 no-default-spacing">
        <img
          class="company-image"
          src={data["Home_Company_Img"].image.original}
        />
      </div>
      <div class="col-xl-6 col-xs-12 no-default-spacing company-content-wrapper">
        <div class="col-xs-12 order-1 order-xl-1 no-default-spacing padding-title">
          <span class="section-title section-title-company">
            {data["Home_Company_Title"].value}
          </span>
        </div>
        <div class="col-xs-12 order-2 order-xl-2 no-default-spacing padding-title-cn">
          <span class="section-title-cn section-title-cn-company">
            {data["Home_Company_Subtitle"].value}
          </span>
        </div>
        <div class="col-xs-12 order-4 order-xl-3 no-default-spacing section-content-company">
          <span class="section-content content-company">
            {data["Home_Company_Content"].value}
          </span>
        </div>
        <a href="company.html">
          <div class="col-xs-12 order-3 order-xl-4 no-default-spacing detail-btn-company">
            <span class="detail-btn-company-content">
              {data["Home_Company_Btn"].value}
            </span>
            <img
              onclick=""
              src="./img/carousel/Symbol24-46.svg"
              class="company-btn-icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Company;
