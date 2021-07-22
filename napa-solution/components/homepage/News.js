import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
const News = (props) => {
  const data = convertArrToObject(props.data?.property);
  // console.log("Data News:", data);
  return (
    <div
      className="row no-default-spacing"
      style={{ background: "#383838 0% 0% no-repeat padding-box" }}
    >
      <div className="row col-xl-6 col-lg-12 no-default-spacing">
        <div className="more-section row col-12 no-default-spacing">
          <div className="col-xl-4 col-xs-12 no-default-spacing news-title">
            <span className="text-1">
              {data["Home_News_Text1"]?.value}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="text-2">
              {data["Home_News_Text2"]?.value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div className="col-xl-8 col-xs-12 no-default-spacing news-content">
            <span className="text-3">{data["Home_News_Text3"]?.value}</span>
          </div>
          <div className="white-border"></div>
        </div>
        <div className="row col-12 collapse" id="recruit-collapse">
          {/* <!--<div className="more-section row col-12 no-default-spacing">
                        <div className="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span className="text-1">RECRUIT&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div className="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span className="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div className="white-border"></div>
                    </div>
                    <div className="more-section row col-12 no-default-spacing">
                        <div className="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span className="text-1">TOPIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div className="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span className="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div className="white-border"></div>
                    </div>
                    <div className="more-section row col-12 no-default-spacing">
                        <div className="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span className="text-1">NEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div className="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span className="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div className="white-border"></div>
                    </div>--> */}
        </div>
      </div>
      <div className="col-xl-3 no-default-spacing">
        {/* <!--<div className="col-xl-3 no-default-spacing more-section-right" data-toggle="collapse"
                 data-target="#recruit-collapse" role="button">
                <a aria-expanded="false" className="more-content">MORE</a>
                <img className="more-dropdown-icon" src="./img/Symbol156-12.svg" />--> */}
      </div>
      <div className="col-xl-3 col-lg-12 image-section no-default-spacing">
        <div className="image-section-content">
          <a href="sdgs.pdf" target="_blank">
            {/* <img className="image-section-img" src="./img/Group 209.svg" /> */}
            <LazyLoadImage
              alt="ImageNews"
              effect="blur"
              src={data["Home_News_Img"].image?.original}
              placeholderSrc={data["Home_News_Img"].image?.thumbnail}
              threshold={100}
              width="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default News;
