import { useMutation } from "@apollo/client";
import { useState, Fragment } from "react";
import { ADD_CUSTOMER } from "../../query/general";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";
import { createContactGQL } from "../../query/mutation";

const ContactForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyAddressError, setCompanyAddressError] = useState(false);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [checked, setChecked] = useState(false);
  const data = convertArrToObject(props.data.property);

  const [createContact, { data: contactData, loading, error }] = useMutation(
    createContactGQL,
    {
      onCompleted: resetForm,
    }
  );

  function resetForm() {
    setEmail("");
    setMessage("");
    setPhone1("");
    setPhone2("");
    setPhone3("");
    setCompanyName("");
    setCompanyAddress("");
    setFullName("");
  }

  function submit(e) {
    const phone = (phone1 + phone2 + phone3).length === 11;
    !fullName ? setFullNameError(true) : "none";
    !companyName ? setCompanyNameError(true) : "none";
    !companyAddress ? setCompanyAddressError(true) : "none";
    !phone ? setPhoneError(true) : "none";
    !email ? setEmailError(true) : "none";
    !message ? setMessageError(true) : "none";
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    if (
      !(
        fullNameError ||
        companyAddressError ||
        companyNameError ||
        phoneError ||
        messageError ||
        emailError ||
        !emailValid ||
        !checked
      )
    ) {
      e.preventDefault();

      const variables = {
        name: fullName,
        email: email,
        phone: phone1 + phone2 + phone3,
        company: companyName,
        address: companyAddress,
        message: message,
      };

      createContact({
        variables: variables,
      });
    }
    e.preventDefault();
  }

  function onChange(e) {
    e.preventDefault();
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let check = new RegExp(format).test(e.target.value);
    switch (e.target.name) {
      case "fullName": {
        setFullName(e.target.value);
        if (!!check) setFullNameError(true);
        else setFullNameError(false);
        break;
      }
      case "companyName": {
        setCompanyName(e.target.value);
        if (!!check) setCompanyNameError(true);
        else setCompanyNameError(false);
        break;
      }
      case "companyAddress": {
        setCompanyAddress(e.target.value);
        if (!!check) setCompanyAddressError(true);
        else setCompanyAddressError(false);
        break;
      }
      case "phone1": {
        if (/[^0-9]/.test(e.target.value) || e.target.value.length > 3) {
          break;
        }
        setPhone1(e.target.value);
        setPhoneError(false);
        break;
      }
      case "phone2": {
        if (/[^0-9]/.test(e.target.value) || e.target.value.length > 4) {
          break;
        }
        setPhone2(e.target.value);
        setPhoneError(false);
        break;
      }
      case "phone3": {
        if (/[^0-9]/.test(e.target.value) || e.target.value.length > 4) {
          break;
        }
        setPhone3(e.target.value);
        setPhoneError(false);
        break;
      }
      case "email": {
        setEmail(e.target.value);
        setEmailValid(true);
        setEmailError(false);
        break;
      }
      case "message": {
        setMessage(e.target.value);
        if (!!check) setMessageError(true);
        else setMessageError(false);
        break;
      }
    }
  }

  if (error)
    alert(
      "An error occur when trying send your message, plase try again later"
    );

  return (
    <>
      <div className="wrap-title" id="down-up">
        <div className="title-contact">
          {data["Contact_ContactForm_Title"]?.value}
        </div>
        <div className="subtitle-contact">
          {data["Contact_ContactForm_SubTitle"]?.value
            .split("\\n")
            .map((text, index) => (
              <Fragment key={index}>
                <strong className={`subtitle${index}`}>{text}</strong>
              </Fragment>
            ))}
        </div>
        <div className="subtitle-contact phoneNum">
          {data["Contact_ContactForm_PhoneNum"]?.value}
        </div>
      </div>
      <div className="container-contact">
        <div className="left-contact">
          {data["Contact_Location_Title"]?.value}
          <div id="down-up">
            {data["Contact_Location_VN"]?.value}
            <a
              className="link-map"
              href={data?.Footer_MapBtn_EN?.url}
              target="_blank"
            >
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                  c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                  l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                  c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                />
              </svg>
            </a>
          </div>
          <p id="down-up">{data?.Footer_Address_EN?.value}</p>
          <a
            className="link-map"
            href={data?.Footer_MapBtn_EN?.url}
            target="_blank"
            id="down-up"
          >
            {data["Footer_MapBtn_EN"]?.value}
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
              />
            </svg>
          </a>
          <div id="down-up">
            {data["Contact_Location_JP"]?.value}
            <a href={data?.Footer_MapBtn_JP?.url} target="_blank">
              <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                  c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                  l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                  c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                />
              </svg>
            </a>
          </div>
          <p id="down-up">{data?.Footer_Address_JP?.value}</p>
          <a
            className="link-map"
            href={data?.Footer_MapBtn_JP?.url}
            target="_blank"
            id="down-up"
          >
            {data["Footer_MapBtn_JP"]?.value}
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
              />
            </svg>
          </a>
        </div>
        <div className="right-contact" id="right-contact">
          <form onSubmit={submit}>
            <p className={fullNameError ? "error" : ""}>
              {data?.Contact_ContactForm_Content1?.value}
            </p>
            <input
              type="input"
              name="fullName"
              className={fullNameError ? "error" : ""}
              onChange={onChange}
              value={fullName}
              disabled={loading}
            />
            {fullNameError ? (
              <label>
                {data?.Contact_ContactForm_Message?.value}{" "}
                {data?.Contact_ContactForm_Content1?.value}
              </label>
            ) : (
              <></>
            )}

            <p className={companyNameError ? "error" : ""}>
              {data?.Contact_ContactForm_Content2?.value}
            </p>
            <input
              type="input"
              name="companyName"
              className={companyNameError ? "error" : ""}
              onChange={onChange}
              value={companyName}
              disabled={loading}
            />
            {companyNameError ? (
              <label>
                {data?.Contact_ContactForm_Message?.value}{" "}
                {data?.Contact_ContactForm_Content2?.value}
              </label>
            ) : (
              <></>
            )}

            <p className={companyAddressError ? "error" : ""}>
              {data?.Contact_ContactForm_Content3?.value}
            </p>
            <input
              type="input"
              name="companyAddress"
              className={companyAddressError ? "error" : ""}
              onChange={onChange}
              value={companyAddress}
              disabled={loading}
            />
            {companyAddressError ? (
              <label>
                {data?.Contact_ContactForm_Message?.value}{" "}
                {data?.Contact_ContactForm_Content3?.value}
              </label>
            ) : (
              <></>
            )}

            <p className={phoneError ? "error" : ""}>
              {data?.Contact_ContactForm_Content4?.value}
            </p>
            <div className="phone-contact">
              <input
                type="input"
                name="phone1"
                className={phoneError ? "error" : ""}
                placeholder="090"
                onChange={onChange}
                value={phone1}
                disabled={loading}
              />
              -
              <input
                type="input"
                name="phone2"
                className={phoneError ? "error" : ""}
                placeholder="0000"
                onChange={onChange}
                value={phone2}
                disabled={loading}
              />
              -
              <input
                type="input"
                name="phone3"
                className={phoneError ? "error" : ""}
                placeholder="0000"
                onChange={onChange}
                value={phone3}
                disabled={loading}
              />
            </div>
            {phoneError ? (
              <label>
                {data?.Contact_ContactForm_Message?.value}{" "}
                {data?.Contact_ContactForm_Content4?.value}
              </label>
            ) : (
              <></>
            )}

            <p className={emailError || !emailValid ? "error" : ""}>
              {data?.Contact_ContactForm_Content5?.value}
            </p>
            <input
              type="input"
              name="email"
              className={emailError || !emailValid ? "error" : ""}
              onChange={onChange}
              value={email}
              disabled={loading}
            />
            {emailError ? (
              <label>
                Enter Your {data?.Contact_ContactForm_Content5?.value}
              </label>
            ) : !emailValid ? (
              <label>Email Address must be include @ after {email}</label>
            ) : (
              <></>
            )}

            <p className={messageError ? "error" : ""}>
              {data?.Contact_ContactForm_Content6?.value}
            </p>
            <textarea
              type="input"
              name="message"
              className={messageError ? "error" : ""}
              onChange={onChange}
              value={message}
              disabled={loading}
            ></textarea>
            {messageError ? (
              <label>
                {data?.Contact_ContactForm_Message?.value}{" "}
                {data?.Contact_ContactForm_Content6?.value}
              </label>
            ) : (
              <></>
            )}

            <div className="footer-form">
              <div className="checkbox-form">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  disabled={loading}
                />
                <a
                  href={data?.Contact_ContactForm_CheckBox?.url}
                  target="_blank"
                >
                  {data?.Contact_ContactForm_CheckBox?.key}
                </a>
                {data?.Contact_ContactForm_CheckBox?.value}
              </div>
              <button className="button-contact">
                {data["Contact_ContactForm_Button"]?.value}
                <svg
                  height="7px"
                  fill="none"
                  strokeWidth="2"
                  stroke="#6C3AF5"
                  strokeDasharray="69px 138px"
                  viewBox="0 0 64 7"
                  style={{ position: "absolute", right: -25 }}
                >
                  <path d="M0 6h61.5l-5.2-5.2"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
