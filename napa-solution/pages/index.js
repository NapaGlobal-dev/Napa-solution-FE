import {
  GET_CASESTUDIES,
  HOME_PAGE,
  GET_IMAGE_PROPERTIES,
} from "../query/general";
import {
  convertArrToObject,
  convertArrToObjectBySpecialName,
} from "../util/converArrayToObject";
import Company from "../components/homepage/Company";
import Head from "next/head";
import Begin from "../components/homepage/Begin";
import Service from "../components/homepage/Service/index.js";
// import Project from "../components/homepage/Project/index.js";
import ClientSay from "../components/homepage/ClientSay/index.js";
import { client } from "../apolo-client";
import { OurWorksCpn } from "../components/case-study/ourworks/index.js";

const Index = ({ footer, data, ...props }) => {
  const datas = convertArrToObject(data.page.layouts);
  const clientSay = data.clientSay;
  const convertImageSeo = convertArrToObject(
    props.imagePropertions.data.allProperties
  );
  const imageSeo = convertImageSeo["Image_Preview_Home"]?.image?.original; 
  return (
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
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          integrity="sha512-L/EyzxvZCddd652hKB4w2gEaZgCZSOaH0Ia6JoEGysTu27VnWvej5ipuBnru/iDhPWMO0AvwiVd0HHVUHWeDRA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* <link rel="stylesheet" href="/node_modules/swiper/swiper.scss" /> */}
        <meta property="og:image" content={imageSeo}></meta>
      </Head>

      <div className="">
        <Begin data={data.banner} />
        <Service data={datas["Home_Service"]} />
        <div
          id="root"
          className="container-fluid content-wrapper no-default-spacing"
        >
          <Company data={datas["Home_Company"]} />
          {/* <Project data={datas["Slides_Section"]} /> */}
          <OurWorksCpn center isRow={true} data={props.caseStudies} />
          <ClientSay data={clientSay} />
        </div>
        {footer}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: HOME_PAGE });
  const caseStudies = await client.query({
    query: GET_CASESTUDIES,
  });
  const imagePropertions = await client.query({
    query: GET_IMAGE_PROPERTIES,
    variables: { name: "Image_Preview_Home" },
  });

  return {
    props: {
      data,
      caseStudies: caseStudies.data,
      imagePropertions: imagePropertions,
    },
  };
}
export default Index;
