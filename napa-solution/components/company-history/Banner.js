import { LazyLoadImage } from "react-lazy-load-image-component";
import { getData } from "../../util/converArrayToObject";
import Head from "next/head";

export default function Banner({ data }) {
  const banner = getData(data, /CompanyHistory_Banner_Banner/)[0];
  const title = getData(data, /CompanyHistory_Banner_Title/)[0];
  const subtitle = getData(data, /CompanyHistory_Banner_SubTitle/)[0];
  const content = getData(data, /CompanyHistory_Banner_Content/)[0];
  const subcontent = getData(data, /CompanyHistory_Banner_SubContent/)[0];
  return (
    <>
      <Head>
        <link key="css/banner.css" rel="stylesheet" href="css/banner.css" />
      </Head>
      <div className="banner">
        <LazyLoadImage
          effect="blur"
          src={banner?.image?.original}
          placeholderSrc={banner?.image?.thumbnail}
          threshold={100}
          height="100%"
          width="100%"
          className="image-header"
        />
        <div className="border-titleA">
          <h1 style={{ letterSpacing: -3, fontSize: "3.3rem" }}>
            Company History
          </h1>
          <div style={{ marginTop: 20, fontSize: "1.2rem" }}>
            {banner ? banner.value : "お問い合わせ"}
          </div>
        </div>
        <div className="textB">
          <div className="titleB">
            ナパソリューションズに、ご興味をお持ちいただきありがとうございます。
          </div>
          <div className="subtitleB">
            ナパソリューションズは情報テクノロジーサービスの最高のプロバイダーです。私たちは、世界中のお客様に最適化ソリューションを提供しています。
            私たちの使命は、クライアントとパートナーに満足するテクノロジー製品を構築する。一緒！私たちと一緒にあなたのビジョンを実現してください。
          </div>
        </div>
      </div>
    </>
  );
}
