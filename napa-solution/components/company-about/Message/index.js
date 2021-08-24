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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58.948"
          height="124.343"
          viewBox="0 0 58.948 124.343"
        >
          <g
            id="Group_135"
            data-name="Group 135"
            transform="translate(-98.543 -1182.829)"
          >
            <line
              id="Line_88"
              data-name="Line 88"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="4"
            />
            <line
              id="Line_89"
              data-name="Line 89"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="6"
            />
            <line
              id="Line_90"
              data-name="Line 90"
              x1="94.203"
              transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
              fill="none"
              stroke="#6a43d5"
              stroke-width="4"
            />
          </g>
        </svg>
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
