import Head from "next/head";
import clsx from "clsx";
import styles from "./style.module.css";
const data = {
  title: "MESSAGE",
  subTitle: "代表の想い",
  slider: [
    {
      itemTitle: "ごあいさつ 1",
      content:
        "Azel Leは情報技術業界で10年以上の実務経験を持つ連続起 業家であり、経験豊富な技術者です。彼は組み込みシステ ム分野の専門家であり、多くの自動車会社に困難なエンジ ニアリング問題を解決するのを支援してきました。Azel Le はITおよび国際取引でサービスをご提供いたしますいくつか のスタートアップを設立しました。Azelは、NAPA Globalネ ットワークの拡大を支援するとともに、クライアントに高 品質のサービスをご提供いたしますために、ビジョンと専 門知識をもたらし続けています。",
      role: "代表取締役",
      name: "アゼル・レー",
      img: "img/ceo.png",
    },
    {
      itemTitle: "ごあいさつ 2",
      content:
        "Azel Leは情報技術業界で10年以上の実務経験を持つ連続起 業家であり、経験豊富な技術者です。彼は組み込みシステ ム分野の専門家であり、多くの自動車会社に困難なエンジ ニアリング問題を解決するのを支援してきました。Azel Le はITおよび国際取引でサービスをご提供いたしますいくつか のスタートアップを設立しました。Azelは、NAPA Globalネ ットワークの拡大を支援するとともに、クライアントに高 品質のサービスをご提供いたしますために、ビジョンと専 門知識をもたらし続けています。",
      role: "代表取締役",
      name: "アゼル・レー",
      img: "img/ceo.png",
    },
    {
      itemTitle: "ごあいさつ 3",
      content:
        "Azel Leは情報技術業界で10年以上の実務経験を持つ連続起 業家であり、経験豊富な技術者です。彼は組み込みシステ ム分野の専門家であり、多くの自動車会社に困難なエンジ ニアリング問題を解決するのを支援してきました。Azel Le はITおよび国際取引でサービスをご提供いたしますいくつか のスタートアップを設立しました。Azelは、NAPA Globalネ ットワークの拡大を支援するとともに、クライアントに高 品質のサービスをご提供いたしますために、ビジョンと専 門知識をもたらし続けています。",
      role: "代表取締役",
      name: "アゼル・レー",
      img: "img/ceo.png",
    },
    {
      itemTitle: "ごあいさつ 4",
      content:
        "Azel Leは情報技術業界で10年以上の実務経験を持つ連続起 業家であり、経験豊富な技術者です。彼は組み込みシステ ム分野の専門家であり、多くの自動車会社に困難なエンジ ニアリング問題を解決するのを支援してきました。Azel Le はITおよび国際取引でサービスをご提供いたしますいくつか のスタートアップを設立しました。Azelは、NAPA Globalネ ットワークの拡大を支援するとともに、クライアントに高 品質のサービスをご提供いたしますために、ビジョンと専 門知識をもたらし続けています。",
      role: "代表取締役",
      name: "アゼル・レー",
      img: "img/ceo.png",
    },
    {
      itemTitle: "ごあいさつ 5",
      content:
        "Azel Leは情報技術業界で10年以上の実務経験を持つ連続起 業家であり、経験豊富な技術者です。彼は組み込みシステ ム分野の専門家であり、多くの自動車会社に困難なエンジ ニアリング問題を解決するのを支援してきました。Azel Le はITおよび国際取引でサービスをご提供いたしますいくつか のスタートアップを設立しました。Azelは、NAPA Globalネ ットワークの拡大を支援するとともに、クライアントに高 品質のサービスをご提供いたしますために、ビジョンと専 門知識をもたらし続けています。",
      role: "代表取締役",
      name: "アゼル・レー",
      img: "img/ceo.png",
    },
  ],
};
const Message = (props) => {
  return (
    <>
      <Head>
        <link key="css/carousel.css" rel="stylesheet" href="css/carousel.css" />
      </Head>
      <div className="container-fluid">
        <div className={clsx(styles.cover)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58.948"
            height="124.343"
            viewBox="0 0 58.948 124.343"
          >
            <g
              id="Group_135"
              data-name="Group 135"
              transform="translate(-98.543 -1182.829)"
            >
              <line
                id="Line_88"
                data-name="Line 88"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
              />
              <line
                id="Line_89"
                data-name="Line 89"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="6"
              />
              <line
                id="Line_90"
                data-name="Line 90"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
              />
            </g>
          </svg>
          <h3>{data.title}</h3>
          <p>{data.subTitle}</p>
          <div className={clsx(styles.slider)}>
            <div
              id="carouselExampleControls"
              class="carousel vert slide"
              // data-ride="carousel"
              // data-interval="900"
            >
              {/* <div className={clsx(styles.controler)}> */}

              <ol class="carousel-indicators">
                <a
                  class={("carousel-control-prev", clsx(styles.prev))}
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-up"
                    class="svg-inline--fa fa-long-arrow-alt-up fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z"
                    ></path>
                  </svg>
                </a>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <a
                  class={("carousel-control-next", clsx(styles.next))}
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="long-arrow-alt-down"
                    class="svg-inline--fa fa-long-arrow-alt-down fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"
                    ></path>
                  </svg>
                </a>
              </ol>
              <div class="carousel-inner">
                {/* <div class="carousel-item active">
                  <img
                    class="d-block mx-auto img-fluid"
                    src="//via.placeholder.com/800x400"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto img-fluid"
                    src="//via.placeholder.com/800x400/dd4444/fff"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block mx-auto img-fluid"
                    src="//via.placeholder.com/800x400/777"
                    alt="Third slide"
                  />
                </div> */}
                {data.slider.map((item, index) => (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                    key={index}
                    // className={clsx(styles.coverItemInner)}
                  >
                    <div className={clsx(styles.coverItemInner)}>
                      <div className={clsx(styles.covermessage)}>
                        <div className={clsx(styles.message)}>
                          <h4>{item.itemTitle}</h4>
                          <p>{item.content}</p>
                          <div className={clsx(styles.sign)}>
                            <p>{item.role}</p>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </div>
                      <img
                        src={item.img}
                        className={clsx(styles.img)}
                        // class="d-block mx-auto img-fluid"
                        // width="550"
                        // height="550"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
