import { useMutation } from "@apollo/client";
import { useState, Fragment, useEffect, useRef } from "react";
import { ADD_CUSTOMER } from "../../query/general";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";
import SimpleLoader from "../layout/SimpleLoader";
import { CREATE_CONTACT } from "../../query/mutation";
import usedarkmode from "use-dark-mode";
import clsx from "clsx";

const ContactForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyAddressError, setCompanyAddressError] = useState(false);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const data = convertArrToObject(props.data.property);
  const [darkMode, setDarkmode] = useState(false);
  const isDarkMode = usedarkmode();
  const skipFirst = useRef(false);

  useEffect(() => {
    const enableDarkMode = localStorage?.getItem("darkMode");
    enableDarkMode === "true" ? setDarkmode(true) : setDarkmode(false);
  });

  useEffect(() => {
    tinymce.init({
      selector: "textarea",
      menubar: false,
      statusbar: false,
      height: 300,
      // plugins: [
      //   "advlist autolink lists link image charmap print preview anchor",
      //   "searchreplace visualblocks code fullscreen",
      //   "insertdatetime media table contextmenu paste",
      // ],
      entity_encoding: "raw",
      forced_root_block: "",
      content_css: "css/content.css",
      body_class: !!isDarkMode.value ? "body-editor-dark" : "",
      fontsize_formats:
        "8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
      toolbar:
        "insertfile undo redo | bold italic forecolor backcolor fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | link image",
      max_chars: 1000,
      setup: function (ed) {
        ed.on("keydown", function (e) {
          debugger;
          const maxChars = parseInt(ed.getParam("max_chars"));
          const content = ed.getContent({ format: "text" });
          if (content.length > maxChars) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        });
        ed.on("keyup", (e) => {
          const content = ed.getContent({ format: "text" });
          if (content.length === 0) setMessageError(true);
          else setMessageError(false);
        });
      },
    });
  }, []);

  useEffect(() => {
    setCommentColor();
  }, [setCommentColor]);

  useEffect(() => {
    if (skipFirst.current) {
      if ((phone1 + phone2 + phone3).length < 10) setPhoneInvalid(true);
      else setPhoneInvalid(false);
    } else skipFirst.current = true;
  }, [phone1, phone2, phone3]);

  function setCommentColor() {
    let bgColor = "";
    let color = "";
    if (darkMode) {
      bgColor = "#230b4c";
      color = "#fff";
    } else {
      bgColor = "#fff";
      color = "#000";
    }
    if (tinymce.activeEditor.contentDocument) {
      tinymce.activeEditor.contentDocument.body.style.background = bgColor;
      tinymce.activeEditor.contentDocument.body.style.color = color;
    }
  }

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }

  const [createContact, { data: contactData, loading, error }] = useMutation(
    CREATE_CONTACT,
    {
      onCompleted: resetForm,
    }
  );

  function resetForm() {
    setEmail("");
    setMessage("");
    setPhone1("");
    setPhone2("");
    skipFirst.current = false;
    setPhone3("");
    setCompanyName("");
    setCompanyAddress("");
    setFullName("");
    setRole("");
    setIsChecked(true);
    setChecked(false);
    demoAsyncCall().then(() => setSubmitting(false));
    tinymce.activeEditor.setContent("");
    setPhoneError(false);
    setPhoneInvalid(false);
  }

  function submit(e) {
    const message = tinymce.editors["textareamessage"].getContent().trim();
    const phone =
      (phone1 + phone2 + phone3).length === 11 ||
      (phone1 + phone2 + phone3).length === 10;
    if (fullName.trim() === "") setFullNameError(true);
    if (role.trim() === "") setRoleError(true);
    if (companyName.trim() === "") setCompanyNameError(true);
    if (companyAddress.trim() === "") setCompanyAddressError(true);
    if (!phone) setPhoneError(true);
    if (email.trim() === "") setEmailError(true);
    if (message.trim() === "") setMessageError(true);
    if (
      fullName.trim() === "" ||
      role.trim() === "" ||
      companyAddress.trim() === "" ||
      companyName.trim() === "" ||
      phoneError ||
      message.trim() === "" ||
      email.trim() === "" ||
      !emailValid
    ) {
      if (!checked) {
        setIsChecked(false);
        e.preventDefault();
        return;
      }
      e.preventDefault();
      return;
    }

    const variables = {
      name: fullName,
      role: role,
      email: email,
      phone: phone1 + phone2 + phone3,
      company: companyName,
      address: companyAddress,
      message: message,
    };

    createContact({
      variables: variables,
    });
    setSubmitting(true);
    tinyMCE.activeEditor.setContent("");
    e.preventDefault();
  }
  const checkPhone = (e, num, pos) => {
    if (/^[0-9]+$/.test(e.target.value) && e.target.value.length < num - 1) {
      pos == 1
        ? setPhone1(e.target.value)
        : pos == 2
        ? setPhone2(e.target.value)
        : setPhone3(e.target.value);

      setPhoneError(true);
      return;
    }
    if (
      (/^[0-9]+$/.test(e.target.value) && e.target.value.length == num) ||
      e.target.value.length == num - 1
    ) {
      pos == 1
        ? setPhone1(e.target.value)
        : pos == 2
        ? setPhone2(e.target.value)
        : setPhone3(e.target.value);
      setPhoneError(false);
      return;
    }
    if (/^[0-9]+$/.test(e.target.value) && e.target.value.length > num) {
      setPhoneError(false);
      return;
    }
    pos == 1
      ? setPhone1(e.target.value)
      : pos == 2
      ? setPhone2(e.target.value)
      : setPhone3(e.target.value);
    setPhoneError(true);
    return;
  };

  function onChange(e) {
    e.preventDefault();

    const unexpectedCharacters =
      /[^\w\sぁ-ゔゞァ-・ヽヾ゛゜ー一-龯~`!@#$%^&*()_+{}|\[\]\\:";'<?>,.\/ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/g;
    const spaces = /\s+/g;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const value = e.target.value
      .replace(spaces, " ")
      .replace(unexpectedCharacters, "");
    const isEmpty = value == "";

    switch (e.target.name) {
      case "fullName": {
        if (isEmpty) setFullNameError(true);
        else setFullNameError(false);
        setFullName(value.slice(0, 30));
        break;
      }
      case "role": {
        if (isEmpty) setRoleError(true);
        else setRoleError(false);
        setRole(value.slice(0, 30));
        break;
      }
      case "companyName": {
        if (isEmpty) setCompanyNameError(true);
        else setCompanyNameError(false);
        setCompanyName(value.slice(0, 30));
        break;
      }
      case "companyAddress": {
        if (isEmpty) setCompanyAddressError(true);
        else setCompanyAddressError(false);
        setCompanyAddress(value.slice(0, 100));
        break;
      }
      case "phone1": {
        checkPhone(e, 3, 1);
        // setPhone1(e.target.value);
        break;
      }
      case "phone2": {
        checkPhone(e, 4, 2);
        // setPhone2(e.target.value);
        break;
      }
      case "phone3": {
        checkPhone(e, 4, 3);
        // setPhone3(e.target.value);
        break;
      }
      case "email": {
        if (isEmpty) setEmailError(true);
        else {
          setEmailError(false);
          if (emailRegex.test(value)) {
            setEmailValid(true);
          } else {
            setEmailValid(false);
          }
        }

        setEmail(value.slice(0, 50));
        break;
      }
    }
  }

  function handlePrivacyChange() {
    setIsChecked(!checked);
    setChecked(!checked);
  }

  if (error)
    alert(
      "An error occur when trying send your message, plase try again later"
    );

  // console.log("Message--------\n", message);
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
          <form onSubmit={submit} autoComplete="off">
            <p>
              {data?.Contact_ContactForm_Content1?.value}
              <span className="it-is-important"> *</span>
            </p>
            <input
              type="input"
              name="fullName"
              className={clsx(
                fullNameError ? "error" : "",
                darkMode ? "auto-fill-darkmode" : ""
              )}
              onChange={onChange}
              onBlur={onChange}
              value={fullName}
              disabled={loading}
            />

            <p>
              {data?.Contact_ContactForm_Content7?.value}
              <span className="it-is-important"> *</span>
            </p>
            <input
              type="input"
              name="role"
              className={clsx(
                roleError ? "error" : "",
                darkMode ? "auto-fill-darkmode" : ""
              )}
              onChange={onChange}
              onBlur={onChange}
              value={role}
              disabled={loading}
            />

            <p>
              {data?.Contact_ContactForm_Content2?.value}
              <span className="it-is-important"> *</span>
            </p>
            <input
              type="input"
              name="companyName"
              className={clsx(
                companyNameError ? "error" : "",
                darkMode ? "auto-fill-darkmode" : ""
              )}
              onChange={onChange}
              onBlur={onChange}
              value={companyName}
              disabled={loading}
            />

            <p>
              {data?.Contact_ContactForm_Content3?.value}
              <span className="it-is-important"> *</span>
            </p>
            <input
              type="input"
              name="companyAddress"
              className={clsx(
                companyAddressError ? "error" : "",
                darkMode ? "auto-fill-darkmode" : ""
              )}
              onChange={onChange}
              onBlur={onChange}
              value={companyAddress}
              disabled={loading}
            />

            <p>
              {data?.Contact_ContactForm_Content4?.value}
              <span className="it-is-important"> *</span>
            </p>
            <div className="phone-contact">
              <input
                type="input"
                name="phone1"
                className={clsx(
                  phoneError || phoneInvalid ? "error" : "",
                  darkMode ? "auto-fill-darkmode" : ""
                )}
                placeholder="090"
                onChange={onChange}
                onBlur={onChange}
                value={phone1}
                disabled={loading}
              />
              -
              <input
                type="input"
                name="phone2"
                className={clsx(
                  phoneError || phoneInvalid ? "error" : "",
                  darkMode ? "auto-fill-darkmode" : ""
                )}
                placeholder="0000"
                onChange={onChange}
                onBlur={onChange}
                value={phone2}
                disabled={loading}
              />
              -
              <input
                type="input"
                name="phone3"
                className={clsx(
                  phoneError || phoneInvalid ? "error" : "",
                  darkMode ? "auto-fill-darkmode" : ""
                )}
                placeholder="0000"
                onChange={onChange}
                onBlur={onChange}
                value={phone3}
                disabled={loading}
              />
            </div>
            {phoneError || phoneInvalid ? (
              <label>電話番号は10文字または11文字である必要があります</label>
            ) : (
              ""
            )}

            <p>
              {data?.Contact_ContactForm_Content5?.value}
              <span className="it-is-important"> *</span>
            </p>
            <input
              type="input"
              name="email"
              placeholder="example@email.com"
              className={clsx(
                emailError || !emailValid ? "error" : "",
                darkMode ? "auto-fill-darkmode" : ""
              )}
              onChange={onChange}
              onBlur={onChange}
              value={email}
              disabled={loading}
            />
            {!emailValid ? (
              <label>
                メールアドレスには、{email}{" "}
                の後に@を含めるか、@の後にxxx.comを使用するか、スペースを入れないでください
              </label>
            ) : (
              <></>
            )}

            <p className="far-from-textarea">
              {data?.Contact_ContactForm_Content6?.value}
              <span className="it-is-important"> *</span>
            </p>
            <textarea
              type="input"
              name="message"
              id="textareamessage"
              className={clsx(
                messageError ? "textarea-error" : "",
                darkMode ? "auto-fill-darkmode?.value" : ""
              )}
              value={message}
            ></textarea>

            <div className="footer-form">
              <div className="checkbox-form">
                <div className="checkbox-private">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={checked}
                    onChange={handlePrivacyChange}
                    className={!checked ? "error" : ""}
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
                {!isChecked ? (
                  <label>
                    送信する前にプライベートポリシーに同意してください{" "}
                  </label>
                ) : (
                  <></>
                )}
                {!loading && submitting ? (
                  <label className="success">投稿完了</label>
                ) : (
                  <></>
                )}
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
        {loading && <SimpleLoader />}
      </div>
    </>
  );
};

export default ContactForm;
