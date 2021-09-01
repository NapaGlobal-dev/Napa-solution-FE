import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Company from "../components/homepage/Company";
import Head from "next/head";
import Begin from "../components/homepage/Begin";
import Service from "../components/homepage/Service/index.js";
import Project from "../components/homepage/Project/index.js";
import ClientSay from "../components/homepage/ClientSay/index.js";
import { client } from "../apolo-client";

const Index = ({ footer, data, ...props }) => {
  const datas = convertArrToObject(data.page.layouts);
  const clientSay = data.clientSay;

  return (
    <>
      <Head>
        <link
          key="css/header.module.css"
          rel="stylesheet"
          href="css/header.module.css"
        />
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

        {/* <link rel="stylesheet" href="/node_modules/swiper/swiper.scss" /> */}
      </Head>

      <div className="">
        <Begin data={data.banner} />
        <Service data={datas["Service"]} />
        <div
          id="root"
          className="container-fluid content-wrapper no-default-spacing"
        >
          <Company data={datas["Company"]} />
          <Project data={datas["Slides_Section"]} />
          <ClientSay data={clientSay} />
        </div>
        {footer}
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
