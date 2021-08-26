import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import joinJsx from "../../../util/joinJsx";

const Embedded = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div className="container-fluid">
      <div>
        <div className="cover">
          <img className="decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">{data.Embedded_TitleEN.value}</h3>
          <p id="down-up">{data.Embedded_TitleJP.value}</p>

          <div className="wrap-service">
            <div className="content-service">
              <div className="item-service">
                <div className="logo-napa">
                  <img src="./img/home/logo_napa_green.svg" />
                </div>
              </div>
              <div className="item-services">
                <div className="intro-service">
                  {data.Embedded_Content.value}
                </div>
              </div>
            </div>
            <div className="img-service">
              <img
                className="sv-img-cover"
                src={data.Embedded_ImageDesktop.image.original}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Embedded;
