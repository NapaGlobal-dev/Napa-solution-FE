import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import joinJsx from "../../../util/joinJsx";

const BPO = (props) => {
  const data = convertArrToObject(props.data.property);

  return (
    <div className="container-fluid">
      <div className="sv-cover-padding">
        <div className={clsx("sv-cover")}>
          <img className="sv-decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">{data.BPO_TitleEN.value}</h3>
          <p id="down-up">{data.BPO_TitleJP.value}</p>
          
          <div className="sv-img-bouding">
            <picture>
              <source
                srcSet={data.BPO_ImageMobile.image.original}
                media="(max-width: 768px)"
              />
              <img
                className="sv-img-cover"
                src={data.BPO_ImageDesktop.image.original}
              />
            </picture>
            <div className="sv-box">
              <div className="sv-content" id="down-up">
                {joinJsx(data.BPO_Content.value.split("\\n"), <br />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPO;
