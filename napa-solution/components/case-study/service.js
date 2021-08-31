import Head from "next/head";

export default function Service(props) {
  const { data } = props;
  const getValue = (content, name) => {
    return Object.values(content).filter((it) => it.name.includes(name))[0]
      .value;
  };
  const getImg = (content, name) => {
    return Object.values(content).filter((it) => it.name.includes(name))[0]
      .image.original;
  };

  return (
    <>
      <Head>
        <link key="/css/banner.css" rel="stylesheet" href="/css/banner.css" />
      </Head>
      <div className="wrap-case sl-container">
        {data.map((item, index) =>
          index % 2 == 0 ? (
            <div className="case-layout" key={index}>
              <div
                className="case-img"
                style={{
                  background: `${getValue(
                    item.content,
                    "RealEstate_Service_Background"
                  )}`,
                }}
              >
                <img src={getImg(item.content, "RealEstate_Service_ImgCase")} />
              </div>
              <div className="case-item">
                <div className="service-name">
                  {getValue(item.content, "RealEstate_Service_ServiceName")}
                </div>
                <div className="case-name">
                  {getValue(item.content, "RealEstate_Service_CaseName")}
                </div>
                <div className="case-content">
                  {getValue(item.content, "RealEstate_Service_CaseContent")}
                </div>
                <div className="case-program">
                  <img
                    src={getImg(item.content, "RealEstate_Service_ImgProgram")}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="case-layout left" key={index}>
              <div className="case-item">
                <div className="service-name">
                  {getValue(item.content, "RealEstate_Service_ServiceName")}
                </div>
                <div className="case-name">
                  {getValue(item.content, "RealEstate_Service_CaseName")}
                </div>
                <div className="case-content">
                  {getValue(item.content, "RealEstate_Service_CaseContent")}
                </div>
                <div className="case-program">
                  <img
                    src={getImg(item.content, "RealEstate_Service_ImgProgram")}
                  />
                </div>
              </div>
              <div
                className="case-img"
                style={{
                  background: `${getValue(
                    item.content,
                    "RealEstate_Service_Background"
                  )}`,
                }}
              >
                <img src={getImg(item.content, "RealEstate_Service_ImgCase")} />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
