import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./ai.module.css";
const ImgAI = "/assets/images/en/home/banner-2/main-min.png";
const ImgShadow = "/assets/images/en/home/banner-2/shadow.svg";
const ImgDataBase = "/assets/images/en/home/banner-2/box-min.png";
const ImgChat = "/assets/images/en/home/banner-2/chat-min.png";
const ImgRobot = "/assets/images/en/home/banner-2/machine-min.png";
const ImgPhone = "/assets/images/en/home/banner-2/scan-min.png";

const AI = () => {
  return (
    <>
      <LazyLoadImage alt="AI" src={ImgAI} className={styles.imgAI} />
      <LazyLoadImage alt="Shadow AI" src={ImgShadow} className={styles.imgShadow} />
      <LazyLoadImage alt="Database" src={ImgDataBase} className={styles.imgDB} />
      <LazyLoadImage alt="Chat" src={ImgChat} className={styles.imgChat} />
      <LazyLoadImage alt="Robot" src={ImgRobot} className={styles.imgRobot} />
      <LazyLoadImage alt="Phone" src={ImgPhone} className={styles.imgPhone} />
    </>
  );
};

export default AI;
