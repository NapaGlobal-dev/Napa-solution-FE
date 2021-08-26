import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import joinJsx from "../../../util/joinJsx";

const AI = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div className="container-fluid">
      <div>
        <div className="cover">
          <img className="decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">{data.AI_TitleEN.value}</h3>
          <p id="down-up">{data.AI_TitleJP.value}</p>
          <div className="wrap-service">
            <div className="content-service">
              <div className="item-service">
                <div className="logo-napa">
                  <img src="./img/home/logo_napa_green.svg" />
                </div>
              </div>
              <div className="item-services">
                <div className="intro-service">
                  {data.AI_Content.value}
                </div>
              </div>
            </div>
            <div className="img-service">
              <img
                className="sv-img-cover"
                src={data.AI_ImageDesktop.image.original}
              />
            </div>
          </div>

          {/* <div className="sv-img-bouding">
            <picture>
              <source
                srcSet={data.AI_ImageMobile.image.original}
                media="(max-width: 768px)"
              />
              <img
                className="sv-img-cover"
                src={data.AI_ImageDesktop.image.original}
              />
            </picture>
            <div className="sv-box">
              <div className="sv-content" id="down-up">
                {joinJsx(data.AI_Content.value.split("\\n"), <br />)}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AI;
