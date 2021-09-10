import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Company = (props) => {
  const data = convertArrToObject(props.data?.property);
  // console.log("Data Company:", data);
  return (
    <div className="company row no-default-spacing">
      <div className="col-xl-6 col-xs-12 no-default-spacing">
        {/* <img className="company-image" src="./img/company/company.png" /> */}
        <LazyLoadImage
          alt="ImageNews"
          effect="blur"
          src={data["Home_Company_Img"].image?.original}
          placeholderSrc={data["Home_Company_Img"].image?.thumbnail}
          threshold={100}
          width="100%"
          height="100%"
          className="company-image"
        />
      </div>
      <div className="company-rect-wrapper">
        <div className="label-year-establish">
          <span className="year-establish">
            {data["Home_Company_Establish"]?.value}
          </span>
          <span className="company-establish">
            {data["Home_Company_Label"]?.value}
          </span>
        </div>
      </div>
      <div className="col-xl-6 col-xs-12 no-default-spacing company-content-wrapper" id='down-up'>
        <div
          className="col-xs-12 order-1 order-xl-1 no-default-spacing section-title-company-wrapped"
        >
          <span className="title-company" id="main-title">
            {data["Home_Company_Title"]?.value}
          </span>
        </div>
        <div
          className="col-xs-12 order-2 order-xl-2 no-default-spacing section-subtitle-company"
        >
          <span className="section-title-cn-company" id="sub-title">
            {data["Home_Company_Subtitle"]?.value}
          </span>
        </div>
        <div
          className="col-xs-12 order-4 order-xl-3 no-default-spacing section-content-company"
        >
          <span className="section-content content-company">
            {data["Home_Company_Content"]?.value}
          </span>
        </div>
        <div
          className="col-xs-12 order-4 order-xl-3 no-default-spacing section-sub-content-company"
        >
          <span className="section-sub-content content-company">
            {data["Home_Company_Subcontent"]?.value}
          </span>
        </div>
        <a href={data["Home_Company_Btn"]?.url} id="fade-out">
          <div
            className="col-xs-12 order-3 order-xl-4 no-default-spacing"
            id="detail-btn-company"
          >
            <span id="detail-btn-company-content">
              {data["Home_Company_Btn"]?.value}
            </span>
            <svg id="stroke-arr-btn" viewBox="0 0 64 7">
              <path d="M0 6h61.5l-5.2-5.2"></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Company;
