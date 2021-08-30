import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WhatOffshore = (props) => {
  const whatOffshore = convertArrToObject(props.data.property);
  return (
    <div className="container-fluid">
      <div className={clsx("cover", styles.wrapContainer)}>
        <div className={styles['wrap-image']}>
          <div className={styles.imgOffshore}>
            <LazyLoadImage
              effect="blur"
              src={whatOffshore.Offshore_WhatOfshore_Content?.image?.original}
              placeholderSrc={whatOffshore.Offshore_WhatOfshore_Content?.image?.thumbnail}
              threshold={100}
              width="100%"
              height='100%'
            />
          </div>
          <div className={styles.item} id="down-up">
            <div className={styles.mainTitle}>
              {whatOffshore.Offshore_WhatOfshore_Title.value}
            </div>
            <div className={styles.subTitle}>
              {whatOffshore.Offshore_WhatOfshore_Subtitle.value}
            </div>
            <p>{whatOffshore.Offshore_WhatOfshore_Content.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOffshore;
