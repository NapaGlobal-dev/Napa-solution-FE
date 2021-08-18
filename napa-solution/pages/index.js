import { useQuery } from "@apollo/client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Company from "../components/homepage/Company";
import Head from "next/head";
import Begin from "../components/homepage/Begin";
import News from "../components/homepage/News/index.js";
import Service from "../components/homepage/Service/index.js";
import Project from "../components/homepage/Project/index.js";
import ClientSay from "../components/homepage/ClientSay/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel } from "swiper";
import { client } from "../apolo-client";

import "swiper/swiper.min.css";
import { useEffect, useRef, useState } from "react";

SwiperCore.use([Mousewheel]);

const Index = ({ footer, data, ...props }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const onTopBtnRef = useRef();

  // const { data, loading, error } = useQuery(HomePage);
  // if (error) return <>Your query is Error !</>;
  // const datas = loading || convertArrToObject(data.page.layouts);
  // const clientSay = loading || data.clientSay;
  const datas = convertArrToObject(data.page.layouts);
  const clientSay = data.clientSay;

  useEffect(() => {
    if (swiperRef) {
      swiperRef.update();
      swiperRef.updateProgress();
      swiperRef.updateSize();
      swiperRef.updateSlides();
    }
  }, [swiperRef, setSwiperRef]);

  const scrollToTop = () => {
    if (swiperRef) {
      swiperRef.slideTo(0);
    }
  };

  const toggleScrollTopBtn = (sw) => {
    console.log(sw.activeIndex);

    if (onTopBtnRef.current) {
      if (sw.activeIndex > 0) {
        onTopBtnRef.current.classList.add("ot-container-visible");
      } else {
        onTopBtnRef.current.classList.remove("ot-container-visible");
      }
    }
  };

  return (
    <>
      <Head>
        {/* <link key="css/common.css" rel="stylesheet" href="css/common.css" /> */}
        <link
          key="css/home-page.module.css"
          rel="stylesheet"
          href="css/home-page.module.css"
        />

        <link
          key="css/home-page-slide.css"
          rel="stylesheet"
          href="css/home-page-slide.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          integrity="sha512-L/EyzxvZCddd652hKB4w2gEaZgCZSOaH0Ia6JoEGysTu27VnWvej5ipuBnru/iDhPWMO0AvwiVd0HHVUHWeDRA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        {/* <link rel="stylesheet" href="/node_modules/swiper/swiper.scss" /> */}
      </Head>
      <Swiper
        className="sw-container "
        onSwiper={setSwiperRef}
        onSlideChange={toggleScrollTopBtn}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel
        // enabled={false}
      >
        <SwiperSlide className="sw-slide-all-page ">
          <Begin data={data.banner} />
        </SwiperSlide>
        <SwiperSlide className="sw-slide-all-page ">
          <Service data={datas["Service"]} />
        </SwiperSlide>
        <SwiperSlide className="sw-slide-all-page ">
          <Swiper
            className="sw-container"
            direction={"vertical"}
            slidesPerView={"auto"}
            mousewheel
            freeMode
            nested
            onScroll={(sw, e) => sw.update()}
            onTouchStart={(sw, e) => sw.update()}
          >
            <SwiperSlide className="sw-slide-free-mode ">
              <div
                id="root"
                className="container-fluid content-wrapper no-default-spacing"
              >
                {/* <News data={data["Home_News"]} /> */}

                <Company data={datas["Company"]} />
                <Project data={datas["Slides_Section"]} />
                <ClientSay data={clientSay} />
              </div>
              {footer}
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
      {/* <div ref={onTopBtnRef} className="ot-container" onClick={scrollToTop}>
        <img className="ot-image" src="./img/scroll-top.png" />
      </div> */}
      <div
        ref={onTopBtnRef}
        className="scroll_to_top "
        id="scrollToTop"
        onClick={scrollToTop}
      >
        <img
          src="./img/scroll-top.png"
          style={{
            height: 30,
            width: "auto",
            marginRight: 12,
            outline: "none",
            webkitUserSelect: "none",
            mozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: HomePage });

  return {
    props: { data },
  };
}
export default Index;
