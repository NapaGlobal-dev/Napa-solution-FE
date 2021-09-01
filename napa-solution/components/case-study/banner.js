import { getData } from "../../util/converArrayToObject";
import Head from "next/head";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Banner(props) {
  // const banner = getData(data, /ServicesWeb_Banner_Img/)[0];
  // const title = getData(data, /ServicesWeb_Banner_Title/)[0];
  // const subtitle = getData(data, /ServicesWeb_Banner_SubTitle/)[0];
  // const content = getData(data, /ServicesWeb_Banner_Content/)[0];
  // const subcontent = getData(data, /ServicesWeb_Banner_SubContent/)[0];
  const { banner } = props;
  // useEffect(() => {
  //   window.onload = function () {
  //     document.getElementById("banner").className = "wrap-banner open";
  //   };
  // }, []);
  return (
    <>
      <Head>
        <link key="/css/banner.css" rel="stylesheet" href="/css/banner.css" />
      </Head>

      <div className="banner-page banner new-version">
        <div className="title">
          <h1 className="main-title animate-down-up">
          {banner?.Title?.key}
            {banner?.Title?.value}
          </h1>
          <div className="sub-menu animate-down-up">
          {banner?.SubTitle?.key}
            {banner?.SubTitle?.value}
          </div>
        </div>
        <div className="img-banner animate-down-up">
          <img
            src={banner?.Img?.image?.original}
            className="image-banner"
            alt=""
          />
        </div>
        <img className="shape-banner" src="/img/wave-shape.svg" />
      </div>

      </>
  );
}
