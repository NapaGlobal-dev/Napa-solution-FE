import Head from "next/head";
import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import usedarkmode from "use-dark-mode";
import { useEffect, useState, useRef } from "react";

const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  const darkMode = usedarkmode();
  const [darkmodeIssue, setDarkmodeIssue] = useState(true)
  useEffect(() => {
    // window.onload = function () {
    //   document.getElementById("banner").className = "wrap-banner open";
    // };

    const isDarmode = localStorage.getItem('darkmode')
    if(isDarmode)
      if(isDarmode=="off")
        setDarkmodeIssue(false)
    else
      setDarkmodeIssue(false)
    
  }, []);

  // run only for update
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setDarkmodeIssue(false)
    }
  });

  const whatColor = darkmodeIssue || darkMode.value

  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>

      <div className="banner-page banner new-version">
        <div className="title">
          <h1 className="main-title animate-down-up">
            {data["Offshore_Banner_Title"].value}
          </h1>
          <div className="sub-menu animate-down-up">
            {data["Offshore_Banner_Subtitle"].value}
          </div>
        </div>
        <div className="img-banner animate-down-up">
          <LazyLoadImage
            effect='blur'
            src={data["Offshore_Banner_Img"]?.image?.original}
            // src="https://res.cloudinary.com/dh8l9y2c2/image/upload/v1630419921/NapaImage/612e3ba962b49f1840ff1fb3.svg"
            // placeholderSrc={data["Offshore_Banner_Img"]?.image?.thumbnail}
            threshold={100}
            width='100%'
          />
        </div>
        <div className="shape-banner">

          <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill={whatColor? "rgba(35, 11, 76,0.7)" : "rgba(255, 255, 255,0.7)"}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill={whatColor? "rgba(35, 11, 76,0.5)" : "rgba(255, 255, 255,0.5)"}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill={whatColor? "rgba(35, 11, 76,0.3)" : "rgba(255, 255, 255,0.3)"}
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill={whatColor? "#230b4c" : "#FFF"}
              />
            </g>
          </svg>

        </div>


      </div>



      {/* <div className="banner">
        <div className="overlay-header-banner"></div>
        <LazyLoadImage
          effect="blur"
          src={data["Offshore_Banner_Img"]?.image?.original}
          placeholderSrc={data["Offshore_Banner_Img"]?.image?.thumbnail}
          threshold={100}
          width="100%"
          height='100%'
          className="image-banner"
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
      </div> */}
    </>
  );
};

export default Banner;
