import React, { useEffect, useState } from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const CounterUp = (props) => {
  const data = convertArrToObject(props.data.property);
  useEffect(() => {
    $(document).ready(() => {
      $(".ab-counter").counterUp({
        delay: 10,
        time: 2000,
      });
    });
  }, []);

  return (
    <div className="ab-container">
      <div className="ab-container-child">
        <div className="ab-container-layout-over">
          <div className="ab-postition-relative">
            <div
              className="ab-background"
              style={{
                backgroundImage: `url(${data.CompanyAbout_Counter_Background?.image.original})`,
              }}
            >
              <img
                className="ab-background-over"
                src={data.CompanyAbout_Counter_DecorWave?.image.original}
              />
            </div>
          </div>
        </div>

        <div className="ab-container-flex">
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-box-ratio-1"></div>
              <div className="ab-container-layout-over ">
                <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                  <div className="ab-box-counter">
                    <span className="ab-counter">
                      {/* {data.CompanyAbout_Counter_CountryNumber.value} */}
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">
                {/* {data.CompanyAbout_Counter_CountryName.value} */}
              国
              </div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-box-ratio-1"></div>
              <div className="ab-container-layout-over ">
                <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                  <div className="ab-box-counter">
                    <span className="ab-counter">
                      {" "}
                      {/* {data.CompanyAbout_Counter_ProjectNumber.value} */}
                      100
                    </span>
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">
                {" "}
                {/* {data.CompanyAbout_Counter_ProjectName.value} */}
                プロジェクト
              </div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-box-ratio-1"></div>
              <div className="ab-container-layout-over ">
                <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                  <div className="ab-box-counter">
                    <span className="ab-counter">
                      {/* {data.CompanyAbout_Counter_EngineerNumber.value} */}
                      500
                    </span>
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">
                {/* {data.CompanyAbout_Counter_EngineerName.value} */}
                エンジニア
              </div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-box-ratio-1"></div>
              <div className="ab-container-layout-over ">
                <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                  <div className="ab-box-counter">
                    <span className="ab-counter">
                      {/* {data.CompanyAbout_Counter_JapaneseNumber.value} */}
                      40
                    </span>
                    %+
                  </div>
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">
                {/* {data.CompanyAbout_Counter_JapaneseName.value} */}
                日本語対応可
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
