import Head from "next/head";
import clsx from "clsx";
import styles from "./style.module.css";
import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Message = (props) => {
  const datas = convertArrToObject(props.data.property);
  const title = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_Message_Title")
  )[0];
  const subTitle = Object.values(datas).filter((item) =>
    item.name.includes("CompanyAbout_Message_SubTitle")
  )[0];
  const image = getData(datas, /CompanyAbout_Message_Content/)[0];
  console.log(image);
  const message = getData(image, /Content_Message/)[0];
  const role = getData(image, /Content_Role/)[0];

  return (
    <>
      <div className="container-fluid">
        <div className="cover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58.948"
            height="124.343"
            viewBox="0 0 58.948 124.343"
          >
            <g
              id="Group_135"
              data-name="Group 135"
              transform="translate(-98.543 -1182.829)"
            >
              <line
                id="Line_88"
                data-name="Line 88"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
              />
              <line
                id="Line_89"
                data-name="Line 89"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="6"
              />
              <line
                id="Line_90"
                data-name="Line 90"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
              />
            </g>
          </svg>
          <h3 id="down-up">{title.value}</h3>
          <p id="down-up">{subTitle.value}</p>
          <div className={clsx(styles["container-about"])}>
            {/* <div className={clsx(styles['left-about'])}>
              <LazyLoadImage
                effectb="lur"
                src={image.image?.original}
                placeholderSrc={image.image?.thumbnail}
                threshold={100}
                width="100%"
                // className={clsx(styles.img)}
              />
            </div> */}
            <div className={clsx(styles["right-about"])}>
              <div className={clsx(styles["wrap1-about"])}>
                <div className={clsx(styles.decorate)}>
                  <div className={clsx(styles.decorate1)}></div>
                  <div className={clsx(styles.decorate2)}></div>
                  <div className={clsx(styles.decorate3)}></div>
                  <div className={clsx(styles.decorate4)}></div>
                  <div className={clsx(styles.decorate5)}></div>
                </div>
                <div className={clsx(styles["wrap2-about"])}>
                  <div className={clsx(styles["content-about"])}>
                    <div id="down-up">
                      <h4>{message.key}</h4>
                      <p>{message.value}</p>
                      <div className={clsx(styles["foot-line"])}>
                        <LazyLoadImage
                          effectb="lur"
                          src={image.image?.original}
                          placeholderSrc={image.image?.thumbnail}
                          threshold={100}
                          // width="100%"
                          className={clsx(styles.imgPresentative)}
                        />
                        <div className={clsx(styles.coverInfo)}>
                          <h5>{role.value}</h5>
                          <p>{role.key}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
