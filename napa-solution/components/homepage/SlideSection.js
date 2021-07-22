import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useEffect } from "react";
import Head from "next/head";
const SlideSection = (props) => {
  const data = convertArrToObject(props.data?.property);
  const slideList = Object.values(data).filter((item) =>
    item.name.includes("Img")
  );
  // console.log("slideList", slideList, data);
  useEffect(() => {
    $("#carousel-example").on("slide.bs.carousel", function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
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
      <div
        className="top-content-project"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          // className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "20px",
            // marginBottom: "20px",
            width: "100%",
          }}
        >
          <div
            id="carousel-example"
            className="carousel slide container"
            data-ride="carousel"
            style={{ width: "100%" }}
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
                  style={{
                    // display: "flex",
                    // alignItems: "center",
                    // flexDirection: "column",
                    height: "275px",
                    width: "auto",
                    // flexWrap: "nowrap",
                  }}
                  // className="crsitem"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    style={{
                      background:
                        "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      boxShadow: "0px 3px 6px #00000029",
                      opacity: 1,
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      border: "0.5px solid gray",
                    }}
                  >
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      height="174px"
                      className="img-fluid mx-auto d-block"
                      className="imgitem"
                    />
                  </a>
                </div>
              ))}

              {slideList.map((item, index) => (
                <div
                  className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4"
                  key={slideList.length + index}
                  style={{
                    width: "auto",
                    height: "275px",
                    // display: "flex",
                    // alignItems: "center",
                    // flexDirection: "column",
                    // flexWrap: "nowrap",
                  }}
                  // className="crsitem"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      background:
                        "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      boxShadow: "0px 3px 6px #00000029",
                      opacity: 1,
                      border: "0.5px solid gray",
                    }}
                  >
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      className="img-fluid mx-auto d-block w-100 h-100"
                      height="174px"
                      className="imgitem"
                    />
                  </a>
                </div>
              ))}

              {/* {slideList.map((item, index) => (
                <div
                  className="carousel-item col-12 col-sm-6 col-md-4 col-lg-4"
                  key={slideList.length + index}
                  style={{
                    width: "auto",
                    height: "275px",
                    // marginLeft: "8px",
                  }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      background:
                        "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      boxShadow: "0px 3px 6px #00000029",
                      opacity: 1,
                    }}
                  >
                    <LazyLoadImage
                      alt="imgSlide"
                      effect="blur"
                      src={item?.image.original}
                      placeholderSrc={item?.image.thumbnail}
                      threshold={100}
                      width="100%"
                      className="img-fluid mx-auto d-block w-100 h-100"
                      height="174px"
                      className="imgitem"
                    />
                  </a>
                </div>
              ))} */}
            </div>
            {/* <LazyLoadImage
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
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default SlideSection;
