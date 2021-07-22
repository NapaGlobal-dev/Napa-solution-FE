import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div>
      <div class="hearder-container">
        <div class="overlay-header"></div>
        <img
          src="./img/untitled-img/_DSC0247.png"
          class="image-header"
          alt=""
        />
        <div class="header-service">
          <div class="header-service-text text-center">
            {data["RemoteManage_Banner_TitleENG"].value}
          </div>
          <div class="header-service-name text-center">
            {data["RemoteManage_Banner_TitleJP"].value}
          </div>
        </div>
        <div class="header-title-page">広域ビル・遠隔管理</div>
      </div>
    </div>
  );
};
export default Banner;
