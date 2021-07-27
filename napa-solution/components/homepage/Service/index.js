import styles from "./style.module.css";
import clsx from "clsx";
const data = [
  {
    img: "img/home/service1.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
  {
    img: "img/home/service2.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
  {
    img: "img/home/service3.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
  {
    img: "img/home/service4.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
  {
    img: "img/home/service5.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
  {
    img: "img/home/service6.png",
    title: "ウエブアプリ開発",
    subTitle:
      "レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良,レスポンシブウェブサイトのデザインにより、すべての画面で見栄えが良",
    url: "company.html",
    btnContent: "企業情報",
  },
];
const Service = (props) => {
  return (
    <div className={clsx("container-fluid", styles.container)}>
      <div className={clsx(styles.mainRoot)}>
        {data.map((item, index) => (
          <div
            className={
              index % 2 == 0
                ? clsx(styles.cover, styles.initial)
                : clsx(styles.cover, styles.reverse)
            }
          >
            {index % 2 == 0 && (
              <div className={styles.coverText}>
                <h2 className={clsx(styles.h2Text)}>SERVICES</h2>
              </div>
            )}
            <div className={clsx(styles.groupImg)}>
              <img src={item.img} className={clsx(styles.mainImg)} />
              <img
                src={
                  index % 2 == 0
                    ? "img/home/bg-service-left.png"
                    : "img/home/bg_service.svg"
                }
                className={
                  index % 2 == 0
                    ? clsx(styles.bgImgOdd)
                    : clsx(styles.bgImgEven)
                }
              />
            </div>
            <div
              className={
                index % 2 == 0
                  ? clsx(styles.contentText)
                  : clsx(styles.contentReverse)
              }
            >
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <a href={item.url}>
                <div
                  className="col-xs-12 order-3 order-xl-4 no-default-spacing"
                  id="detail-btn-company"
                  style={{ width: 227, marginLeft: 0, height: 66 }}
                >
                  <span id="detail-btn-company-content">{item.btnContent}</span>
                  <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                    <path d="M0 6h61.5l-5.2-5.2"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
