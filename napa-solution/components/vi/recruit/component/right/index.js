import styles from './index.module.css';
import CalendarIcon from '../../../../assets/images/vi/recruit/calendar.svg';
import ExperienceIcon from '../../../../assets/images/vi/recruit/experience.svg';
import SalaryIcon from '../../../../assets/images/vi/recruit/salary.svg';
import FileIcon from '../../../../assets/images/vi/recruit/file.svg';
import LocationIcon from '../../../../assets/images/vi/recruit/location.svg';

const Right = ({ data, loading }) => {
  return (
    <div className={styles.bodyRight}>
      <div className={styles.wrapBodyRight}>
        <h5 className={styles.jobOverv}>Job Overview</h5>
        <div className={styles.boxOverview}>
          <div className={styles.wrapContentOverview}>
            <div className={styles.contentOverviewLeft}>
              <img
                alt="Icon Overview"
                src={CalendarIcon}
                className={styles.icon}
              />
            </div>
            <div className={styles.contentOverviewRight}>
              <p className={styles.titleContent}>Ngày hết hạn</p>
              <p className={styles.dataContent}>
                {!loading && data?.expirationDate}
              </p>
            </div>
          </div>
          <div className={styles.wrapContentOverview}>
            <div className={styles.contentOverviewLeft}>
              <img alt="Icon Overview" src={FileIcon} className={styles.icon} />
            </div>
            <div className={styles.contentOverviewRight}>
              <p className={styles.titleContent}>Vị trí công việc</p>
              <p className={styles.dataContent}>
                {!loading && data?.jobPosition}
              </p>
            </div>
          </div>
          <div className={styles.wrapContentOverview}>
            <div className={styles.contentOverviewLeft}>
              <img
                alt="Icon Overview"
                src={ExperienceIcon}
                className={styles.icon}
              />
            </div>
            <div className={styles.contentOverviewRight}>
              <p className={styles.titleContent}>Kinh nghiệm</p>
              <p className={styles.dataContent}>
                {!loading && data?.experience}
              </p>
            </div>
          </div>
          <div className={styles.wrapContentOverview}>
            <div className={styles.contentOverviewLeft}>
              <img
                alt="Icon Overview"
                src={SalaryIcon}
                className={styles.icon}
              />
            </div>
            <div className={styles.contentOverviewRight}>
              <p className={styles.titleContent}>Mức lương</p>
              <p className={styles.dataContent}>{!loading && data?.salary}</p>
            </div>
          </div>
          <div className={styles.wrapContentOverview}>
            <div className={styles.contentOverviewLeft}>
              <img
                alt="Icon Overview"
                src={LocationIcon}
                className={styles.icon}
              />
            </div>
            <div className={styles.contentOverviewRight}>
              <p className={styles.titleContent}>Nơi làm việc</p>
              <p className={styles.dataContent}>
                {!loading && data?.workplace}
              </p>
            </div>
          </div>
          <div className={styles.wrapContentOverview}>
            <div className={styles.wrapBtnApply}>
              <button className={styles.btnApply}>
                <a href="#apply-job-section">ỨNG TUYỂN</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;