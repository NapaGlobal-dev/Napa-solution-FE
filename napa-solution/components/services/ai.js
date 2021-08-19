import clsx from "clsx";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";

const AI = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <div className="container-fluid">
      <div className="sv-cover-padding">
        <div className={clsx("sv-cover")}>
          <img className="sv-decor-head-line" src="/img/line-style.svg" />
          <h3>{data.AI_TitleEN.value}</h3>
          <p>{data.AI_TitleJP.value}</p>
          <hr className="sv-horizontal-bar" />
          <div className="sv-img-bouding">
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
              <div className="sv-content">
                {joinJsx(
                  data.AI_Content.value.split("\\n"),
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

export default AI;
