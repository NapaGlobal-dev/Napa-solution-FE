import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";

const ContactForm = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <>
      <div className="textC" id='down-up'>
        <div className="titleC">{data["Contact_ContactForm_Title"]?.value}</div>
        <div className="subtitleC">
           {joinJsx(data["Contact_ContactForm_SubTitle"]?.value.split("\\n"), <br />)}
        </div>
      </div>
      <div className='contact'>
        <div className="containerD" id="wrap-contact">
          <div className="tableD">
            <div className="titleD" id='down-up'>
              {" "}
              {data["Contact_ContactForm_Content1"]?.value}
            </div>
            <div>
              <input type="text" className="textBoxD" />
            </div>
            <div className="titleD" id='down-up'>
              {" "}
              {data["Contact_ContactForm_Content2"]?.value}
            </div>
            <div>
              <input type="text" className="textBoxD" />
            </div>
            <div className="titleD" id='down-up'>
              {data["Contact_ContactForm_Content3"]?.value}
            </div>
            <div>
              <input type="text" className="textBoxD" />
            </div>
            <div className="titleD" id='down-up'>
              {data["Contact_ContactForm_Content4"]?.value}
            </div>
            <div>
              <input type="text" className="textBoxD" />
            </div>
            <div className="titleD" id='down-up'>
              {data["Contact_ContactForm_Content5"]?.value}
            </div>
            <div>
              <input type="text" className="textBoxD" />
            </div>
            {/* <div className="titleD">*お問い合わせ内容</div>
            <div>
              <textarea name="お問い合わせ内容" className="textareaD" />
            </div> */}
          </div>
          <div className="buttonE">
            {data["Contact_ContactForm_Button"]?.value}
            <svg
              height="7px"
              fill="none"
              strokeWidth="2"
              stroke="#6C3AF5"
              strokeDasharray="69px 138px"
              viewBox="0 0 64 7"
              style={{ position: "absolute", right: -16 }}
            >
              <path d="M0 6h61.5l-5.2-5.2"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
