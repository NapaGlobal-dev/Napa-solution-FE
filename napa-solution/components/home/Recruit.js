import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Recruit = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div
      class="recruit no-default-spacing recruit-section"
      style={{
        backgroundImage: `url(${data["Home_Recruit_background"].image.original})`,
      }}
    >
      <div class="col-xl-12 no-default-spacing recruit-title">
        <span class="section-title section-title-recruit">
          {data["Home_Recruit_Title"].value}
        </span>
      </div>
      <div class="col-xs-12 no-default-spacing recruit-second-title">
        <span class="section-title-cn section-title-cn-recruit">
          {data["Home_Recruit_SubTitle"].value}
        </span>
      </div>
      <div class="row no-default-spacing recruit-content-wrapper">
        <div class="col-xl-7 col-xs-12 row no-default-spacing">
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="recruit-about.html" class="recruit-content">
              {data["Home_Recruit_Content1"].value}
            </a>
          </div>
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="recruit-score.html" class="recruit-content">
              {data["Home_Recruit_Content2"].value}
            </a>
          </div>
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="recruit-senior.html" class="recruit-content">
              {data["Home_Recruit_Content3"].value}
            </a>
          </div>
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="recruit-qa.html" class="recruit-content">
              {data["Home_Recruit_Content4"].value}
            </a>
          </div>
        </div>
        <div class="col-xl-5 col-xs-12 row no-default-spacing">
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="recruit-system.html" class="recruit-content">
              {data["Home_Recruit_Content5"].value}
            </a>
          </div>
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a
              href="https://job.rikunabi.com/2021/company/r999142021/"
              target="_blank"
              class="recruit-content"
            >
              {data["Home_Recruit_Content6"].value}
            </a>
          </div>
          <div class="col-12 no-default-spacing">
            <img src="./img/carousel/Symbol24-46.svg" />
            <a href="https://en-gage.net/system_saiyo/" class="recruit-content">
              {data["Home_Recruit_Content7"].value}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recruit;
