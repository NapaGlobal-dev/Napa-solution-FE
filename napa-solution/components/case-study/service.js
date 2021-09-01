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
  const getList = (content, name) => {
    return Object.values(content).filter((it) => it.name.includes(name));
  };
  return (
    <>
      <Head>
        <link key="/css/banner.css" rel="stylesheet" href="/css/banner.css" />
      </Head>
      <div className="wrap-case sl-container">
        {data?.map((item, index) =>
          index % 2 == 0 ? (
            <div className="case-layout" key={index}>
              <div
                className="case-img"
                style={{
                  background: `${item.content && getValue(item.content, "Background")
                    }`,
                }}
              >
                <img src={item.content && getImg(item.content, "ImgCase")} />
                <img className="fire-small animate-bottom-right" src="/img/icon-fire.png" />
                <img className="fire-large animate-bottom-right" src="/img/icon-fire.png" />
              </div>
              <div className="case-item">
                <div className="service-name">
                  {item.content && getValue(item.content, "ServiceName")}
                </div>
                <div className="case-name">
                  {item.content && getValue(item.content, "CaseName")}
                </div>
                <div className="case-content">
                  {item.content && getValue(item.content, "CaseContent")}
                </div>
                <div className="case-program">
                  {getList(item.content, "ImgProgram")?.map((e, ind) => (
                    <img src={e?.image.original} key={ind} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="case-layout left" key={index}>
              <div className="case-item">
                <div className="service-name animate-down-up">
                  {item.content && getValue(item.content, "ServiceName")}
                </div>
                <div className="case-name animate-down-up">
                  {item.content && getValue(item.content, "CaseName")}
                </div>
                <div className="case-content animate-down-up">
                  {item.content && getValue(item.content, "CaseContent")}
                </div>
                <div className="case-program animate-down-up">
                  {getList(item.content, "ImgProgram")?.map((e, ind) => (
                    <img src={e?.image.original} key={ind} />
                  ))}
                </div>
              </div>
              <div
                className="case-img"
                style={{
                  background: `${item.content && getValue(item.content, "Background")
                    }`,
                }}
              >
                <img src={item.content && getImg(item.content, "ImgCase")} />
                <img className="fire-small animate-bottom-right" src="/img/icon-fire.png" />
                <img className="fire-large animate-bottom-right" src="/img/icon-fire.png" />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
