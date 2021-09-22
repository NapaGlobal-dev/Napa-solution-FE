import styles from './row.module.css';
import parser from 'html-react-parser';
import clsx from 'clsx';
import appearStyles from '../../../../../components/en/common/AppearAnimation/appear.module.css';
import LazyLoadImage from '../../../../../components/en/common/LazyLoadImage';

function Header(props) {
  const { entry, onClick, loading } = props;
  const parse2 = (text, placeholder) =>
    loading ? placeholder ?? '' : parser(text?.['en'] ?? '');

  return (
    <div className={clsx(styles.root, appearStyles.bounce)} onClick={onClick}>
      <div className={styles.wrapImage}>
        {/* <img alt='pic-project' src={!loading ? entry?.imageDetail?.original : undefined} className={styles.img} /> */}
        <LazyLoadImage
          alt='pic-project'
          src={!loading ? entry?.imageDetail?.original : undefined}
          className={styles.img}
        />
      </div>
      <div className={styles.wrapTitle}>
        <h4 className={styles.projectName}>
          {!loading && parse2(entry?.name)}
        </h4>
        <span className={styles.description}>
          {!loading && parse2(entry?.description)}
        </span>
      </div>
    </div>
  );
}

export default Header;
