import clsx from "clsx";
import useDarkMode from "use-dark-mode";
import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
const Benefit = (props) => {
  // console.log(props.data)
  // const benefit = convertArrToObject(props.data.property);
  // const contentBenefit = getData(
  //   props.data.property,
  //   /OffShore_Benefit_Content/
  // );
  const contentBenefit = [
    {
      value: '安価で優秀なリソースの確保'
    },
    {
      value: '質の高い開発'
    },
    {
      value: 'ワンストップで開発可能'
    }
  ]
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
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3 id="down-up">
          {/* {benefit.OffShore_Benefit_Title.value} */}
          CUSTOMER BENEFITS
        </h3>
        <p id="down-up">
          {/* {benefit.OffShore_Benefit_Subtitle.value} */}
          お客様のメリット
        </p>
        <div>
          <div className={styles.item}>
            <img 
              // src={benefit.OffShore_Benefit_Img.image.original} 
              src="https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629192856/NapaImage/611b829a4bc17d0e489c4bae.svg"
            />
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
