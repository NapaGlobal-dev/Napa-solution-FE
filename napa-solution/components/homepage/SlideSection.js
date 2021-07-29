import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import Head from "next/head";
const SlideSection = (props) => {
  const data = convertArrToObject(props.data?.property);
  const slides = Object.values(data).filter((item) =>
    item.name.includes("Img")
  );
  const slideList = [...slides, ...slides];

  // console.log("slideList", slideList, data);
  useEffect(() => {
    $("#carousel-example").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
      // var owl = $("#carousel-example");
      // owl.owlCarousel({
      //   // items:4,
      //   // loop:true,
      //   // margin:10,
      //   autoplay: false,
      //   // autoplayTimeout:1000,
      //   // autoplayHoverPause:true
      // });

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
      <div className="top-content-project">
        <div className="cs-carousel-container ">
          <div
            id="carousel-example"
            className="carousel slide "
            data-ride="false"
            // data-interval="true"
          >
            <div className="carousel-inner row w-100 mx-auto h-100">
              {slideList.map((item, index) => (
                <div
                  className={
                    index === 0
                      ? "carousel-item col-4 col-xs-4 col-sm-4 col-md-6 col-lg-4 fill active"
                      : "carousel-item col-4 col-xs-4 col-md-6 col-lg-4 fill"
                  }
                  key={index}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    className="imgitem cs-carousel-item_url"
                  >
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      height="100%"
                      className="img-fluid mx-auto d-block"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SlideSection;
