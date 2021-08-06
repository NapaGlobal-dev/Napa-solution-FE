import styles from "./begin.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Slider from "react-slick";
import SliderWrapper from "./sliderWrapper";

import Banner4Component from "./banner4/blockchain";
import Banner2Component from "./banner2/ai";
import Banner3Component from "./banner3";

const BannerHome1 = "/assets/images/en/home/banner-1.png";
const BannerHome1Mobile = "/assets/images/en/home/banner-1-mobile.png";
const BannerHome2 = "/assets/images/en/home/banner-2/ai-bg.png";
const BannerHome3 = "/assets/images/en/home/banner-3/banner-mobile_app.png";
const BannerHome4 = "/assets/images/en/home/banner-2/banner-2-bg.png";
// import LazyLoadImage from "components/en/common/LazyLoadImage";

const convertData = (data = []) => {
  const newdata = data
    .map((item) => ({
      ...item.property.reduce((acc, cur) => {
        const name = cur.name.split("_")[2].split("-")[0];
        acc[name] = cur.value;
        return acc;
      }, {}),
      _order: parseInt(item.name.split("_")[1].split("-")[1]),
    }))
    .sort((a, b) => a._order - b._order)
    .map((item) => ({
      id: item._order,
      title: item.Title,
      desc: item.Subtitle.split("\\n"),
    }));

  return newdata;
};

const Element = ({ currentSlide, index, img, data }) => {
  return (
    <div className={clsx(styles.container)} id={`slide${index + 1}`}>
      <img
        alt="Banner"
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
            {data.title}
          </h1>
          <div className={styles.wrapSubTitle}>
            <p
              className={clsx(
                styles.text,
                currentSlide === index && styles.slideInBottomText,
                !data.desc[1] && styles.width70
              )}
            >
              {data.desc[0]}
            </p>
            {data.desc[1] && (
              <p
                className={clsx(
                  styles.text,
                  currentSlide === index && styles.slideInBottomText,
                  styles.hidden
                )}
              >
                {data.desc[1]}
              </p>
            )}
          </div>
        </div>
      </div>
      {currentSlide === 1 && index === 1 && (
        <>
          <Banner2Component />
        </>
      )}
      {currentSlide === 2 && index === 2 && (
        <>
          <Banner3Component />
        </>
      )}
      {currentSlide === 3 && index === 3 && (
        <>
          <Banner4Component />
        </>
      )}
    </div>
  );
};

const Begin = (props) => {
  const data = convertData(props.data);

  const [curSlide, setCurSlide] = useState(0);
  const [arrSlide, setArrSlide] = useState([
    { id: 1, img: BannerHome1 },
    { id: 2, img: BannerHome2 },
    { id: 3, img: BannerHome3 },
    { id: 4, img: BannerHome4 },
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
    customPaging: (i) => <button className={styles.pagingDot}></button>,
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
    <div className={styles.root} id="home-section">
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
            {data.map((item, index) => (
              <Element
                currentSlide={curSlide}
                key={index}
                index={index}
                img={arrSlide[index].img}
                data={item}
              />
            ))}
          </Slider>
        </SliderWrapper>
      </div>
    </div>
  );
};

export default Begin;
