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
              // src="https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629774734/NapaImage/6124638b91142736a841dd48.png"
              src={whatOffshore.Offshore_WhatOffshore_Content?.image?.original}
              placeholderSrc={whatOffshore.Offshore_WhatOfshore_Content?.image?.thumbnail}
              threshold={100}
              width="100%"
              height='100%'
            />
          </div>
          <div className={styles.item} id="down-up">
            <div className={styles.mainTitle}>
              {whatOffshore.Offshore_WhatOffshore_Title.value}
            </div>
            <div className={styles.subTitle}>
              {whatOffshore.Offshore_WhatOffshore_Subtitle.value}

            </div>
            <p>
              {whatOffshore.Offshore_WhatOffshore_Content.value}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOffshore;
