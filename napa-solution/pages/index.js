import { GET_CASESTUDIES, HomePage } from "../query/general";
import {
  convertArrToObject,
  convertArrToObjectBySpecialName,
} from "../util/converArrayToObject";
import Company from "../components/jp/homepage/Company";
import Head from "next/head";
import Begin from "../components/jp/homepage/Begin";
import Service from "../components/jp/homepage/Service/index.js";
import ClientSay from "../components/jp/homepage/ClientSay/index.js";
import { client } from "../apolo-client";
import { OurWorksCpn } from "../components/jp/case-study/ourworks/index.js";
import  ENHome  from "../components/en/home/index.js"
import { useContext } from "react";
import { StoreContext } from "../util/language/store";

const Index = ({ footer, data, ...props }) => {
  const datas = convertArrToObject(data.page.layouts);
  const clientSay = data.clientSay;
  const {
    language: [languageId, setLanguageId]
  } = useContext(StoreContext);
  return (
    <>
      {languageId === 2 ? (
        <>
          <Head>
            <link
              key="/css/home-page.module.css"
              rel="stylesheet"
              href="/css/home-page.module.css"
            />

            <link
              key="/css/home-page-slide.css"
              rel="stylesheet"
              href="/css/home-page-slide.css"
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

          <div className="">
            <Begin data={data.banner} />
            <Service data={datas["Service"]} />
            <div
              id="root"
              className="container-fluid content-wrapper no-default-spacing"
            >
              <Company data={datas["Company"]} />
              {/* <Project data={datas["Slides_Section"]} /> */}
              <OurWorksCpn center isRow={true} data={props.caseStudies} />
              <ClientSay data={clientSay} />
            </div>
            {footer}
          </div>
        </>
      ) : <ENHome />}
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: HomePage });
  const caseStudies = await client.query({
    query: GET_CASESTUDIES,
  });

  return {
    props: {
      data,
      caseStudies: caseStudies.data,
    },
  };
}
export default Index;
