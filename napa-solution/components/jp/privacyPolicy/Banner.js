import { getData } from "../../../util/converArrayToObject";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Banner({ data }) {
  const banner = getData(data, /PrivacyPolicy_Banner_Img/)[0];
  const title = getData(data, /PrivacyPolicy_Banner_Title/)[0];
  const subtitle = getData(data, /PrivacyPolicy_Banner_SubTitle/)[0];
  // useEffect(() => {
  //   window.onload = function () {
  //     document.getElementById("banner").className = "wrap-banner open";
  //   };
  // }, []);
  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>

      <div className="banner-page banner new-version">
        <div className="title">
          <h1 className="main-title animate-down-up">
            {title?.value}
          </h1>
          <div className="sub-menu animate-down-up">
            {subtitle?.value}
          </div>
        </div>
        <div className="img-banner animate-down-up">
          <LazyLoadImage
            effect='blur'
            src={banner?.image?.original}
            placeholderSrc={banner?.image?.thumbnail}
            threshold={100}
            width='100%'
          />
        </div>
        <div className="shape-banner">

          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
          </svg>

        </div>
      </div>

      {/* <div className="banner">
        <div className="overlay-header-banner"></div>
        <LazyLoadImage
          effect='blur'
          src={banner?.image?.original}
          placeholderSrc={banner?.image?.thumbnail}
          threshold={100}
          height='100%'
          width='100%'
          className="image-banner"
        />
        <div className="wrap-banner" id="banner">
          <h1 className="main-title">
            {title?.key}
            {title?.value}
          </h1>
          <div className="sub-menu">
            {subtitle?.key}
            {subtitle?.value}
          </div>
          <div className="frame-tb"></div>
          <div className="frame-lr"></div>
        </div>
        {/* <div className="wrap-content-banner">
          <div className="content-banner">
            {content?.key}
            {content?.value}
          </div>
          <div className="subcontent-banner">
            {subcontent?.key}
            {subcontent?.value}
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
}
