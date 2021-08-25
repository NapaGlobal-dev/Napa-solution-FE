import clsx from "clsx";
import useDarkMode from "use-dark-mode";
import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
const Benefit = (props) => {
  // console.log(props.data)
  const benefit = convertArrToObject(props.data.property);
  const contentBenefit = getData(
    props.data.property,
    /OffShore_Benefit_Content/
  );
  const darkmode = useDarkMode();
  useEffect(() => {
    if (darkmode?.value) {
      document
        .getElementsByClassName(styles.benefitDetail)[0]
        .classList.add(styles.benefitDetailDarkMode);
    } else {
      document
        .getElementsByClassName(styles.benefitDetail)[0]
        .classList.remove(styles.benefitDetailDarkMode);
    }
  });
  return (
    <div className="container-fluid">
      <div className={clsx("cover", styles.wrapContainer)}>
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
        <h3 id="down-up">{benefit.OffShore_Benefit_Title.value}</h3>
        <p id="down-up">{benefit.OffShore_Benefit_Subtitle.value}</p>
        <div>
          <div className={styles.item}>
            <img src={benefit.OffShore_Benefit_Img.image.original} />
            <div className={styles.benefitBorder}>
              <div
                className={clsx(
                  styles.benefitDetail,
                  darkmode?.value && styles.benefitDetailDarkMode
                )}
                id="down-up"
              >
                {contentBenefit.map((item, index) => (
                  <div className={styles.wraperContent} key={index}>
                    <div className={styles.benefitNumber}>
                      <p style={{ color: "#363537 !important" }}>{`0${
                        index + 1
                      }`}</p>
                    </div>
                    <p className={styles.benefitContent}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
