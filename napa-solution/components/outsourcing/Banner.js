import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Banner = (props) => {
  const data = convertArrToObject(props.data.property);
  // console.log("data banner:", data);
  return (
    <div className="hearder-container">
      <div className="overlay-header"></div>
      <LazyLoadImage
        alt="ImageOutsourcingbanner"
        effect="blur"
        src={data["Outsourcing_Banner_background"].image?.original}
        placeholderSrc={data["Outsourcing_Banner_background"].image?.thumbnail}
        threshold={100}
        width="100%"
        className="image-header"
        height="100%"
      />
      <div className="header-title-page header-title-page-spec">
        {data["Outsourcing_Banner_Title"]?.value}
      </div>
    </div>
  );
};

export default Banner;
