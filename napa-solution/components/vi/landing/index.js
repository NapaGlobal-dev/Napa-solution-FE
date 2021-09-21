import styles from './index.module.css';
import Works from './works';
import Home from './home';
import Hiring from './hiring';
import News from './news';
import Consultation from 'components/common/Consultation';
import clsx from 'clsx';

const Landing = () => {
  return (
    <div className={styles.root}>
      <Home />
      <div className={styles.wrapMobile}>
        <Works />
      </div>
      <div className={styles.wrapHiring}>
        <News />
      </div>
      <div className={styles.wrapMobile}>
        <Hiring />
      </div>
      <div className={clsx(styles.wrapMobile, styles.wrapConsultation)}>
        <Consultation />
      </div>
    </div>
  );
};

export default Landing;
