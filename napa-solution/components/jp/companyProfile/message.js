import React, { useEffect } from "react";
import { convertArrToObject } from "../../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Message = (props) => {
  const data = convertArrToObject(props.data.property);

  useEffect(() => {
    document.body.classList.add("is-map");
    // handleAttachGoogleMap()
    return () => {
      document.body.classList.remove("is-map");
    };
  }, []);

  return (
    <div className="profile-company">
      <div id="down-up" className="cover">
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3>{data["CompanyProfile_Message_Label"].value}</h3>
        <p>{data["CompanyProfile_Message_Description"].value}</p>
      </div>
      <div className="wrap-table-content center">
        <div className="wrap-detail">
          <div className="wrap-message" id="down-up">
            <div className="message-content">
              {data["CompanyProfile_Message_Title"].content.map(
                (content, index) => (
                  <React.Fragment key={index}>
                    {"(" + (index + 1) + ") " + content.value}
                    <br />
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
        <div className="wrapped-image" id="down-up">
          <LazyLoadImage
            effect="blur"
            src={data["CompanyProfile_Message_Img"]?.image?.original}
            placeholderSrc={
              data["CompanyProfile_Message_Img"]?.image?.thumbnail
            }
            threshold={100}
            width="100%"
            height="100%"
            className="image-detail"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
