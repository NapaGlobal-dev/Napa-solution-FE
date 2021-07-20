import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
const SlideSection = (props) => {
  const data = convertArrToObject(props.data?.property);

  useEffect(() => {
    $("#carousel-example").on("slide.bs.carousel", function (e) {
      /*
                CC 2.0 License Iatek LLC 2018 - Attribution required
            */
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
    <div class="top-content">
      <div
        class="container-fluid"
        // style="display: flex; justify-content: center; align-items: center; margin-top: 20px; margin-bottom: 20px;"
      >
        <div
          id="carousel-example"
          class="carousel slide container"
          data-ride="carousel"
        >
          <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4 active">
              <a href="http://www.pref.aichi.jp/police/" target="_blank">
                <LazyLoadImage
                  // alt="img1"
                  effect="blur"
                  src={data && data["Slides_List_Img_1"]?.image.origin}
                  placeholderSrc={data["Slides_List_Img_1"]?.image.thumbnail}
                  threshold={100}
                  width="100%"
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </div>
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
              <a href="http://www.jrc.or.jp/" target="_blank">
                <LazyLoadImage
                  // alt="img2"
                  effect="blur"
                  src={data && data["Slides_List_Img_2"]?.image.origin}
                  placeholderSrc={data["Slides_List_Img_2"]?.image.thumbnail}
                  threshold={100}
                  width="100%"
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </div>
            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-4">
              <a href="outsourcing.html" target="_parent">
                <LazyLoadImage
                  // alt="img3"
                  effect="blur"
                  src={data && data["Slides_List_Img_3"]?.image.origin}
                  placeholderSrc={data["Slides_List_Img_3"]?.image.thumbnail}
                  threshold={100}
                  width="100%"
                  className="img-fluid mx-auto d-block"
                />
              </a>
            </div>
          </div>
          <img
            id="carousel-control-prev-footer"
            href="#carousel-example"
            role="button"
            data-slide="prev"
            src={data["Slides_List_Previous"]?.image.original}
            // src="./img/partner/Arrow-left.png"
            class="arrow-left"
          />
          <img
            id="carousel-control-next-footer"
            href="#carousel-example"
            role="button"
            data-slide="next"
            src={data["Slides_List_Next"]?.image.original.thumbnail}
            // src="./img/partner/Arrow-right.png"
            class="arrow-right"
          />
        </div>
      </div>
    </div>
  );
};
export default SlideSection;
