import { client } from "../apolo-client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
// import Service from "../components/homepage/Service";
import Company from "../components/homepage/Company";
// import Recruit from "../components/homepage/Recruit";
// import News from "../components/homepage/News";
// import Carousel from "../components/homepage/Carousel";
// import Slider from "../components/homepage/Slider";
import Head from "next/head";
import { useEffect } from "react";
import Begin from "../components/homepage/Begin";
import News from "../components/homepage/News/index.js";
import Project from "../components/homepage/Project/index.js";
const Index = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  // console.log("Data Home:", data);
  useEffect(() => {
    $(document).ready(function () {
      $(".more-section-right").on("click", function () {
        const arrowUp = "./img/Symbol156-14.svg";
        const arrowDown = "./img/Symbol156-12.svg";
        const text = $(this).find(".more-content").text();
        $(this)
          .find(".more-content")
          .text(text == "MORE" ? "CLOSE" : "MORE");
        $(this)
          .find(".more-dropdown-icon")
          .attr("src", text == "MORE" ? arrowUp : arrowDown);
      });
    });
    var mybutton = document.getElementById("scroll");

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  });
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
      </Head>
      <Begin />

      <div
        id="root"
        className="container-fluid content-wrapper no-default-spacing"
      >
        {/* <Carousel data={data["Carousel"]} /> */}
        {/* <News data={data["Home_News"]} /> */}
        <News />
        {/* <div className="blue-line"></div>
        <Service data={data["Service"]} /> */}
        <Company data={data["Company"]} />
        {/* <Recruit data={data["Recruit"]} /> */}
        {/* <Slider data={data["Slides_Section"]} /> */}
        <Project data={data["Slides_Section"]} />
        <div style={{ height: 300 }}></div>
        {/* <iframe
          src="./html/slide.html"
          style={{ border: "unset", marginTop: "20px", width: "100%" }}
        ></iframe> */}
        <a
          onclick={topFunction}
          href="#root"
          // onclick="topFunction()"
          href=":root"
          id="scroll"
          style={{ display: "none", visibility: "hidden" }}
        >
          <img src="./img/scroll-top.png" />
        </a>
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
