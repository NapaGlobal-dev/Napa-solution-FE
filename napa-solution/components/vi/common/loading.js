import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
