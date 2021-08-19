import clsx from "clsx";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";

const WebApp = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div className="container-fluid">
      <div className="sv-cover-padding">
        <div className={clsx("sv-cover")}>
          <img className="sv-decor-head-line" src="/img/line-style.svg" />
          <h3>{data.WebApp_TitleEN.value}</h3>
          <p>{data.WebApp_TitleJP.value}</p>
          <hr className="sv-horizontal-bar" />
          <div className="sv-img-bouding">
            <picture>
              <source
                srcSet={data.WebApp_ImageMobile.image.original}
                media="(max-width: 768px)"
              />
              <img
                className="sv-img-cover"
                src={data.WebApp_ImageDesktop.image.original}
              />
            </picture>
            <div className="sv-box">
              <div className="sv-content">
                {joinJsx(
                  data.WebApp_Content.value.split("\\n"),
                  <br />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
