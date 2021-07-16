import React from "react";
import { client } from "../apolo-client";
import Carousel from "../components/home/Carousel";
import Service from "../components/home/Service";
import Company from "../components/home/Company";
import Recruit from "../components/home/Recruit";
import { HomepageQuery } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";

export default function Home(props) {
  // console.log("before", props.data.page.layouts);
  // window.layouts = props.data.page.layouts;

  const data = convertArrToObject(props.data.page.layouts);

  // window.converted = data;
  // console.log("after", data);

  return (
    <div>
      <div id="root" class="container-fluid content-wrapper no-default-spacing">
        <Carousel data={data["Carousel"]} />
        <Service data={data["Service"]} />
        <Company data={data["Company"]} />
        <Recruit data={data["Recruit"]} />
        <iframe
          src="./html/slide.html"
          style={{ border: "unset", marginTop: "20px", width: "100%" }}
        ></iframe>
      </div>
      <a
        onclick="topFunction()"
        href="#root"
        id="scroll"
        style={{ display: "none" }}
      >
        <img src="./img/scroll-top.png" />
      </a>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: HomepageQuery,
  });

  return {
    props: {
      data,
    },
  };
};
