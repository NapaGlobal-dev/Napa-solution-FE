import React from "react";
import { convertArrToObject, getData } from "../../util/converArrayToObject";

const Profile = (props) => {
  const profileTitle = getData(
    props.data.property,
    /CompanyProfile_Corporate_Title/
  );
  const profileContent = getData(
    props.data.property,
    /CompanyProfile_Corporate_Content/
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
      <div className="wraper-content">
        {profileTitle.map((item, key) => (
          <div className="wrap-container-content" key={key}>
            <div className="wrap-profile" id="down-up">
              <div className="profile-label">{item.value}</div>
              <div className="profile-content">
                {profileContent[key].value.split("/n").map((text, index) => (
                  <React.Fragment key={index}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* <div className="divided-line" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
