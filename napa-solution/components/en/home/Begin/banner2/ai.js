import styles from './ai.module.css';
const ImgAI = "/assets/images/en/home/banner-2/main-min.png";
const ImgShadow = "/assets/images/en/home/banner-2/shadow.svg";
const ImgDataBase = "/assets/images/en/home/banner-2/box-min.png";
const ImgChat = "/assets/images/en/home/banner-2/chat-min.png";
const ImgRobot = "/assets/images/en/home/banner-2/machine-min.png";
const ImgPhone = "/assets/images/en/home/banner-2/scan-min.png";

const AI = () => {
    return (
        <>
            <img alt='AI' src={ImgAI} className={styles.imgAI} />
            <img alt='Shadow AI' src={ImgShadow} className={styles.imgShadow} />
            <img alt='Database' src={ImgDataBase} className={styles.imgDB} />
            <img alt='Chat' src={ImgChat} className={styles.imgChat} />
            <img alt='Robot' src={ImgRobot} className={styles.imgRobot} />
            <img alt='Phone' src={ImgPhone} className={styles.imgPhone} />
        </>
    )
}

export default AI;