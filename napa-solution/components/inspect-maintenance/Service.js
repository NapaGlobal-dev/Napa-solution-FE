import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Service = (props) => {
  const data = convertArrToObject(props.data.property);
  const services = Object.values(data).filter((item) =>
    item.name.includes("Home_Service_Item")
  );
  // console.log("data service", data);
  return (
    <section className="operation-management-gallery">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="operation-management-gallery-group">
                {services.map((item, index) => (
                  <div
                    className="operation-management-gallery-group-element"
                    key={index}
                  >
                    <div className="operation-management-gallery-group-mobile">
                      <a href={item?.url}>
                        <LazyLoadImage
                          alt="ImageNews"
                          effect="blur"
                          src={item.image?.original}
                          placeholderSrc={item.image?.thumbnail}
                          threshold={100}
                          width="100%"
                          className="operation-management-gallery-group-element-img"
                        />
                        <div className="operation-management-gallery-foot-group">
                          <span className="operation-management-gallery-foot-title">
                            {item?.value}
                          </span>
                          <img
                            src="./img/carousel/Symbol24-46.svg"
                            className=""
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
