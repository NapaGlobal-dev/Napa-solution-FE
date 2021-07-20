import { client } from "../apolo-client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
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
