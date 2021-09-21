import { convertArrToObject } from "../../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Service = (props) => {
  const data = convertArrToObject(props.data?.property);
  // console.log("data Service:", data);
  const listItem = Object.values(data).filter((item) =>
    item.name.includes("Home_Service_Item")
  );
  return (
    <div className="service row no-default-spacing">
      <div className="col-12 no-default-spacing service-section">
        <span className="section-title section-title-service">
          {data["Home_Service_Title"]?.value}
        </span>
      </div>
      <div className="col-12 no-default-spacing service-section">
        <span className="section-title-cn section-title-cn-service">
          {data["Home_Service_Subtitle"]?.value}
        </span>
      </div>
      <div className="col-12 no-default-spacing service-section">
        <span className="section-content section-content-service">
          {data["Home_Service_Content"]?.value}
        </span>
      </div>
      {listItem.map((item, key) => (
        <div
          className="col-md-4 col-xs-12 no-default-spacing position-relative"
          key={key}
        >
          <a href={item.url}>
            {/* <img className="service-image" src="./img/service/service-1.png" /> */}
            <LazyLoadImage
              alt={`ServiceItem ${key}`}
              effect="blur"
              src={item.image?.original}
              placeholderSrc={item.image?.thumbnail}
              threshold={100}
              width="100%"
              className="service-image"
            />
            <span className="image-content">{item.value}</span>
            <img src="./img/carousel/Symbol24-46.svg" className="service-btn" />
          </a>
        </div>
      ))}

      {/* <div className="col-md-4 col-xs-12 no-default-spacing">
        <a href="inspect-maintenance.html">
          <img className="service-image" src="./img/service/service-2.png" />
          <span className="image-content">設備管理・点検・保守</span>
          <img src="./img/carousel/Symbol24-46.svg" className="service-btn" />
        </a>
      </div>
      <div className="col-md-4 col-xs-12 no-default-spacing">
        <a href="remote-manage.html">
          <img className="service-image" src="./img/service/service-3.png" />
          <span className="image-content">広域ビル・遠隔管理</span>
          <img src="./img/carousel/Symbol24-46.svg" className="service-btn" />
        </a>
      </div> */}
    </div>
  );
};
export default Service;
