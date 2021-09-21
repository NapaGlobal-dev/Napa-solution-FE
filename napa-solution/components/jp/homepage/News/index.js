import styles from "./style.module.css";
import clsx from "clsx";
const New = ({ data = {}, ...props }) => {
  return (
    <div className={clsx("container-fluid", styles.container)}>
      <div className={clsx(styles.group1)}>
        <h4>{data.type}</h4>
        <p>{data.typeJP}</p>
      </div>
      <div className={clsx(styles.group2)}>
        <p>{data.title}</p>
        <div className={clsx(styles.content)}>
          {data?.description?.split("\\n").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
