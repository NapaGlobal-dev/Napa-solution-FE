import styles from './index.module.css';
import clsx from 'clsx';
import { useState } from 'react';
import { FetchAllNews, FetchIntroNews } from '../../../../services/vi/home';
import parser from 'html-react-parser';
const News = () => {
  const [activeArt, setActiveArt] = useState(0);
  const [activeArtAnim, setActiveArtAnim] = useState(0); // same as activeArt, for animation purpose
  const [resetAnim, setResetAnim] = useState(false);

  const { loadingIN, introNews } = FetchIntroNews();
  const { loadingNews, news } = FetchAllNews(4, 0);
  const parse = (text, placeholder) =>
    loadingNews ? placeholder ?? '' : parser(text?.['vi'] ?? '');

  function handleChangePag(index) {
    setActiveArtAnim(index);
    setResetAnim(true);
    setTimeout(() => {
      setActiveArt(index);
    }, 500);
    setTimeout(() => {
      setResetAnim(false);
    }, 1000);
  }
  return (
    <div className={styles.root}>
      <div className={styles.wrapTitle}>
        <h2 className={styles.title}>
          {!loadingIN && parse(introNews?.home_news_title)}
        </h2>
        <p className={styles.subTitle}>
          {!loadingIN && parse(introNews?.home_new_subtitle)}
        </p>
      </div>
      <div className={styles.sliderBox}>
        <div className={styles.slider}>
          <div className={styles.boxImage}>
            <img
              alt='Who are we?'
              src={news?.new[activeArt]?.image.original}
              className={clsx(styles.img, resetAnim && styles.fadeOutImg)}
            />
          </div>
          <div className={styles.content}>
            <p className={clsx(styles.date, resetAnim && styles.fadeOut1)}>
              {news?.new[activeArt]?.dateSubmitted}
              {/* ({month} {day}, {year})[activeArt] */}
            </p>
            <h3 className={clsx(styles.boxTitle, resetAnim && styles.fadeOut2)}>
              {!loadingNews && parse(news?.new[activeArt]?.title)}
            </h3>
            <h5 className={clsx(styles.boxDesc, resetAnim && styles.fadeOut3)}>
              {!loadingNews && parse(news?.new[activeArt]?.description)}
            </h5>
            <div className={clsx(styles.btn, resetAnim && styles.fadeOut4)}>
              <button>
                <a href={news?.new[activeArt]?.alias}>Chi tiết</a>
              </button>
            </div>
            <div className={styles.pagBox}>
              {!loadingNews &&
                news?.new?.map((entry, index) => (
                  <div
                    className={clsx(
                      styles.pag,
                      index === activeArtAnim && styles.activePag
                    )}
                    onClick={() => handleChangePag(index)}
                    key={index}
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
