import styles from './home.module.css';
import About from "./About";
import Begin from "./Begin";
import Blogs from "./Blogs";
import OurServices from "./OurServices";
import Review from "./Review";
import Statistics from "./Statistics";
import Technology from "./Technology";
import Team from "../../../components/en/common/Team";
import Consultation from "../../../components/common/Consultation";
import Offices from './Offices';
import OurWorksCpn  from '../../en/ourworks/ourworks';
import BackToTopButton from '../../../components/en/common/BackToTopButton';

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
