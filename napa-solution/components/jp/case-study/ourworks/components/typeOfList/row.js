import styles from "./row.module.css";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";

function Row(props) {
  const { entry } = props;

  return (
    <div className={clsx(styles.root, styles.bounce, styles.shine)}>
      <a href={entry?.rightUrl} target="_self">
        <div className={styles.wrapImage}>
          {/* <img alt='pic-project' src={!loading ? entry?.imageDetail?.original : undefined} className={styles.img} /> */}
          <LazyLoadImage
            alt="pic-project"
            src={entry?.image?.original}
            className={styles.img}
          />
        </div>
        <div className={styles.wrapTitle}>
          <h4 className={styles.projectName}>{entry?.value}</h4>
          {/* <span className={styles.description}>{entry?.value}</span> */}
        </div>
      </a>
    </div>
  );
}

export default Row;
