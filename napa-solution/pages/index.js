import { client } from "../apolo-client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
<<<<<<< HEAD
import Service from "../components/homepage/Service";
import Company from "../components/homepage/Company";
import Recruit from "../components/homepage/Recruit";
import News from "../components/homepage/News";
// import Carousel from "../components/homepage/Carousel";
import SlideSection from "../components/homepage/SlideSection";
import Head from "next/head";
import { useEffect } from "react";
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
      </Head>
      <div
        id="root"
        className="container-fluid content-wrapper no-default-spacing"
      >
        {/* <Carousel data={data["Carousel"]} /> */}
        <News data={data["Home_News"]} />
        <div className="blue-line"></div>
        <Service data={data["Service"]} />
        <Company data={data["Company"]} />
        <Recruit data={data["Recruit"]} />
        <SlideSection data={data["Slides_Section"]} />
        {/* <iframe
          src="./html/slide.html"
          style={{ border: "unset", marginTop: "20px", width: "100%" }}
        ></iframe> */}
        <a
          onclick={topFunction}
          href="#root"
=======
import Service from "../components/honepage/Service";
import Company from "../components/honepage/Company";
import Recruit from "../components/honepage/Recruit";
import News from "../components/honepage/News";
import Carousel from "../components/honepage/Carousel";
import Begin from "../components/honepage/Begin/index.js";

import Head from "next/head";

const Index = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  console.log("Data Home:", data);

  return (
    <>
      <Head>
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
      <div>
        <Begin />
        <div
          id="root"
          className="container-fluid content-wrapper no-default-spacing"
        >
          <Carousel data={data["Carousel"]} />
          <News data={data["Home_News"]} />
          <div className="blue-line"></div>
          <Service data={data["Service"]} />
          <Company data={data["Company"]} />
          <Recruit data={data["Recruit"]} />
          <iframe
            src="./html/slide.html"
            style={{ border: "unset", marginTop: "20px", width: "100%" }}
          ></iframe>
        </div>
        <a
          // onclick="topFunction()"
          href=":root"
>>>>>>> master
          id="scroll"
          style={{ display: "none" }}
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
