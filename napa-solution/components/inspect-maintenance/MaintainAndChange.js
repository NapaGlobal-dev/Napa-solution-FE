import { convertArrToObject } from "../../util/converArrayToObject";
const MaintainAndChange = (props) => {
  const data = convertArrToObject(props.data.property);
  const groups = Object.values(data).filter((item) =>
    item.name.includes("InspectMaintenance_MaintainAndChange_Group")
  );
  // console.log("data maintain and change", data);
  return (
    <>
      <section className="operation-management-flow remote-manage-flow inspect-maintenance-flow">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="operation-management-wrap operation-management-flow-title">
                  <span className="operation-management-flow-spec">
                    {
                      data["InspectMaintenance_MaintainAndChange_Title_line1"]
                        ?.key
                    }
                  </span>
                  {
                    data["InspectMaintenance_MaintainAndChange_Title_line1"]
                      ?.value
                  }
                  <span className="operation-management-break">
                    {
                      data["InspectMaintenance_MaintainAndChange_Title_line2"]
                        ?.value
                    }
                  </span>
                </h2>

                <p className="remote-manage-flow-desc">
                  {data["InspectMaintenance_MaintainAndChange_Content"]?.key}
                  <span className="operation-management-break">
                    {
                      data["InspectMaintenance_MaintainAndChange_Content"]
                        ?.value
                    }
                  </span>
                </p>
                <div className="operation-management-flow-group inspect-maintenance-flow-desc"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="remote-manage-flow-group-introduce">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {groups.map((item, index) => (
                  <div className="inspect-maintenance-group-bg" key={index + 1}>
                    {/* <!-- group3--> */}

                    <div className="inspect-maintenance-group">
                      <p className="inspect-maintenance-group-title">
                        {item.value}
                      </p>

                      <div className="inspect-maintenance-group-foot">
                        {item.content.map((itemContent, index) => (
                          <div
                            className="inspect-maintenance-group-element"
                            key={index + 2}
                          >
                            <p className="inspect-maintenance-group-element-title inspect-maintenance-group-element-title-spec">
                              {itemContent.key}
                            </p>
                            <p className="inspect-maintenance-group-element-title inspect-maintenance-group-element-title-spec">
                              {itemContent.value}
                            </p>

                            <p className="inspect-maintenance-group-element-desc">
                              {itemContent.content[0].value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MaintainAndChange;
