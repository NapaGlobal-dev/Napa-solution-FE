import styles from './index.module.css';
import clsx from 'clsx';

const Item = ({ data, lastItem, loadingRecruit, index }) => {
  return (
    <div className={clsx(styles.root, lastItem && styles.removeBorderBottom)}>
      <div className={styles.left}>
        <div className={styles.head}>
          <h3 className={styles.position}>{!loadingRecruit && data?.name}</h3>
          <h3 className={styles.location}>
            {!loadingRecruit && data?.location}
          </h3>
        </div>
        <div className={styles.body}>
          <p className={styles.description}>
            {!loadingRecruit && data?.description}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <button
          className={styles.btn}
          id={`btn-apply-${data.id}`}
          onClick={() => (window.location.href = `/recruit/detail/${data.id}`)}
        >
          ỨNG TUYỂN NGAY
        </button>
      </div>
    </div>
  );
};

export default Item;
