import { convertArrToObject, getData } from "../../util/converArrayToObject";
import React from "react";
const Message = (props) => {
  const datas = convertArrToObject(props.data.property);
  const title = Object.values(datas).filter((item) =>
    item.name.includes("CEOMessage_Message_Title1")
  )[0];
  const subTitle = Object.values(datas).filter((item) =>
    item.name.includes("CEOMessage_Message_SubTitle1")
  )[0];
  const content1 = getData(datas, /CEOMessage_Message_Content1/)[0];
  // const content2 = getData(datas, /CompanyAbout_Message_Content2/)[0];

  return (
    <>
      <div className="ceo-container">
        <div
          className="ceo-image-part"
          // style={{
          //   backgroundImage: `url(${datas["CEOMessage_Message_Background"]?.image.original})`,
          // }}
        >
          <img src={datas["CEOMessage_Message_Background1"]?.image.original} />
          <img
            className="ceo-picture"
            src={datas["CEOMessage_Message_CEO1"]?.image.original}
          />
        </div>
        <div className="ceo-message-part" id="ceo-message-darkmode">
          <div className="ceo-message-title">{title.key}</div>
          <div className="ceo-message-subtitle">{title.value}</div>
          <div className="ceo-message-content">
            {datas["CEOMessage_Message_Content1"].value
              .split("\\n")
              .map((text) => (
                <React.Fragment key={text}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
          </div>
          <div className="ceo-message-name">
            <div>
              <p>{subTitle.value.split("ー")[0]}</p>
              <p id="font-signature">{subTitle.value.split("ー")[1]}</p>
            </div>
          </div>
          {/* //代表取締役 Napa Global */}
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div className="cover ceo-cover">
  //       <img className="decor-head-line" src="/img/line-style.svg" />
  //       <h3 id="down-up">{title.value}</h3>
  //       <p id="down-up">{subTitle.value}</p>
  //       <div className="ceo-row ceo-row-reverse">
  //         <div className="wrap-img">
  //           <div className="ceo-box-image">
  //             <img className="imgCEO" src="./img/aHung.svg" />
  //             <img className="bgMessage" src="./img/bg-message.svg" />
  //             <div className="info-ceo" id="down-up">
  //               <div className="position-ceo">代表取締役 Napa Global</div>
  //               <div className="name-ceo">アゼル・レー</div>
  //             </div>
  //             {/* <img loading="lazy" width="100%" src={content1?.image.original} /> */}
  //           </div>
  //         </div>
  //         <div className="ceo-col">
  //           <div className="ceo-box-text" id="down-up">
  //             {content1?.value}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Message;
