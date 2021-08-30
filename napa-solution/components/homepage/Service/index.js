import styles from "./style.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    imgThumbnail: item?.Image?.image?.thumbnail,
    title: item?.Title?.value,
    subTitle: item?.Content?.value,
    url: item?.Button?.url,
    btnContent: item?.Button?.value,
  }));

  return b;
};

const Service = (props) => {
  const data = convertData(props.data.property);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.update();
      swiperRef.updateProgress();
      swiperRef.updateSize();
      swiperRef.updateSlides();
    }
  }, [swiperRef, setSwiperRef]);

  return (
    <>
      <Swiper
        className="sw-container"
        onSwiper={setSwiperRef}
        direction={"vertical"}
        slidesPerView={2}
        mousewheel
        slidesPerGroup={2}
        nested
      >
        <div
          className={clsx("container-fluid", styles.container)}
          style={{ display: "none" }}
        >
          <div className={clsx(styles.mainRoot)}>
            <div className={clsx(styles.title)}>
              <h3>SERVICES</h3>
              <p>最新ニュース</p>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <SwiperSlide className="sw-slide-services " key={index}>
            <div className="sw-box-bounding">
              <div className="sw-box-content" key={index}>
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
                        <LazyLoadImage
                          effect="blur"
                          src={item.img}
                          placeholderSrc={item.imgThumbnail}
                          threshold={100}
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
                        <h3
                          id='down-up'
                        >
                          {item.title}
                        </h3>
                        <p
                          id='down-up'
                        >
                          {item.subTitle}
                        </p>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Service;
