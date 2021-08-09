import clsx from "clsx";
import styles from "./style.module.css";
const ClientSay = (props) => {
  const { data } = props;

  return (
    // <div className="container">
    <div className="container-fluid">
      <div className={clsx(styles.cover)}>
        <h3 id="main-title">{data.title}</h3>
        <p id="sub-title">{data.subTitle}</p>
        <video
          // autoplay="autoplay"
          controls="controls"
          className={clsx(styles.video)}
          width="1500"
          height="700"
        >
          <source src={data.video} type="video/mp4" autostart="false" />
        </video>
      </div>
    </div>
    // </div>
  );
};
export default ClientSay;
