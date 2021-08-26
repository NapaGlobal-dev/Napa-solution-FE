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
            <div className="ab-background"
            style={{
              backgroundImage: `url(${data.CompanyAbout_Counter_Background?.image.original})`,
            }}
            >
              {/* <img
                className="ab-background-img"
                src={data.CompanyAbout_Counter_Background?.image.original}
              /> */}
              <img className="ab-background-over" src="/img/wave-shape.svg" />
            </div>
          </div>
        </div>

        <div className="ab-container-flex">
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                <div className="ab-box-counter">
                  <span className="ab-counter">5</span>
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">プロジェクト</div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                <div className="ab-box-counter">
                  <span className="ab-counter">100</span>+
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">プロジェクト</div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                <div className="ab-box-counter">
                  <span className="ab-counter">200</span>+
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">プロジェクト</div>
            </div>
          </div>
          <div className="ab-flex-child">
            <div className="ab-box-rhombus">
              <div className="ab-flex-center ab-flex-fill-full ab-background-rhombus">
                <div className="ab-box-counter">
                  <span className="ab-counter">50</span>%+
                </div>
              </div>
            </div>
            <div className="ab-bounding-title">
              <div className="ab-title ab-flex-center">プロジェクト</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
