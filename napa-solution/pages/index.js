import { client } from "../apolo-client";
import { useQuery } from "@apollo/client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Company from "../components/homepage/Company";
// import Recruit from "../components/homepage/Recruit";
// import News from "../components/homepage/News";
// import Carousel from "../components/homepage/Carousel";
// import Slider from "../components/homepage/Slider";
import Head from "next/head";
// import { useEffect } from "react";
import Begin from "../components/homepage/Begin";
import News from "../components/homepage/News/index.js";
import Service from "../components/homepage/Service/index.js";
import Project from "../components/homepage/Project/index.js";
import ClientSay from "../components/homepage/ClientSay/index.js";

const Index = ({ footer, ...props }) => {
  const { data, loading, error } = useQuery(HomePage);
  if (error) return <>Your query is Error !</>;
  const datas = loading || convertArrToObject(data.page.layouts);
  const clientSay = loading || data.clientSay;
  // console.log("Data Home:", data);
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(".more-section-right").on("click", function () {
  //       const arrowUp = "./img/Symbol156-14.svg";
  //       const arrowDown = "./img/Symbol156-12.svg";
  //       const text = $(this).find(".more-content").text();
  //       $(this)
  //         .find(".more-content")
  //         .text(text == "MORE" ? "CLOSE" : "MORE");
  //       $(this)
  //         .find(".more-dropdown-icon")
  //         .attr("src", text == "MORE" ? arrowUp : arrowDown);
  //     });
  //   });
  //   var mybutton = document.getElementById("scroll");

  //   window.onscroll = function () {
  //     scrollFunction();
  //   };

  return (
    loading || (
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
        </Head>

        <div className="scroll-snap-container">
          <div className="scroll-snap-section">
            <Begin data={data.banner} />
          </div>
          <Service data={datas["Service"]} />

          <div className="scroll-snap-section">
            <div
              id="root"
              className="container-fluid content-wrapper no-default-spacing"
            >
              <Company data={datas["Company"]} />
              <Project data={datas["Slides_Section"]} />
              <ClientSay data={clientSay} />
              {footer}
            </div>
          </div>
        </div>
      </>
    )
  );
};

// export async function getStaticProps() {
//   const { data } = await client.query({ query: HomePage });

//   return {
//     props: { data },
//   };
// }
export default Index;
