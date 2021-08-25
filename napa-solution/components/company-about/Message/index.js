import { convertArrToObject, getData } from "../../../util/converArrayToObject";

const Message = (props) => {
  const datas = convertArrToObject(props.data.property);
  const title = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_Message_Title")
  )[0];
  const subTitle = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_Message_SubTitle")
  )[0];
  const content1 = getData(datas, /CompanyAbout_Message_Content1/)[0];
  const content2 = getData(datas, /CompanyAbout_Message_Content2/)[0];

  return (
    <>
      <div className="cover ab-cover">
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3 id="down-up">{title.value}</h3>
        <p id="down-up">{subTitle.value}</p>
        <div className="ab-row ab-row-reverse">
          <div className="ab-col">
            <div className="ab-box-image">
              <img loading="lazy" width="100%" src={content1?.image.original} />
            </div>
          </div>
          <div className="spacing"></div>
          <div className="ab-col">
            <div className="ab-box-text">{content1?.value}</div>
          </div>
        </div>
        <div className="ab-row">
          <div className="ab-col">
            <div className="ab-box-image">
              <img loading="lazy" width="100%" src={content2?.image.original} />
            </div>
          </div>
          <div className="spacing"></div>
          <div className="ab-col">
            <div className="ab-box-text">{content2?.value}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
