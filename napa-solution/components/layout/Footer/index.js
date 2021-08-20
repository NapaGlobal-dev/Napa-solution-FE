import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import joinJsx from "../../../util/joinJsx";
import Link from "next/link";
import animate from "../../../util/animation";

const Footer = (props) => {
  const data = convertArrToObject(props.data.layout[0].property);
  // const summary = getData(props.data.layout[0].property, /Footer_Summary/);

  useEffect(() => {
    animate();
  }, []);
  // const page_urls = props.data.pages;
  useEffect(() => {
    window.convertArrToObject = convertArrToObject;
    Array.from({ length: 4 }, (num, index) => {
      $(`#btn-up-${index + 1}`).click(() => {
        $(`#ul-item-${index + 1}`).css({
          display: "none",
          transition: "all 0.5s ease",
        });
        $(`#btn-down-${index + 1}`).css("display", "block");
        $(`#btn-up-${index + 1}`).css("display", "none");
      });
      $(`#btn-down-${index + 1}`).click(() => {
        $(`#ul-item-${index + 1}`).css({
          display: "block",
          transition: "all 0.5s ease",
        });
        $(`#btn-down-${index + 1}`).css("display", "none");
        $(`#btn-up-${index + 1}`).css("display", "block");
      });
    });
  }, []);

  const socialLinks = [
    data.Footer_Social_Facebook,
    data.Footer_Social_LinkedIn,
    data.Footer_Social_Twitter,
  ].map((item, index) => (
    <a key={index} href={item?.url} className={styles.colorWhite}>
      {item?.value}
    </a>
  ));
  return (
    <>
      <footer id="sticky-s-footer" className={clsx(styles.footer)}>
        <div className="container-fluid d-flex justify-content-center flex-column ">
          <div className="container-fluid">
            <div
              className={clsx(styles.covergalery)}
              style={{
                backgroundImage: `url(${data.Footer_ContactImage.image.original})`,
              }}
            >
              <div className={clsx(styles.scaleText)} id="down-up">
                <h3 className={clsx(styles.h3text)}>
                  {joinJsx(data.Footer_ContactTitle.value.split("\\n"), <br />)}
                </h3>
                <p className={clsx(styles.ptext)}>
                  {joinJsx(
                    data.Footer_ContactContent.value.split("\\n"),
                    <br />
                  )}
                </p>
                <a href={data.Footer_ContactButton.url}>
                  <div
                    className="col-xs-12 order-3 order-xl-4 no-default-spacing"
                    id="detail-btn-company"
                  >
                    <span id="detail-btn-company-content">
                      {data.Footer_ContactButton.value}
                    </span>
                    <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                      <path d="M0 6h61.5l-5.2-5.2"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={clsx("container-fluid", styles.containX)}>
            <div className={clsx(styles.groupMapIcon)}>
              <div
                className={clsx(
                  "d-flex justify-content-between",
                  styles.groupNapaIcon
                )}
              >
                <h2 className={clsx(styles.h2text)}>
                  解<br />決
                </h2>
                <img
                  src={data.Footer_NapaLogo.image.original}
                  className={clsx(styles.imgNapa)}
                />
              </div>
              <div className="container pl-0">
                <img
                  src={data.Footer_LocatedImg.image.original}
                  className={clsx(styles.imgMap)}
                />
              </div>
            </div>
            <div className={clsx(styles.half)}>
              <div className={clsx(styles.linksAndsocials)}>
                {props.data.groups.map((page, index) => (
                  <div key={index} className={clsx(styles.groupText)}>
                    <h4>
                      {!!page.url ? (
                          <a href={page.url} className={styles.colorWhite}>{page.name}</a>
                      ) : (
                        page.name
                      )}
                      <span id={`btn-down-${index + 1}`}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="sort-down"
                          className="svg-inline--fa fa-sort-down fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                          ></path>
                        </svg>
                      </span>
                      <span
                        id={`btn-up-${index + 1}`}
                        className={clsx(styles.upIcon)}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="sort-up"
                          className="svg-inline--fa fa-sort-up fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
                          ></path>
                        </svg>
                      </span>
                    </h4>
                    <ul id={`ul-item-${index + 1}`}>
                      {page.childrenPage.map((childPage, key) => (
                        <li key={key}>
                            <a href={childPage.url} className={clsx(styles.liText)} key={key}>
                              {childPage.name}
                            </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className={clsx(styles.socials)}>
                  {joinJsx(socialLinks, <br />)}
                </div>
                <div className={clsx(styles.socialsIcon)}>
                  <a href={data.Footer_Social_LinkedIn?.url}>
                    <svg
                      width="40px"
                      color="white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin"
                      className="svg-inline--fa fa-linkedin fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      ></path>
                    </svg>
                  </a>
                  <a href={data.Footer_Social_Facebook?.url}>
                    <svg
                      width="40px"
                      color="white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-square"
                      className="svg-inline--fa fa-facebook-square fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                      ></path>
                    </svg>
                  </a>
                  <a href={data.Footer_Social_Twitter?.url}>
                    <svg
                      width="40px"
                      color="white"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter-square"
                      className="svg-inline--fa fa-twitter-square fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className={clsx(styles.coverform)}>
                <div
                  // style={{
                  //   width: 419,
                  //   height: 160,
                  //   color: "#FFF",
                  //   border: "2px solid #412490",
                  //   padding: 30,
                  //   transform: "translateX(-20px)",
                  // }}
                  className={clsx(styles.formstyle1)}
                >
                  <div className="d-flex">
                    <div className={clsx(styles.iconcover)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.5"
                        height="20.057"
                        viewBox="0 0 22.5 20.057"
                      >
                        <g id="home" transform="translate(0.001 -27.797)">
                          <g
                            id="Group_81"
                            data-name="Group 81"
                            transform="translate(-0.001 27.798)"
                          >
                            <g
                              id="Group_80"
                              data-name="Group 80"
                              transform="translate(0 0)"
                            >
                              <path
                                id="Path_843"
                                data-name="Path 843"
                                d="M22.26,35.719,11.595,27.91a.584.584,0,0,0-.691,0L.239,35.719a.585.585,0,1,0,.691.943l10.32-7.556,10.32,7.556a.585.585,0,0,0,.691-.943Z"
                                transform="translate(0.001 -27.798)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_83"
                            data-name="Group 83"
                            transform="translate(2.48 36.795)"
                          >
                            <g id="Group_82" data-name="Group 82">
                              <path
                                id="Path_844"
                                data-name="Path 844"
                                d="M73.406,232.543a.585.585,0,0,0-.585.585v9.305H68.144v-5.079a2.923,2.923,0,0,0-5.846,0v5.079H57.621v-9.305a.585.585,0,1,0-1.169,0v9.89a.585.585,0,0,0,.585.585h5.846a.584.584,0,0,0,.582-.539.44.44,0,0,0,0-.046v-5.664a1.754,1.754,0,1,1,3.508,0v5.664a.429.429,0,0,0,0,.045.584.584,0,0,0,.582.54h5.846a.585.585,0,0,0,.585-.585v-9.89A.585.585,0,0,0,73.406,232.543Z"
                                transform="translate(-56.452 -232.543)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className={clsx(styles.contentp)}>
                      {data.Footer_Address_JP.value}
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className={clsx(styles.iconcover)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21.996"
                        viewBox="0 0 22 21.996"
                      >
                        <g id="phone-call" transform="translate(0 -0.003)">
                          <g
                            id="Group_16"
                            data-name="Group 16"
                            transform="translate(0 0.003)"
                          >
                            <path
                              id="Path_1"
                              data-name="Path 1"
                              d="M17.678,22a9.454,9.454,0,0,1-3.235-.687A24.284,24.284,0,0,1,6.279,15.72,24.282,24.282,0,0,1,.688,7.555C-.227,5.132-.229,3.143.681,2.233c.132-.132.266-.272.4-.417C1.915.943,2.876-.049,4.1.005A3.613,3.613,0,0,1,6.639,1.631c2.512,3.126,1.38,4.24.069,5.532l-.232.229c-.215.215-.621,1.207,3.152,4.979a20.994,20.994,0,0,0,3.12,2.678c.529.343,1.473.861,1.86.474l.233-.235c1.29-1.31,2.4-2.439,5.53.073A3.606,3.606,0,0,1,22,17.9c.051,1.244-.94,2.186-1.815,3.016-.144.137-.284.269-.414.4A2.887,2.887,0,0,1,17.678,22ZM4.009.742c-.883,0-1.682.84-2.389,1.583-.143.149-.281.3-.417.431C.526,3.433.6,5.215,1.38,7.294A23.545,23.545,0,0,0,6.8,15.2a23.545,23.545,0,0,0,7.9,5.422c2.08.785,3.861.853,4.539.175.135-.135.28-.272.428-.413.761-.723,1.622-1.541,1.585-2.45a2.99,2.99,0,0,0-1.351-1.994c-2.6-2.092-3.331-1.352-4.539-.13l-.237.239c-.575.578-1.512.451-2.786-.377A21.692,21.692,0,0,1,9.1,12.894h0c-3.13-3.13-4.132-5.045-3.152-6.026l.236-.234C7.415,5.427,8.154,4.7,6.061,2.094A3,3,0,0,0,4.067.744Z"
                              transform="translate(0 -0.003)"
                              fill="#fff"
                            />
                          </g>
                          <g
                            id="Group_17"
                            data-name="Group 17"
                            transform="translate(10.024 0.008)"
                          >
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M22.908,11.013a.415.415,0,0,1-.384-.57,3.485,3.485,0,0,0-4.665-4.485.414.414,0,1,1-.342-.754,4.313,4.313,0,0,1,5.774,5.551A.416.416,0,0,1,22.908,11.013Z"
                              transform="translate(-15.628 -0.833)"
                              fill="#fff"
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M26.269,11.692a.415.415,0,0,1-.384-.57A7.479,7.479,0,0,0,15.874,1.5a.415.415,0,0,1-.342-.757,8.308,8.308,0,0,1,11.12,10.694A.414.414,0,0,1,26.269,11.692Z"
                              transform="translate(-15.289 -0.009)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className={clsx(styles.contentp)}>
                      {data.Footer_Phone.value}
                    </p>
                  </div>
                  <div className={clsx(styles.coverInput)}>
                    <div className="d-flex w-100">
                      <div className={clsx(styles.iconcover)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="15.4"
                          viewBox="0 0 22 15.4"
                        >
                          <g
                            id="email"
                            transform="translate(0 -76.8)"
                            opacity="0.995"
                          >
                            <g
                              id="Group_19"
                              data-name="Group 19"
                              transform="translate(0 76.8)"
                            >
                              <g
                                id="Group_18"
                                data-name="Group 18"
                                transform="translate(0 0)"
                              >
                                <path
                                  id="Path_4"
                                  data-name="Path 4"
                                  d="M.138,79.14l9.524,8.374A2.28,2.28,0,0,0,11,88.133a2.336,2.336,0,0,0,1.345-.595l9.518-8.4A.421.421,0,0,0,22,78.824,1.938,1.938,0,0,0,20.167,76.8H1.833A1.938,1.938,0,0,0,0,78.824.422.422,0,0,0,.138,79.14Zm1.7-1.531H20.167a1.142,1.142,0,0,1,1.088,1.031l-9.369,8.268a1.661,1.661,0,0,1-.885.416,1.609,1.609,0,0,1-.872-.435L.746,78.64A1.142,1.142,0,0,1,1.833,77.61Z"
                                  transform="translate(0 -76.8)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_5"
                                  data-name="Path 5"
                                  d="M39.957,273.153l-5.667,4.452a.4.4,0,1,0,.5.636l5.667-4.452a.4.4,0,1,0-.5-.636Z"
                                  transform="translate(-32.517 -265.357)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_6"
                                  data-name="Path 6"
                                  d="M341.99,273.156a.4.4,0,1,0-.5.636l5.667,4.452a.4.4,0,1,0,.5-.636Z"
                                  transform="translate(-327.43 -265.359)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_7"
                                  data-name="Path 7"
                                  d="M21.633,153.6a.362.362,0,0,0-.367.356v9.619a1.086,1.086,0,0,1-1.1,1.069H1.833a1.086,1.086,0,0,1-1.1-1.069v-9.619a.362.362,0,0,0-.367-.356.362.362,0,0,0-.367.356v9.619a1.81,1.81,0,0,0,1.833,1.781H20.167A1.81,1.81,0,0,0,22,163.576v-9.619A.362.362,0,0,0,21.633,153.6Z"
                                  transform="translate(0 -149.957)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className={clsx(styles.contentp, styles.contentlast)}>
                        {data.Footer_Email.value}
                      </p>
                    </div>
                    {/* <div> */}
                    <button className={clsx(styles.inputform)}>
                      <a href={data.Footer_MapBtn_JP.url} target="_blank">
                        {data.Footer_MapBtn_JP.value}
                      </a>
                    </button>
                    {/* <input
                      type="button"
                      value={data.Footer_MapBtn.value}
                      className={clsx(styles.inputform)}
                    /> */}
                    {/* </div> */}
                  </div>
                </div>
                <div className={clsx(styles.formstyle2)}>
                  <div className="d-flex">
                    <div className={clsx(styles.iconcover)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22.5"
                        height="20.057"
                        viewBox="0 0 22.5 20.057"
                      >
                        <g id="home" transform="translate(0.001 -27.797)">
                          <g
                            id="Group_81"
                            data-name="Group 81"
                            transform="translate(-0.001 27.798)"
                          >
                            <g
                              id="Group_80"
                              data-name="Group 80"
                              transform="translate(0 0)"
                            >
                              <path
                                id="Path_843"
                                data-name="Path 843"
                                d="M22.26,35.719,11.595,27.91a.584.584,0,0,0-.691,0L.239,35.719a.585.585,0,1,0,.691.943l10.32-7.556,10.32,7.556a.585.585,0,0,0,.691-.943Z"
                                transform="translate(0.001 -27.798)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_83"
                            data-name="Group 83"
                            transform="translate(2.48 36.795)"
                          >
                            <g id="Group_82" data-name="Group 82">
                              <path
                                id="Path_844"
                                data-name="Path 844"
                                d="M73.406,232.543a.585.585,0,0,0-.585.585v9.305H68.144v-5.079a2.923,2.923,0,0,0-5.846,0v5.079H57.621v-9.305a.585.585,0,1,0-1.169,0v9.89a.585.585,0,0,0,.585.585h5.846a.584.584,0,0,0,.582-.539.44.44,0,0,0,0-.046v-5.664a1.754,1.754,0,1,1,3.508,0v5.664a.429.429,0,0,0,0,.045.584.584,0,0,0,.582.54h5.846a.585.585,0,0,0,.585-.585v-9.89A.585.585,0,0,0,73.406,232.543Z"
                                transform="translate(-56.452 -232.543)"
                                fill="#fff"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className={clsx(styles.contentp)}>
                      {data.Footer_Address_EN.value}
                    </p>
                  </div>
                  <div className="d-flex">
                    <div className={clsx(styles.iconcover)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21.996"
                        viewBox="0 0 22 21.996"
                      >
                        <g id="phone-call" transform="translate(0 -0.003)">
                          <g
                            id="Group_16"
                            data-name="Group 16"
                            transform="translate(0 0.003)"
                          >
                            <path
                              id="Path_1"
                              data-name="Path 1"
                              d="M17.678,22a9.454,9.454,0,0,1-3.235-.687A24.284,24.284,0,0,1,6.279,15.72,24.282,24.282,0,0,1,.688,7.555C-.227,5.132-.229,3.143.681,2.233c.132-.132.266-.272.4-.417C1.915.943,2.876-.049,4.1.005A3.613,3.613,0,0,1,6.639,1.631c2.512,3.126,1.38,4.24.069,5.532l-.232.229c-.215.215-.621,1.207,3.152,4.979a20.994,20.994,0,0,0,3.12,2.678c.529.343,1.473.861,1.86.474l.233-.235c1.29-1.31,2.4-2.439,5.53.073A3.606,3.606,0,0,1,22,17.9c.051,1.244-.94,2.186-1.815,3.016-.144.137-.284.269-.414.4A2.887,2.887,0,0,1,17.678,22ZM4.009.742c-.883,0-1.682.84-2.389,1.583-.143.149-.281.3-.417.431C.526,3.433.6,5.215,1.38,7.294A23.545,23.545,0,0,0,6.8,15.2a23.545,23.545,0,0,0,7.9,5.422c2.08.785,3.861.853,4.539.175.135-.135.28-.272.428-.413.761-.723,1.622-1.541,1.585-2.45a2.99,2.99,0,0,0-1.351-1.994c-2.6-2.092-3.331-1.352-4.539-.13l-.237.239c-.575.578-1.512.451-2.786-.377A21.692,21.692,0,0,1,9.1,12.894h0c-3.13-3.13-4.132-5.045-3.152-6.026l.236-.234C7.415,5.427,8.154,4.7,6.061,2.094A3,3,0,0,0,4.067.744Z"
                              transform="translate(0 -0.003)"
                              fill="#fff"
                            />
                          </g>
                          <g
                            id="Group_17"
                            data-name="Group 17"
                            transform="translate(10.024 0.008)"
                          >
                            <path
                              id="Path_2"
                              data-name="Path 2"
                              d="M22.908,11.013a.415.415,0,0,1-.384-.57,3.485,3.485,0,0,0-4.665-4.485.414.414,0,1,1-.342-.754,4.313,4.313,0,0,1,5.774,5.551A.416.416,0,0,1,22.908,11.013Z"
                              transform="translate(-15.628 -0.833)"
                              fill="#fff"
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M26.269,11.692a.415.415,0,0,1-.384-.57A7.479,7.479,0,0,0,15.874,1.5a.415.415,0,0,1-.342-.757,8.308,8.308,0,0,1,11.12,10.694A.414.414,0,0,1,26.269,11.692Z"
                              transform="translate(-15.289 -0.009)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p className={clsx(styles.contentp)}>
                      {data.Footer_Phone.value}
                    </p>
                  </div>
                  <div className={clsx(styles.coverInput)}>
                    <div className="d-flex w-100">
                      <div className={clsx(styles.iconcover)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="15.4"
                          viewBox="0 0 22 15.4"
                        >
                          <g
                            id="email"
                            transform="translate(0 -76.8)"
                            opacity="0.995"
                          >
                            <g
                              id="Group_19"
                              data-name="Group 19"
                              transform="translate(0 76.8)"
                            >
                              <g
                                id="Group_18"
                                data-name="Group 18"
                                transform="translate(0 0)"
                              >
                                <path
                                  id="Path_4"
                                  data-name="Path 4"
                                  d="M.138,79.14l9.524,8.374A2.28,2.28,0,0,0,11,88.133a2.336,2.336,0,0,0,1.345-.595l9.518-8.4A.421.421,0,0,0,22,78.824,1.938,1.938,0,0,0,20.167,76.8H1.833A1.938,1.938,0,0,0,0,78.824.422.422,0,0,0,.138,79.14Zm1.7-1.531H20.167a1.142,1.142,0,0,1,1.088,1.031l-9.369,8.268a1.661,1.661,0,0,1-.885.416,1.609,1.609,0,0,1-.872-.435L.746,78.64A1.142,1.142,0,0,1,1.833,77.61Z"
                                  transform="translate(0 -76.8)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_5"
                                  data-name="Path 5"
                                  d="M39.957,273.153l-5.667,4.452a.4.4,0,1,0,.5.636l5.667-4.452a.4.4,0,1,0-.5-.636Z"
                                  transform="translate(-32.517 -265.357)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_6"
                                  data-name="Path 6"
                                  d="M341.99,273.156a.4.4,0,1,0-.5.636l5.667,4.452a.4.4,0,1,0,.5-.636Z"
                                  transform="translate(-327.43 -265.359)"
                                  fill="#fff"
                                />
                                <path
                                  id="Path_7"
                                  data-name="Path 7"
                                  d="M21.633,153.6a.362.362,0,0,0-.367.356v9.619a1.086,1.086,0,0,1-1.1,1.069H1.833a1.086,1.086,0,0,1-1.1-1.069v-9.619a.362.362,0,0,0-.367-.356.362.362,0,0,0-.367.356v9.619a1.81,1.81,0,0,0,1.833,1.781H20.167A1.81,1.81,0,0,0,22,163.576v-9.619A.362.362,0,0,0,21.633,153.6Z"
                                  transform="translate(0 -149.957)"
                                  fill="#fff"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p
                          className={clsx(styles.contentp, styles.contentlast)}
                        >
                          {data.Footer_Email.value}
                        </p>
                      </div>
                    </div>
                    {/* <div> */}
                    {/* <input
                      type="button"
                      value={data.Footer_MapBtn.value}
                      className={clsx(styles.inputform)}
                    /> */}
                    <button className={clsx(styles.inputform)}>
                      <a href={data.Footer_MapBtn_EN.url} target="_blank">
                        {data.Footer_MapBtn_EN.value}
                      </a>
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ height: 40, paddingBottom: 64 }}
          >
            <p className="txt-bottom-footer">{data.Footer_Publish.value}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
