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
  getList(data[1].content, "ImgProgram").map((e,ind)=>{
    console.log(e.value)
  })
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
                  {item.content &&
                    getList(item.content, "CaseContent")?.map((e, ind) => (
                      <p key={ind}>{e.value}</p>
                    ))}
                </div>
                <div className="case-program">
                  {item.content &&
                    getList(item.content, "ImgProgram")?.map((e, ind) => (
                      <div key = {ind}>
                        <img src={e?.image.original} key={ind} />
                        <p key={ind}> {e?.value}</p>
                      </div>
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
                  {item.content &&
                    getList(item.content, "CaseContent")?.map((e, ind) => (
                      <p key={ind}>{e.value}</p>
                    ))}
                </div>
                <div className="case-program animate-down-up">
                  {item.content &&
                    getList(item.content, "ImgProgram")?.map((e, ind) => (
                      <div key = {ind} className="tech-name">
                        <img src={e?.image.original} key={ind} />
                        <p key={ind}> {e?.value}</p>
                      </div>
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
