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
          className="company-image"
        />
      </div>
      <div className="col-xl-6 col-xs-12 no-default-spacing company-content-wrapper">
        <div className="col-xs-12 order-1 order-xl-1 no-default-spacing padding-title">
          <span className="section-title section-title-company">
            {data["Home_Company_Title"]?.value}
          </span>
        </div>
        <div className="col-xs-12 order-2 order-xl-2 no-default-spacing padding-title-cn">
          <span className="section-title-cn section-title-cn-company">
            {data["Home_Company_Subtitle"]?.value}
          </span>
        </div>
        <div className="col-xs-12 order-4 order-xl-3 no-default-spacing section-content-company">
          <span className="section-content content-company">
            {data["Home_Company_Content"]?.value}
          </span>
        </div>
        <a href="company.html">
          <div className="col-xs-12 order-3 order-xl-4 no-default-spacing detail-btn-company">
            <span className="detail-btn-company-content">
              {data["Home_Company_Btn"]?.value}
            </span>

            <img
              // onclick=""
              src="./img/carousel/Symbol24-46.svg"
              className="company-btn-icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Company;
