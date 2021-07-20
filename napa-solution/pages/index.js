import { client } from "../apolo-client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Service from "../components/homepage/Service";
import Company from "../components/homepage/Company";
import Recruit from "../components/homepage/Recruit";
import News from "../components/homepage/News";
import Carousel from "../components/homepage/Carousel";
import SlideSection from "../components/homepage/SlideSection";
const Index = (props) => {
  const data = convertArrToObject(props.data.page.layouts);
  console.log("Data Home:", data);
  return (
    <div>
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
        <SlideSection data={data["Carousel"]} />
        <iframe
          src="./html/slide.html"
          style={{ border: "unset", marginTop: "20px", width: "100%" }}
        ></iframe>
      </div>
      <a
        // onclick="topFunction()"
        href="#root"
        id="scroll"
        style={{ display: "none" }}
      >
        <img src="./img/scroll-top.png" />
      </a>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: HomePage });

  return {
    props: { data },
  };
}
export default Index;
