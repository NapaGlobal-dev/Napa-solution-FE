import styles from "./style.module.css";
import clsx from "clsx";

const convertData = (data) => {
  const newdata = {};
  data.map((item) => {
    const [name, order] = item.name.split("_")[2].split("-");
    // item.name.includes("Img", "title", "subTitle", "url", "btn");

    if (!newdata[order]) newdata[order] = {};
    newdata[order][name] = item;
    newdata[order]["_order"] = order;
  });

  const a = Object.values(newdata).sort((a, b) => a._order > b._order);

  const b = a.map((item) => ({
    img: item?.Image?.image?.original,
    title: item?.Title?.value,
    subTitle: item?.Content?.value,
    url: item?.Button?.url,
    btnContent: item?.Button?.value,
  }));

  return b;
};

const renderServiceItem = (item, index) => (
  <div className="sw-container">
    <div key={index}>
      {index % 2 == 0 && (
        <div className={styles.coverText}>
          <h2 className={clsx(styles.h2Text)}>SERVICES</h2>
        </div>
      )}
      <div
        className={
          // clsx("row", index % 2 != 0 && styles.reverse)
          index % 2 == 0
            ? clsx(styles.cover, styles.initial)
            : clsx(styles.cover, styles.reverse)
        }
      >
        <div className={clsx(styles.blockContent)}>
          <div className={styles.blockImageBounding}>
            <div className={clsx(styles.blockImage)}>
              <img src={item.img} className={clsx(styles.mainImage)} />
              <img
                src={
                  index % 2 == 0
                    ? "img/home/bg-service-left.png"
                    : "img/home/bg_service.svg"
                }
                className={
                  clsx(styles.decorImg)
                  // index % 2 == 0
                  //   ? clsx(styles.bgImgOdd)
                  //   : clsx(styles.bgImgEven)
                }
              />
            </div>
          </div>
        </div>
        <div className={clsx(styles.spacing)}></div>

        <div
          className={
            clsx(styles.blockContent)
            // index % 2 == 0
            //   ? clsx(styles.contentText)
            //   : clsx(styles.contentReverse)
          }
        >
          <div className={clsx(styles.centerContent)}>
            <div className={clsx(styles.boxContent)}>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <a href={item.url}>
                <div
                  className={clsx(
                    "col-xs-12 order-3 order-xl-4 no-default-spacing",
                    styles.boxButton
                  )}
                  id="detail-btn-company"
                >
                  <span id="detail-btn-company-content">{item.btnContent}</span>
                  <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                    <path d="M0 6h61.5l-5.2-5.2"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Service = (props) => {
  const data = convertData(props.data.property);
  const chainData = data[Symbol.iterator]();

  return (
    <>
      {/* <div style={{ display: "none" }}>
        <div className={clsx(styles.title)}>
          <h3>SERVICES</h3>
          <p>最新ニュース</p>
        </div>
      </div> */}
      {Array.from({ length: Math.ceil(data.length / 2) }).map((_, index) => (
        <>
          <div className={clsx("scroll-snap-section")}>
            <div className="center-content">
              {renderServiceItem(chainData.next().value, index * 2)}
              {renderServiceItem(chainData.next().value, index * 2 + 1)}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Service;
