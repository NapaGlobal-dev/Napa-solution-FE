import React from "react";
import { getData } from "../../util/converArrayToObject";
import { dataProtectPersonal } from "../../util/data";

export default function ProtectingPersonalInformation({ data }) {
  const title = getData(data, /PrivacyPolicy_Title/)[0];
  return (
    <div className="cover protect">
      <img className="decor-head-line" src="/img/line-style.svg" />
      <h3 id="down-up">{title?.key}</h3>
      <p id="down-up">{title?.value}</p>
      <div className="wrap-content" id="down-up">
        <div className="p-protect p-protect-first">
          個人情報の取扱いについて
        </div>
        {dataProtectPersonal.map((protect, index) => {
          return (
            <div className="c-content" key={index}>
              <div className="c-content--item">{protect.title}</div>
              {protect.content?.map((content, idx) => {
                return (
                  <>
                    <div
                      className="c-item--desc"
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: content.value,
                      }}
                    ></div>
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
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
