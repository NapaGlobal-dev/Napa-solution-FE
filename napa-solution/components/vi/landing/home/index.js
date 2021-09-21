import styles from './index.module.css';
import Banner from '../../../assets/images/vi/landing/banner.svg';
import Slider from 'react-slick';
import parser from 'html-react-parser';
import { FetchAllBanner } from 'services/vi/home';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    autoplay: false,
    autoplaySpeed: 10000
  };

  const { loadingBanner, banners } = FetchAllBanner(4);
  const parse = (text, placeholder) =>
    loadingBanner ? placeholder ?? '' : parser(text?.['vi'] ?? '');

  return (
    <div className={styles.root}>
      <img alt="Banner" src={Banner} className={styles.banner} />
      <div className={styles.sliderBox}>
        <Slider {...settings}>
          {!loadingBanner &&
            banners?.banners?.map((entry, index) => (
              <div className={styles.rootWrap}>
                <div className={styles.wrapSlide} key={index}>
                <div className={styles.content}>
                  <h1 className={styles.title}>
                    {!loadingBanner && parse(entry?.title)}
                  </h1>
                  <p className={styles.desc}>
                    {!loadingBanner && parse(entry?.description)}
                  </p>
                  <div className={styles.btn}>
                    <button>TÌM HIỂU THÊM</button>
                  </div>
                </div>
                <div className={styles.img}>
                  <img
                    src={!loadingBanner && entry?.image?.original}
                    alt="TEST"
                  />
                </div>
              </div>
              </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
