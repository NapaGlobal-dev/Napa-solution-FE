import { convertArrToObject } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import clsx from "clsx";
const Footer = (props) => {
  // console.log("footer data", props.data);

  // const data = convertArrToObject(props.data.layout[0].property);
  // const page_urls = props.data.pages;
  return (
    <>
      <footer id="sticky-s-footer" className={clsx(styles.footer)}>
        <div className="container-fluid d-flex justify-content-center flex-column ">
          <div className="container-fluid">
            <div className={clsx(styles.covergalery)}>
            <div
              style={{
                height: 500,
                position: "absolute",
                zIndex: 1,

                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
              className={clsx(styles.scaleText)}
            >
              <h3 className={clsx(styles.h3text)}>
                ベトナムオフショア開発を始めたい」「自社のアイデアを製品化したい」
                「人材不足を解決したい」「ベトナムへ進出したい」
              </h3>
              <p className={clsx(styles.ptext)}>
                そんな想いを持って共に歩みたいという企業様、是非お問い合わせください。
                また、業務等のご相談・ご依頼、採用に関するご相談もお待ちしております。
              </p>
              <a href="company.html">
                <div
                  className="col-xs-12 order-3 order-xl-4 no-default-spacing"
                  id="detail-btn-company"
                  style={{ width: 227, marginLeft: 0, height: 66 }}
                >
                  <span id="detail-btn-company-content">お問い合わせ</span>
                  <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                    <path d="M0 6h61.5l-5.2-5.2"></path>
                  </svg>
                </div>
              </a>
            </div>
            
            </div>
          </div>
          <div
            // className="container-fluid" // d-flex justify-content-between"
            className={clsx(
              "container-fluid",
              // { transform: "translateY(-52px)", padding: "0 85px" },
              styles.containX
            )}
            // className={clsx(styles.containX)}
          >
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
                  src="./img/home/logo_napa_white.svg"
                  className={clsx(styles.imgNapa)}
                />
              </div>
              <div className="container pl-0">
                <img
                  src="./img/home/world-map-4.svg"
                  className={clsx(styles.imgMap)}
                  // style={{ width: 600, height: "auto", marginTop: "67px" }}
                />
              </div>
            </div>
            <div className={clsx(styles.half)}>
              <div className="d-flex justify-content-between">
                {Array.from({ length: 4 }, (num, index) => (
                  <div key={index} className={clsx(styles.groupText)}>
                    <h4>事業概要 {num}</h4>
                    <ul>
                      <li>
                        <p className={clsx(styles.liText)}>運転管理</p>
                      </li>
                      <li>
                        <p className={clsx(styles.liText)}>運転管理</p>
                      </li>
                      <li>
                        <p className={clsx(styles.liText)}>運転管理</p>
                      </li>
                    </ul>
                  </div>
                ))}
                <div className={clsx(styles.socials)}>
                  <p>FACEBOOK</p>
                  <p>LINKEDIN</p>
                  <p>TWITTER</p>
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
                      〒103-0023 東京都中央区日本橋本町4-8-15 ネオカワイビル 6F
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
                    <p className={clsx(styles.contentp)}>03-4530-0001</p>
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
                        contact@napaglobal.com
                      </p>
                    </div>
                    {/* <div> */}
                    <input
                      type="button"
                      value="MAP"
                      className={clsx(styles.inputform)}
                    />
                    {/* </div> */}
                  </div>
                </div>
                <div
                  // style={{
                  //   width: 419,
                  //   height: 160,
                  //   color: "#FFF",
                  //   border: "2px solid #412490",
                  //   padding: 30,
                  // }}
                  className={clsx(styles.formstyle2)}
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
                      〒103-0023 東京都中央区日本橋本町4-8-15 ネオカワイビル 6F
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
                    <p className={clsx(styles.contentp)}>03-4530-0001</p>
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
                          contact@napaglobal.com
                        </p>
                      </div>
                    </div>
                    {/* <div> */}
                    <input
                      type="button"
                      value="MAP"
                      className={clsx(styles.inputform)}
                    />
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
            <p
              style={{
                color: "var(--unnamed-color-ffffff)",
                font: "normal normal normal 16px/25px Roboto",
                letterSpacing: 0.48,
                color: "#FFFFFF",
              }}
            >
              © 2021 NAPA Global. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
