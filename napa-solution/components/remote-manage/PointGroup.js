import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const PointGroup = (props) => {
  const data = convertArrToObject(props.data.property);

  console.log("++++++", data);
  return (
    <section class="remote-manage-flow-waab-section ">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="operation-management-wrap operation-management-flow-title">
                <span class="operation-management-flow-spec">日</span>
                {data["RemoteManage_PointWrapper_Intro1"].value}
                <span class="operation-management-break">
                  {data["RemoteManage_PointWrapper_Intro2"].value}
                </span>
                <span class="operation-management-break">
                  {data["RemoteManage_PointWrapper_Intro3"].value}
                </span>
              </h2>

              <div class="remote-manage-flow-waab">
                <div class="operation-management-people-info-top remote-manage-flow-waab-panel">
                  <p class="operation-management-people-info-title">
                    {data["RemoteManage_Point_Title"].value}
                  </p>
                </div>
              </div>

              <div class="remote-manage-flow-panel-group">
                <div class="remote-manage-flow-point-group">
                  <div class="remote-manage-flow-point-info">
                    <p class="remote-manage-flow-point-text">
                      POINT<span class="remote-manage-flow-point-value">1</span>
                    </p>
                  </div>
                  <div class="remote-manage-flow-point-detail-group">
                    <p class="remote-manage-flow-point-detail-title">
                      {data["RemoteManage_Point_TitlePoint1"].value}
                    </p>
                    <p class="remote-manage-flow-point-detail-desc">
                      {data["RemoteManage_Point_ContentPoint1"].value}
                    </p>
                  </div>
                </div>

                <div class="remote-manage-flow-point-group">
                  <div class="remote-manage-flow-point-info">
                    <p class="remote-manage-flow-point-text">
                      POINT<span class="remote-manage-flow-point-value">2</span>
                    </p>
                  </div>
                  <div class="remote-manage-flow-point-detail-group">
                    <p class="remote-manage-flow-point-detail-title">
                      {data["RemoteManage_Point_TitlePoint2"].value}
                    </p>
                    <p class="remote-manage-flow-point-detail-desc">
                      {data["RemoteManage_Point_ContentPoint2"].value}
                    </p>
                  </div>
                </div>

                <div class="remote-manage-flow-point-group">
                  <div class="remote-manage-flow-point-info">
                    <p class="remote-manage-flow-point-text">
                      POINT<span class="remote-manage-flow-point-value">3</span>
                    </p>
                  </div>
                  <div class="remote-manage-flow-point-detail-group">
                    <p class="remote-manage-flow-point-detail-title">
                      {data["RemoteManage_Point_TitlePoint3"].value}
                    </p>
                    <p class="remote-manage-flow-point-detail-desc">
                      {data["RemoteManage_Point_ContentPoint3"].value}
                    </p>
                  </div>
                </div>

                <div class="remote-manage-flow-point-group">
                  <div class="remote-manage-flow-point-info">
                    <p class="remote-manage-flow-point-text">
                      POINT<span class="remote-manage-flow-point-value">4</span>
                    </p>
                  </div>
                  <div class="remote-manage-flow-point-detail-group">
                    <p class="remote-manage-flow-point-detail-title">
                      {data["RemoteManage_Point_TitlePoint4"].value}
                    </p>
                    <p class="remote-manage-flow-point-detail-desc">
                      {data["RemoteManage_Point_ContentPoint4"].value}
                    </p>
                  </div>
                </div>

                <div class="remote-manage-flow-point-group">
                  <div class="remote-manage-flow-point-info">
                    <p class="remote-manage-flow-point-text">
                      POINT<span class="remote-manage-flow-point-value">5</span>
                    </p>
                  </div>
                  <div class="remote-manage-flow-point-detail-group">
                    <p class="remote-manage-flow-point-detail-title">
                      {data["RemoteManage_Point5_TitlePoint5"].value}
                    </p>
                    <p class="remote-manage-flow-point-detail-desc">
                      {data["RemoteManage_Point5_ContentPoint5"].value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PointGroup;
