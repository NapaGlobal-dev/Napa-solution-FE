import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";

const OperationFlow = (props) => {
  const data = convertArrToObject(props.data.property);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa", data);
  return (
    <section class="operation-management-flow remote-manage-flow">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="operation-management-wrap operation-management-flow-title">
                <span class="operation-management-flow-spec">広</span>
                {data["RemoteManage_OperationFlow_Title1"].value}
                <span class="operation-management-break">
                  {data["RemoteManage_OperationFlow_Title2"].value}
                </span>
              </h2>
              <p class="remote-manage-flow-desc">
                {data["RemoteManage_OperationFlow_Content1"].value}
                <span class="operation-management-break">
                  {data["RemoteManage_OperationFlow_Content2"].value}
                </span>
              </p>
              <div class="operation-management-flow-group">
                <img
                  src={data["RemoteManage_OperationFlow_Image"].image.original}
                  alt="img"
                  class="remote-manage-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OperationFlow;
