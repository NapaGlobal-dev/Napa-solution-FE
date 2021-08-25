import clsx from "clsx";
import { convertArrToObject, getData } from "../../../util/converArrayToObject";
import styles from "./style.module.css";

const OffshoreType = (props) => {
  const typeOffshore = convertArrToObject(props.data.property);
  const content = Object.values(typeOffshore).filter((item) =>
    item.name.includes("Offshore_OffshoreType_Introduce")
  );
  console.log(content.map((item) => convertArrToObject(item.content)));
  let offshoreIntro = [];
  content.map((item) => {
    offshoreIntro.push({
      title: item.content[0].value,
      subtitle: item.content[1].value,
      img: item.content[2].image,
      content: item.content.slice(3),
    });
  });
  console.log(offshoreIntro);
  return (
    <>
      <div className="container-fluid">
        <div className={clsx("cover", styles.wrapContainer)}>
          <img className="decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">{typeOffshore.Offshore_OffshoreType_Title.value}</h3>
          <p id="down-up">
            {typeOffshore.Offshore_OffshoreType_Subtitle.value}
          </p>
          <div className={styles.item}>
            {offshoreIntro.map((item, key) => (
              <div className={styles.introduce} key={key} id="down-up">
                <div className={styles.wrapDetail}>
                  <p className={styles.title}> {item.title} </p>
                  <p className={styles.subtitle}> {item.subtitle}</p>
                  {item.content.map((content, key) => (
                    <p className={styles.content} key={key}>
                      {content.value}
                    </p>
                  ))}
                </div>
                <div className={styles.introImg}>
                  <img src={item.img.original} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OffshoreType;
