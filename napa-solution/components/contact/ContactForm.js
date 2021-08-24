import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";

const ContactForm = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <>
      <div className="wrap-title" id='down-up'>
        <div className="title-contact">{data["Contact_ContactForm_Title"]?.value}</div>
        <div className="subtitle-contact">
           {data["Contact_ContactForm_SubTitle"]?.value}
        </div>
        <div className="subtitle-contact phoneNum">
           {data["Contact_ContactForm_PhoneNum"]?.value}
        </div>
      </div>
      <div className='contact'>
        <div className="container-contact" id="wrap-contact">
          <div className="table-contact">
            <div className="title-row" id='down-up'>
              {" "}
              {data["Contact_ContactForm_Content1"]?.value}
            </div>
            <div>
              <input type="text" className="textBox-contact" />
            </div>
            <div className="title-row" id='down-up'>
              {" "}
              {data["Contact_ContactForm_Content2"]?.value}
            </div>
            <div>
              <input type="text" className="textBox-contact" />
            </div>
            <div className="title-row" id='down-up'>
              {data["Contact_ContactForm_Content3"]?.value}
            </div>
            <div>
              <input type="text" className="textBox-contact" />
            </div>
            <div className="title-row" id='down-up'>
              {data["Contact_ContactForm_Content4"]?.value}
            </div>
            <div>
              <input type="text" className="textBox-contact" />
            </div>
            <div className="title-row" id='down-up'>
              {data["Contact_ContactForm_Content5"]?.value}
            </div>
            <div>
              <textarea type="text" className="textarea-contact" />
            </div>
            {/* <div className="title-row">*お問い合わせ内容</div>
            <div>
              <textarea name="お問い合わせ内容" className="textarea-contact" />
            </div> */}
          </div>
          <div className="button-contact">
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
