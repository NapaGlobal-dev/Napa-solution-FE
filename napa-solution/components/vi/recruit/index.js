import styles from './index.module.css';
import Banner from '../../../assets/images/vi/recruit/banner.svg';
import LeftComponent from './component/left';
import RightComponent from './component/right';
import { FetchDetailRecruit } from 'services/vi/home';
import RecruitProcess from '../../landing/recruit';
import ListJobs from '../../landing/hiring';
import { useParams } from "react-router-dom";

const Recruit = () => {
  const query = useParams();
  const { loadingDR, detailRecruit } = query?.id ? FetchDetailRecruit(
    query?.id
  ) : {};

  return (
    <div className={styles.root}>
      <div>
        <img alt='Banner' src={Banner} className={styles.banner} />
      </div>
      <div className={styles.wrapContent}>
        {query?.id ? (
          <>
            <div className={styles.header}>
              <h1>{detailRecruit?.recruit?.header}</h1>
            </div>
            <div className={styles.body}>
              <LeftComponent
                data={detailRecruit?.recruit}
                loading={loadingDR}
              />
              <RightComponent
                data={detailRecruit?.recruit}
                loading={loadingDR}
              />
            </div>
          </>
        ) : (
          <>
            <ListJobs />
          </>
        )}
        <RecruitProcess />
      </div>
    </div>
  );
};

export default Recruit;
