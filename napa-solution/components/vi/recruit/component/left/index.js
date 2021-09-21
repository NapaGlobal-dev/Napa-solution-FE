import styles from './index.module.css';
import ApplyCard from './applyCard';
import parser from 'html-react-parser';

const Left = ({ data, loading }) => {
  const parse = (text, placeholder) =>
    loading ? placeholder ?? '' : parser(text?.['vi'] ?? '');
  return (
    <div className={styles.bodyLeft}>
      <h3 className={styles.titleText}>Mô tả công việc</h3>
      <div className={styles.contentText}>
        {!loading && parse(data?.jobDescription)}
      </div>
      <h3 className={styles.titleText}>Yêu cầu chung</h3>
      <div className={styles.contentText}>
        {!loading && parse(data?.generalRequirement)}
      </div>
      <h3 className={styles.titleText}>Quyền lợi</h3>
      <div className={styles.contentText}>
        {!loading && parse(data?.benefit)}
      </div>
      <ApplyCard />
    </div>
  );
};

export default Left;
