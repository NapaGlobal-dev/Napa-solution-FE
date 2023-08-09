import { getData } from "../../util/converArrayToObject";

// get Data
import {
  dataPolicyContent,
  dataPolicyContact,
  dataPolicyInfo,
} from "../../util/data";

export default function PrivacyPolicy({ data }) {
  const title = getData(data, /PrivacyPolicy_Title/)[0];
  const policyContent = getData(data, /PrivacyPolicy_Content/)[0];
  const contact = getData(data, /PrivacyPolicy_Contact/)[0];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="cover policy">
      <img className="decor-head-line" src="/img/line-style.svg" />
      <h3 id="down-up">{title?.key}</h3>
      <p id="down-up">{title?.value}</p>
      <div className="wrap-content" id="down-up">
        {/* <div className='policy-content'>{policyContent?.value}</div>
                    {policyContent?.content.map((policy,index)=>
                        <div className='p-subcontent' key={index}>{alphabet[index]+') '+policy?.value}</div>
                    )} */}
        <div className="p-contact p-contact-first">個人情報保護方針</div>
        <div className="p-subcontent">{dataPolicyContent.value}</div>
        {dataPolicyContent?.content.map((content, index) => (
          <div className="c-content--item" key={index}>
            {index + 1 + ". " + content?.value}
          </div>
        ))}
        <div className="sign">
            <p className="sign-date">制定日：2023年　6月1日</p>
            <p>ナパソリューションズ株式会社</p>
            <p>代表取締役　NGUYEN THI MAI HUONG</p>
        </div>
        <div className="info">
          {dataPolicyContent?.info.map((info, index) => (
            <div
              className="c-content--item"
              key={index}
              dangerouslySetInnerHTML={{
                __html: info?.value,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="wrap-content" id="down-up">
        {/* <div className='p-contact'>{contact?.value}</div>
                    {contact?.content.map((c,index)=>
                        <div className='c-content' key={index}>{c?.value}</div>
                    )} */}
        <div className="p-contact">個人情報の取扱いについて</div>
        {dataPolicyContact.map((contact, index) => (
          <div className="c-content" key={index}>
            <div className="c-content--item">{contact.title}</div>
            {contact?.content.map((content, idx) => (
              <div className="c-content--item" key={idx}>
                {content.value}
              </div>
            ))}
          </div>
        ))}
        {dataPolicyInfo.map((info, index) => (
          <div className="c-content" key={index}>
            <div className="c-content--item c-content-bold">
              {index + 1 + ". " + info.title}
            </div>
            {info.content?.map((content, idx) => (
              <div key={idx} className="c-content--item">
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.value,
                  }}
                  className="item-desc"
                ></div>
                {content.form && (
                  <div className="policy-form">
                    <p className="left form-item">{content.form.title}</p>
                    <ul className="right">
                      {content.form.value.map((form, i) => {
                        return (
                          <li className="form-item" key={i}>
                            {form}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {content.box && (
                  <div className="box">
                    {content.box.map((box, i) => {
                      return (
                        <div className="box-item" key={i}>
                          <p className="box-title">{box.title}</p>
                          <span
                            className="box-desc"
                            dangerouslySetInnerHTML={{
                              __html: box.description,
                            }}
                          ></span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {content.infoCustomer?.map((sub, i) => {
                  return (
                    <ul className="c-content--item" key={i}>
                      <li className="item-title">{sub.title}</li>
                      {sub.description.map((desc) => (
                        <p className="item-desc" key={desc}>
                          {desc}
                        </p>
                      ))}
                    </ul>
                  );
                })}
                {content.controlMeasure?.map((mesasure, i) => {
                  return (
                    <div className="c-content--item" key={i}>
                      <p className="item-desc">
                        {i + 1 + ") " + mesasure.title}
                      </p>
                      <p className="item-subDesc">{mesasure.description}</p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
