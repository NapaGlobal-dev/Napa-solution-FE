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
                >
                  <span id="detail-btn-company-content">お問い合わせ</span>
                  <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                    <path d="M0 6h61.5l-5.2-5.2"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                // padding: "0 100px",
                transform: "translateY(-130px)",
              }}
            >
              <img
                src="./img/home/bild.galerie.jpg"
                style={{ width: "100%", maxWidth: 1720, height: 500 }}
              />
            </div>
          </div>
          <div
            className="container-fluid" // d-flex justify-content-between"
            className={clsx(
              // { transform: "translateY(-52px)", padding: "0 85px" },
              styles.containX
            )}
            // className={clsx(styles.containX)}
          >
            <div style={{ width: 522 }}>
              <div className="d-flex justify-content-between">
                <h2 className={clsx(styles.h2text)}>
                  解<br />決
                </h2>
                <img
                  src="./img/home/logo_napa_white.svg"
                  style={{ width: 459, height: "auto" }}
                />
              </div>
              <img
                src="./img/home/world-map-4.svg"
                style={{ width: 500, height: "auto", marginTop: "55px" }}
              />
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
                  <p>LINKIN</p>
                  <p>TWITTER</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 70,
                }}
              >
                <div
                  style={{
                    width: 419,
                    height: 160,
                    color: "#FFF",
                    border: "2px solid #412490",
                    padding: 30,
                    transform: "translateX(-20px)",
                  }}
                >
                  <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="building"
                        class="svg-inline--fa fa-building fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
                        ></path>
                      </svg>
                    </div>
                    <p style={{ margin: "0 0 0 10px" }}>
                      〒103-0023 東京都中央区日本橋本町4-8-15 ネオカワイビル 6F
                    </p>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-square-alt"
                        class="svg-inline--fa fa-phone-square-alt fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"
                        ></path>
                      </svg>
                    </div>
                    <p style={{ margin: "0 0 0 10px" }}>03-4530-0001</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div style={{ width: 20, height: 20 }}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="envelope"
                          class="svg-inline--fa fa-envelope fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                          ></path>
                        </svg>
                      </div>
                      <p style={{ margin: "0 0 0 10px" }}>
                        contact@napaglobal.com
                      </p>
                    </div>
                    <div>
                      <input
                        type="button"
                        value="MAP"
                        style={{
                          background: "#412490 0% 0% no-repeat padding-box",
                          padding: "2px 19px",
                          color: "#FFF",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 419,
                    height: 160,
                    color: "#FFF",
                    border: "2px solid #412490",
                    padding: 30,
                  }}
                >
                  <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="building"
                        class="svg-inline--fa fa-building fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"
                        ></path>
                      </svg>
                    </div>
                    <p style={{ margin: "0 0 0 10px" }}>
                      〒103-0023 東京都中央区日本橋本町4-8-15 ネオカワイビル 6F
                    </p>
                  </div>
                  <div className="d-flex">
                    <div style={{ width: 20, height: 20 }}>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone-square-alt"
                        class="svg-inline--fa fa-phone-square-alt fa-w-14"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"
                        ></path>
                      </svg>
                    </div>
                    <p style={{ margin: "0 0 0 10px" }}>03-4530-0001</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <div style={{ width: 20, height: 20 }}>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="far"
                          data-icon="envelope"
                          class="svg-inline--fa fa-envelope fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                          ></path>
                        </svg>
                      </div>
                      <p style={{ margin: "0 0 0 10px" }}>
                        contact@napaglobal.com
                      </p>
                    </div>
                    <div>
                      <input
                        type="button"
                        value="MAP"
                        style={{
                          background: "#412490 0% 0% no-repeat padding-box",
                          padding: "2px 19px",
                          color: "#FFF",
                        }}
                      />
                    </div>
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
