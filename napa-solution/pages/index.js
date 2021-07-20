import { client } from "../apolo-client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Service from "../components/honepage/Service";
import Company from "../components/honepage/Company";
import Recruit from "../components/honepage/Recruit";
import News from "../components/honepage/News";
import Carousel from "../components/honepage/Carousel";
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
