import { convertArrToObject } from "../../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import Head from "next/head";
const Slider = (props) => {
  const data = convertArrToObject(props.data?.property);
  const slideList = Object.values(data).filter((item) =>
    item.name.includes("Img")
  );
  // console.log("slideList", slideList, data);
  useEffect(() => {
    $("#carousel-example").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 5;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item").eq(i).appendTo(".carousel-inner");
          } else {
            $(".carousel-item").eq(0).appendTo(".carousel-inner");
          }
        }
      }
    });
    return () => {};
  }, []);
  return (
    <>
      <Head>
        <link key="css/common.css" rel="stylesheet" href="css/common.css" />
        <link
          key="css/slides-section.module.css"
          rel="stylesheet"
          href="css/slides-section.module.css"
        />
      </Head>
      <div className="top-content">
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            id="carousel-example"
            className="carousel slide container"
            data-ride="carousel"
          >
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
              {slideList.map((item, index) => (
                <div
                  className={
                    index === 0
                      ? "carousel-item col-12 col-sm-6 col-md-4 col-lg-4 active"
                      : "carousel-item col-12 col-sm-6 col-md-4 col-lg-4"
                  }
                  key={index}
                >
                  <a href={item.url} target="_blank">
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      className="img-fluid mx-auto d-block"
                    />
                  </a>
                </div>
              ))}

              {slideList.map((item, index) => (
                <div
                  className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4"
                  key={slideList.length + index}
                >
                  <a href={item.url} target="_blank">
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      className="img-fluid mx-auto d-block"
                    />
                  </a>
                </div>
              ))}
            </div>
            <LazyLoadImage
              alt="imgbtnprev"
              effect="blur"
              src={data["Slides_List_Previous"]?.image.original}
              placeholderSrc={data["Slides_List_Previous"]?.image.thumbnail}
              threshold={100}
              // width="100%"
              id="carousel-control-prev-footer"
              href="#carousel-example"
              role="button"
              data-slide="prev"
              className="arrow-left"
            />
            <LazyLoadImage
              alt="imgbtnnext"
              effect="blur"
              src={data["Slides_List_Next"]?.image.original}
              placeholderSrc={data["Slides_List_Next"]?.image.thumbnail}
              threshold={100}
              // width="100%"
              id="carousel-control-next-footer"
              href="#carousel-example"
              role="button"
              data-slide="next"
              className="arrow-right"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
