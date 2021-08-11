import { useQuery } from "@apollo/client";
import { HomePage } from "../query/general";
import { convertArrToObject } from "../util/converArrayToObject";
import Company from "../components/homepage/Company";

import Head from "next/head";

import Begin from "../components/homepage/Begin";
import News from "../components/homepage/News/index.js";
import Service from "../components/homepage/Service/index.js";
import Project from "../components/homepage/Project/index.js";
import ClientSay from "../components/homepage/ClientSay/index.js";
const Index = (props) => {
  const { data, loading, error } = useQuery(HomePage);
  if (error) return <>Your query is Error !</>;
  const datas = loading || convertArrToObject(data.page.layouts);
  const clientSay = loading || data.clientSay;
  return (
    loading || (
      <>
        <Head>
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
        <Begin data={data.banner} />

        <div
          id="root"
          className="container-fluid content-wrapper no-default-spacing"
        >
          <News data={data["Home_News"]} />
          <Service data={datas["Service"]} />
          <Company data={datas["Company"]} />
          <Project data={datas["Slides_Section"]} />
          <ClientSay data={clientSay} />
        </div>
      </>
    )
  );
};

export default Index;
