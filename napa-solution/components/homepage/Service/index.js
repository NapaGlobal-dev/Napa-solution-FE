import styles from "./style.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, { Mousewheel } from "swiper/core";
// SwiperCore.use([Mousewheel]);

const settings = {
  direction: "vertical",
  spaceBetween: 0,
  slidesPerView: 2,
  mousewheel: true,
  slidesPerGroup: 2,
  // breakpoints: {
  //   768: {
  //     slidesPerView: 1,
  //     slidesPerGroup: 1,
  //   },
  // },
};

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

const Service = (props) => {
  const data = convertData(props.data.property);
  const [swiper, setSwiper] = useState(null);

  // useEffect(() => {
  //   const offset = () => {
  //     console.log(window.pageYOffset);
  //   };
  //   window.addEventListener("scroll", offset);
  //   return () => {
  //     window.removeEventListener("scroll", offset);
  //   };
  // }, []);

  useEffect(() => {
    const observers = [];
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      console.log(
        "observerble ....",
        swiper.activeIndex,
        entries[0]?.target?.dataset?.slide,
        observer
      );

      const index = entries[0]?.target?.dataset?.slide;

      if (swiper) swiper.slideTo(parseInt(index) * 2);
    };

    document.querySelectorAll(".sw-trigger").forEach((element) => {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(element);
      observers.push({ observer, target: element });
    });

    // console.log("target...", target);

    return () => {
      observers.forEach(({ observer, target }) => observer.unobserve(target));
      // observer.unobserve(target);
    };
  }, [swiper, setSwiper]);

  return (
    <div className={clsx("container-fluid", styles.container)}>
      <div className={clsx(styles.mainRoot)}>
        <div className={clsx(styles.title)}>
          <h3>SERVICES</h3>
          <p>最新ニュース</p>
        </div>

        <div className="sw-container">
          <div
            id="sw-placeholder"
            className="sw-placeholder"
            style={{ height: `${100 + 30 * data.length}vh` }}
          >
            {Array.from({ length: Math.ceil(data.length / 2) }).map(
              (_, index) => (
                <div className="sw-trigger" data-slide={index} key={index}>
                  index:{index}
                </div>
              )
            )}
          </div>
          <div className="sw-top-layer">
            <div className="sw-sticky-element">
              <div className="sw-bounding">
                <Swiper
                  {...settings}
                  // allowSlideNext={allowTouchMove}
                  // allowSlidePrev={allowTouchMove}
                  allowTouchMove={false}
                  // mousewheel={{}}
                  // onScroll={(swipe, e) => {
                  //   console.log("on scroll", swipe, e);
                  // }}
                  // enabled={false}
                  onSwiper={setSwiper}
                  className=""
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div>
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
                                <img
                                  src={item.img}
                                  className={clsx(styles.mainImage)}
                                />
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
                                    <span id="detail-btn-company-content">
                                      {item.btnContent}
                                    </span>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
