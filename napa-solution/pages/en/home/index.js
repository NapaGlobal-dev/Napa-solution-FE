import {
  Begin,
  OurServices,
  Statistics,
  About,
  Team,
  Offices,
  Review,
  Consultation
} from 'components/en/home';
import { OurWorksCpn } from 'components/en/ourworks';
import BackToTopButton from 'components/en/common/BackToTopButton';
import styles from './home.module.css';

const Home = () => {
  return (
    <div>
      <Begin />
      <div className={styles.root}>
        <Review />
        <OurServices />
        <Statistics />
        <About />
        <OurWorksCpn center isRow={true} />
        <Team />
        <div className={styles.wrapOffice}>
          <Offices />
        </div>

        <Consultation />
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Home;
