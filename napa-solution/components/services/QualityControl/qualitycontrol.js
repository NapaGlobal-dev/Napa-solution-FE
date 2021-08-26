import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import joinJsx from "../../../util/joinJsx";

const QualityControl = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div className="container-fluid">
      <div>
        <div className="cover">
          <img className="decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">{data.QualityControl_TitleEN.value}</h3>
          <p id="down-up">{data.QualityControl_TitleJP.value}</p>

          <div className="wrap-service">
            <div className="content-service">
              <div className="item-service">
                <div className="logo-napa">
                  <img src="./img/home/logo_napa_white.svg" />
                </div>
              </div>
              <div className="item-services">
                <div className="intro-service">
                  {data.QualityControl_Content.value}
                </div>
              </div>
            </div>
            <div className="img-service">
              <img
                className="sv-img-cover"
                src={data.QualityControl_ImageDesktop.image.original}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityControl;
