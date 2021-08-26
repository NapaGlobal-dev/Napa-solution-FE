import Head from "next/head";
import { useEffect } from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  useEffect(() => {
    window.onload = function () {
      document.getElementById("banner").className = "wrap-banner open";
    };
  }, []);
  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>
      <div className="banner">
        <div className="overlay-header-banner"></div>
        <img
          src={data["Offshore_Banner_Img"].image.original}
          className="imageA"
          alt=""
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">
            {data["Offshore_Banner_Title"].value}
          </h1>
          <div className="sub-title">
            {data["Offshore_Banner_Subtitle"].value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        <div className="wrap-content-banner">
          <div className="content-banner">
            {data["Offshore_Banner_Content"].value}
          </div>
          <div className="subcontent-banner">
            {data["Offshore_Banner_Subcontent"].value}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
