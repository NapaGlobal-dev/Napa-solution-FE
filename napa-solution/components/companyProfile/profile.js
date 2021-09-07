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
      <div id="down-up" className="cover">
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3>{data["CompanyProfile_Corporate_Label"].value}</h3>
        <p>{data["CompanyProfile_Corporate_Description"].value}</p>
      </div>
      <div className="wrap-table-content">
        <table className="table table-style">
          <tbody>
            {profileTitle.map((item, index) => (
              <tr key={index}>
                <th>{item.value}</th>
                <td width="70%">
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
            {profileTitle.map((item, index) => (
              <tr key={index}>
                <th>{item.value}</th>
                <td width="70%">
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
