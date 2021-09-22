import styles from './begin.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';
import SliderWrapper from './sliderWrapper';
import BannerHome1 from '../../../assets/images/en/home/banner-1.png';
import BannerHome1Mobile from '../../../assets/images/en/home/banner-1-mobile.png';
import BannerHome2 from '../../../assets/images/en/home/banner-2/ai-bg.png';
import BannerHome3 from '../../../assets/images/en/home/banner-3/banner-mobile_app.png';
import BannerHome4 from '../../../assets/images/en/home/banner-2/banner-2-bg.png';
import { useEffect } from 'react';

import Banner4Component from './banner4/blockchain';
import Banner2Component from './banner2/ai';
import Banner3Component from './banner3';

const contentSlide = [
  {
    id: 0,
    title: 'Building Digital Products and Services?',
    desc: 'NAPA GLOBAL is your trusted technical partner. ',
    desc1: 'Realize your vision with us.'
  },
  {
    id: 1,
    // title: 'Power Up Your Products with AI Solutions',
    // desc:
    //   'Our AI/ML experts and development team offer comprehensive services for you to harness the power of AI technologies.'
    title: 'Tap Into The Innovation of Blockchain',
    desc: 'We partner with you to make full-fledged cryptocurrency exchanges and dApps. ',
    desc1: 'With our expertise, blockchain-based applications are accessible.'
  },
  {
    id: 2,
    title: 'Develop Your Web and Mobile Apps',
    desc: 'We build large-scale apps everyday, and our responsive designs will make your apps look good in every screen of any device.'
  },
  {
    id: 3,
    title: 'Power Up Your Products with AI Solutions',
    desc: 'Our AI/ML experts and development team offer comprehensive services for you to harness the power of AI technologies.'
    // title: 'Tap Into The Innovation of Blockchain',
    // desc:
    //   'We partner with you to make full-fledged cryptocurrency exchanges and dApps. ',
    // desc1: 'With our expertise, blockchain-based applications are accessible.'
  }
];

const Element = ({ currentSlide, index, img }) => {
  return (
    <div className={clsx(styles.container)} id={`slide${index + 1}`}>
      <img
        alt='Banner'
        src={img}
        className={clsx(
          styles.bannerImg,
          currentSlide === index && styles.zoomInBanner
        )}
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1
            className={clsx(
              styles.title,
              currentSlide === index && styles.slideInTop
            )}
          >
            {contentSlide[index].title}
          </h1>
          <div className={styles.wrapSubTitle}>
            <p
              className={clsx(
                styles.text,
                currentSlide === index && styles.slideInBottomText,
                !contentSlide[index].desc1 && styles.width70
              )}
            >
              {contentSlide[index].desc}
            </p>
            {contentSlide[index].desc1 && (
              <p
                className={clsx(
                  styles.text,
                  currentSlide === index && styles.slideInBottomText,
                  styles.hidden
                )}
              >
                {contentSlide[index].desc1}
              </p>
            )}
          </div>
        </div>
      </div>
      {currentSlide === 1 && index === 1 && (
        <>
          {/* <Banner2Component /> */}
          <Banner4Component />
        </>
      )}
      {currentSlide === 2 && index === 2 && (
        <>
          <Banner3Component />
        </>
      )}
      {currentSlide === 3 && index === 3 && (
        <>
          {/* <Banner4Component /> */}
          <Banner2Component />
        </>
      )}
    </div>
  );
};

const Begin = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [arrSlide, setArrSlide] = useState([
    { id: 1, img: BannerHome1, title: 'We made web and mobile app' },
    { id: 2, img: BannerHome2, title: 'We provide AI solution' },
    { id: 3, img: BannerHome3 },
    { id: 4, img: BannerHome4 }
  ]);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    draggable: false,
    swipe: true,
    autoplaySpeed: 8000,
    fade: true,
    pauseOnHover: false,
    beforeChange: (prev, next) => {
      setCurSlide(next);
    },
    customPaging: (i) => <button className={styles.pagingDot}></button>
  };

  useEffect(() => {
    if (window.screen.width < 600) {
      let newState = [...arrSlide];
      arrSlide[0].img = BannerHome1Mobile;
      arrSlide[1].img = BannerHome4;
      setArrSlide(newState);
    }
  }, []);
  return (
    <div className={styles.root} id='home-section'>
      {curSlide === 0 && (
        <div className={styles.animate}>
          <div className={styles.starWrapper}>
            <div>
              {[...Array(19).keys()].map((entry, index) => (
                <div className={styles.star} key={index}></div>
              ))}
            </div>
            <div>
              {[...Array(19).keys()].map((entry, index) => (
                <div className={styles.tiniStar} key={index}></div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={styles.sliderBox}>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            <Element currentSlide={curSlide} index={0} img={arrSlide[0].img} />
            <Element currentSlide={curSlide} index={1} img={arrSlide[1].img} />
            <Element currentSlide={curSlide} index={2} img={arrSlide[2].img} />
            <Element currentSlide={curSlide} index={3} img={arrSlide[3].img} />
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
};

export default Begin;
