import clsx from "clsx";
import styles from "./style.module.css";
const ClientSay = (props) => {
  const { data } = props;

  return (
    // <div className="container">
    <div className="container-fluid">
      <div className={clsx(styles.cover)}>
        <h3>{data.title}</h3>
        <p>{data.subTitle}</p>
        <video
          autoplay="autoplay"
          controls="controls"
          className={clsx(styles.video)}
          width="1500"
          height="700"
        >
          <source src={data.video} type="video/mp4" />
        </video>
      </div>
    </div>
    // </div>
  );
};
export default ClientSay;
