import React, { useEffect } from "react";
import SlideSection from "../SlideSection";
import Slider from "react-slick";
import { convertArrToObject } from "../../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef } from "react";
import { useRouter } from "next/router";
import { GET_SERVICE_URL } from "../../../query/general";
import { useQuery } from "@apollo/client";

const settings = {
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20%",
      },
    },
  ],
};

const Project = (props) => {
  const slickRef = useRef(null);
  const router = useRouter();

  const { loading, error, data: serviceData } = useQuery(GET_SERVICE_URL);
  const service =
    !loading && !error && convertArrToObject(serviceData.page, "nameEN");
  const serviceUrl =
    !loading && service.Services.childrenPage.map((item) => item.url);
  const data = convertArrToObject(props.data?.property);
  // let slides = Object.values(data).filter((item) => item.name.includes("Img"));
  let slides =
    !loading && serviceUrl.includes(`/service/${router.query.slug}`)
      ? Object.values(data).filter(
          (item) =>
            item.name.includes("Img") &&
            item?.value.split(",").includes(router.query.slug)
        )
      : Object.values(data).filter((item) => item.name.includes("Img"));
  if (slides.length <= 6) slides = [...slides, ...slides];
  if (slides.length == 0) return <></>;
  const handleClickUrl = (url) => {
    if (new RegExp(",").test(url)) {
      var urls = url.split(",");
      const c = urls.filter(
        (item) => item != `/service/${router.query.slug}/${router.query.pid}`
      );
      if (urls.length > 0) router.push(`${c[0]}`);
      else router.push(`/service/${router.query.slug}/${router.query.pid}`);
      return;
    }
    router.push(`${url}`);
  };
  return (
    // !loading && (
    <div className="sl-container">
      <div className="sl-pos-relative">
        <div className="sl-container-ratio"></div>
        <div className="sl-box-color">
          <div className="sl-box-text">
            <h4 className="sl-box-title" id="down-up">
              {data["Slides_List_Title"]?.value}
            </h4>
            <p className="sl-box-subtitle" id="down-up">
              {data["Slides_List_Subtitle"]?.value}
            </p>
            <div className="sl-quarter-img">
              <img height="100%" src="/img/home/box-style.svg" />
            </div>
            <div className="sl-control">
              <img
                src="/img/home/arrow-left.svg"
                id="carousel-control-prev-footer"
                href="#carousel-example"
                data-slide="prev"
                onClick={() => slickRef.current.slickPrev()}
              />
              <img
                src="/img/home/arrow-right.svg"
                id="carousel-control-next-footer"
                href="#carousel-example"
                data-slide="next"
                onClick={() => slickRef.current.slickNext()}
              />
            </div>
          </div>
        </div>

        <div className="sl-slider">
          <Slider className="sl-slick-container" {...settings} ref={slickRef}>
            {slides.map((item, index) => (
              <div key={index} className="sl-full-height">
                <div className=" sl-full-height sl-carousel-item_flex">
                  <div className="sl-carousel-item_spacing">
                    <div
                      onClick={() => handleClickUrl(item.url)}
                      target="_blank"
                      className="sl-carousel-item_url"
                    >
                      <img
                        src={item?.image.original}
                        alt="imgSlide"
                        width="100%"
                        className="sl-img-item"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* <SlideSection data={props.data} /> */}
        </div>
      </div>
    </div>
    // )
  );
};

export default Project;
