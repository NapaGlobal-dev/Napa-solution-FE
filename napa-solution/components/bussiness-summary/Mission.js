import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const Mission = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div className="container-fluid container-middle">
      <div className="container">
        <div className="row business-content-ori">
          <div className="col-sm-12">
            <div className="font_1 padding_2">
              <h2 className="operation-management-wrap operation-management-flow-title first-leter-upper-case">
                {/* <span className="operation-management-flow-spec">快</span> */}
                {data["BusinessSummary_Mission_Title"].value}
                {/* 適性、費用対効果、エネルギー効率を */}
                <span className="operation-management-break">
                  {/* 真摯に追求するビル環境のトータルマネジメントカンパニーです。 */}
                  {data["BusinessSummary_Mission_Subtitle"].value}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row business-content-ori">
          <div className="col-sm-12">
            <div className="font_2 margin_1">
              {data["BusinessSummary_Mission_Content"].value}
              {/* そのビルに集う人や、そこで働く人々にとって、いつも快適な環境であり続けるように。
              私たち日本空調システムは、公共施設を中心とする設備のトータルマネジメントを通じ、
              日々の安全、安心、快適を支えています。空調や給排水、電気、防災、防犯といった設備を保守管理しながら、
              診断や更新等さまざまな課題解決の提案を行い、快適性はもちろん費用対効果やエネルギー効率を総合的に追求しています。 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
