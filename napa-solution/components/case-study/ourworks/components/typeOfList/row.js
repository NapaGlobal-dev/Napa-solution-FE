import styles from "./row.module.css";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Row(props) {
  const { entry, onClick } = props;

  return (
    <div className={clsx(styles.root, styles.bounce, styles.shine)} onClick={onClick}>
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
    </div>
  );
}

export default Row;
