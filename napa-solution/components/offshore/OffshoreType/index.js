import clsx from "clsx";
import { convertArrToObject } from "../../../util/converArrayToObject";
import styles from "./style.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OffshoreType = (props) => {
  // const typeOffshore = convertArrToObject(props.data.property);
  // const content = Object.values(typeOffshore).filter((item) =>
  //   item.name.includes("Offshore_OffshoreType_Introduce")
  // );
  // console.log(content.map((item) => convertArrToObject(item.content)));
  // let offshoreIntro = [];
  // content.map((item) => {
  //   offshoreIntro.push({
  //     title: item.content[0].value,
  //     subtitle: item.content[1].value,
  //     img: item.content[2].image,
  //     content: item.content.slice(3),
  //   });
  // });
  // console.log(offshoreIntro);
  const offshoreIntro = [
    {
      title: 'ラボ型オフショア開発',
      subtitle: '工数x期間に対する契約（準委任契約）',
      content: [
        { value: '予め決めた工数（最低保証分＋α）内で、個々の案件の対応を行う。' },
        { value: '（リソースに対する契約のため、成果物を担保するものではありません）' }
        ],
      img: {
        thumbnail: 'https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629859732/NapaImage/6125af9172d28704345d305d.jpg',
        original: 'https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629859732/NapaImage/6125af9172d28704345d305d.jpg'
      }
    },
    {
      title: '請負型オフショア開発',
      subtitle: '業務に対する契約',
      content: [
        { value: '受注者が注文者に対してある一定の受注業務を完成した時点で対価としての報酬が支給される契約のこと。' },
        { value: '（成果物を担保する一方で、 見積りと異なる作業や機能追加が発生した場合は、再見積もりとなります）' }
        ],
      img: {
        thumbnail: 'https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629863367/NapaImage/6125bdc572d28704345d4474.jpg',
        original: 'https://res.cloudinary.com/dh8l9y2c2/image/upload/v1629863367/NapaImage/6125bdc572d28704345d4474.jpg'
      }
    }
  ]
  return (
    <>
      <div className="container-fluid">
        <div className={clsx("cover", styles.wrapContainer)}>
          <img className="decor-head-line" src="/img/line-style.svg" />
          <h3 id="down-up">
            {/* {typeOffshore.Offshore_OffshoreType_Title.value} */}
            TYPES OF OFFSHORE DEVELOPMENT
          </h3>
          <p id="down-up">
            {/* {typeOffshore.Offshore_OffshoreType_Subtitle.value} */}
            オフショア開発の種類
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
                  <LazyLoadImage
                    effect="blur"
                    src={item.img?.original}
                    placeholderSrc={item.img?.thumbnail}
                    threshold={100}
                    width="100%"
                    height='100%'
                  />
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
