import React from "react";
import { convertArrToObject, getData } from "../../util/converArrayToObject";

const Profile = (props) => {
  const profileTitle = getData(
    props.data.property,
    /CompanyProfile_Corporate_Title/
  );
  const profileContentNPS = getData(
    props.data.property,
    /CompanyProfile_Corporate_ContentNPS/
  );
  const profileContentNPG = getData(
    props.data.property,
    /CompanyProfile_Corporate_ContentNPG/
  );
  const data = convertArrToObject(props.data.property);

  return (
    <div className="profile-company">
      <div className="wrapper-head">
        <div className="wrap-title">
          <div className="wrap-profile-icon">
            <div className="line-1" />
            <div className="line-2" />
            <div className="line-3" />
          </div>
          <div className="profile-title" id="down-up">
            <div className="profile-big-title">
              <h1>{data["CompanyProfile_Corporate_Label"].value}</h1>
            </div>
            <div className="profile-sub-title">
              {data["CompanyProfile_Corporate_Description"].value}
            </div>
            <div className="divided-line" />
          </div>
        </div>
      </div>
      <div className="wrap-table-content">
        <table className="table table-style">
          <tbody>
            <tr>
              <th> {data["CompanyProfile_Corporate_NPS"].value}</th>
            </tr>
            {profileTitle.map((item, index) => (
              <tr key={index}>
                <th>{item.value}</th>
                <td>
                  {profileContentNPS[index].value
                    .split("/n")
                    .map((text, index) => (
                      <React.Fragment key={index}>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table table-style">
          <tbody>
            <tr>
              <th> {data["CompanyProfile_Corporate_NPG"].value}</th>
            </tr>
            {profileTitle.map((item, index) => (
              <tr key={index}>
                <th>{item.value}</th>
                <td>
                  {profileContentNPG[index].value
                    .split("/n")
                    .map((text, index) => (
                      <React.Fragment key={index}>
                        {text}
                        <br />
                      </React.Fragment>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
