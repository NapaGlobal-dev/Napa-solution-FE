import styles from "./ai.module.css";
import ImgAI from "../../../../public/assets/images/en/home/banner-2/main-min.png";
import ImgShadow from "../../../../public/assets/images/en/home/banner-2/shadow.svg";
import ImgDataBase from "../../../../public/assets/images/en/home/banner-2/box-min.png";
import ImgChat from "../../../../public/assets/images/en/home/banner-2/chat-min.png";
import ImgRobot from "../../../../public/assets/images/en/home/banner-2/machine-min.png";
import ImgPhone from "../../../../public/assets/images/en/home/banner-2/scan-min.png";

const AI = () => {
  return (
    <>
      <img
        alt="AI"
        src="./assets/images/en/home/banner-2/main-min.png"
        className={styles.imgAI}
      />
      <img
        alt="Shadow AI"
        src="./assets/images/en/home/banner-2/shadow.svg"
        className={styles.imgShadow}
      />
      <img
        alt="Database"
        src="./assets/images/en/home/banner-2/box-min.png"
        className={styles.imgDB}
      />
      {/* <img alt="Chat" src={ImgChat} className={styles.imgChat} />
      <img alt="Robot" src={ImgRobot} className={styles.imgRobot} />
      <img alt="Phone" src={ImgPhone} className={styles.imgPhone} /> */}
    </>
  );
};

export default AI;
