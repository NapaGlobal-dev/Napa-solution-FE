import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../query/general";

export default function Home() {
  const { data, loading, error } = useQuery(GET_NEWS, {});
  return (
    <div>
      <div id="root" class="container-fluid content-wrapper no-default-spacing">
        <nav
          id="navbar"
          class="navbar navbar-expand-lg navbar-light bg-light no-default-spacing"
        >
          <a class="navbar-brand no-default-spacing" href="index.html">
            <img
              alt="LOGO"
              src="./img/index-image-01.svg"
              class="img-navbar-brand"
            />
          </a>
          <div class="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item item-navbar-menu active">
                <img
                  alt="icon-navbar-menu"
                  src="./img/Symbol46-10.svg"
                  class="icon-navbar-menu"
                />
                <a href="index.html" class="text-navbar-menu">
                  HOME
                </a>
              </li>
              <li class="nav-item item-navbar-menu">
                <img
                  alt="icon-navbar-menu"
                  src="./img/Symbol46-10.svg"
                  class="icon-navbar-menu"
                />
                <a href="business-summary.html" class="text-navbar-menu">
                  事業概要
                </a>
              </li>
              <li class="nav-item item-navbar-menu">
                <img
                  alt="icon-navbar-menu"
                  src="./img/Symbol46-10.svg"
                  class="icon-navbar-menu"
                />
                <a href="company.html" class="text-navbar-menu">
                  企業情報
                </a>
              </li>
              <li class="nav-item item-navbar-menu">
                <img
                  alt="icon-navbar-menu"
                  src="./img/Symbol46-10.svg"
                  class="icon-navbar-menu"
                />
                <a href="recruit.html" class="text-navbar-menu">
                  採用情報
                </a>
              </li>
              <li class="nav-item item-navbar-menu">
                <img
                  alt="icon-navbar-menu"
                  src="./img/Symbol46-10.svg"
                  class="icon-navbar-menu"
                />
                <a href="contact.html" class="text-navbar-menu">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <button
            id="navbar-toggler"
            class="navbar-toggler no-default-spacing"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img alt="button-collapse" src="./img/index-image-03.svg" />
          </button>
        </nav>
        <div class="content-wrapper">
          <div class="carousel-wrapper"></div>
          <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators" id="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
              <li data-target="#carousel" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" id="carousel-item-1">
                <div id="carousel-caption" class="carousel-caption">
                  <span class="carousel-caption-primary">
                    エネルギーと地球環境を守る
                  </span>
                  <div class="carousel-text-wrapper">
                    <span class="carousel-caption-secondary">
                      トータルファシリティマネジメント企業
                    </span>
                    <div class="blue-under-line"></div>
                  </div>
                </div>
                <a href="company.html">
                  <div class="detail-btn">
                    <img
                      src="./img/index-image-04.svg"
                      class="detail-btn-icon"
                    />
                    <span class="detail-btn-text">企業情報</span>
                  </div>
                </a>
              </div>
              <div class="carousel-item" id="carousel-item-2">
                <div id="carousel-caption" class="carousel-caption">
                  <span
                    class="carousel-caption-primary"
                    id="carousel-caption-primary-02"
                  >
                    建物設備メンテナンスサービスを通じて、
                  </span>
                  <div class="carousel-text-wrapper">
                    <span class="carousel-caption-secondary">
                      ビルの最適環境を実現
                    </span>
                    <div class="blue-under-line"></div>
                  </div>
                </div>
                <a href="business-summary.html">
                  <div class="detail-btn">
                    <img
                      src="./img/index-image-04.svg"
                      class="detail-btn-icon"
                    />
                    <span class="detail-btn-text">事業概要</span>
                  </div>
                </a>
              </div>
              <div class="carousel-item" id="carousel-item-3">
                <div class="carousel-item-3-p">
                  <a href="sdgs.pdf">
                    <div class="detail-btn">
                      <img
                        src="./img/index-image-04.svg"
                        class="detail-btn-icon"
                      />
                      <span class="detail-btn-text">SDGs</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="carousel-item" id="carousel-item-4">
                <div
                  id="carousel-caption"
                  class="carousel-caption carousel-4-caption"
                >
                  <span class="font-carousel-4">
                    <span class="font-carousel-4-line">日常</span>{" "}
                    <span class="font-carousel-4-small">に</span>
                  </span>
                  <div class="carousel-text-wrapper">
                    <span class="font-carousel-4b">
                      <span class="font-carousel-4-line">感動</span>{" "}
                      <span class="font-carousel-4-small">を</span>
                    </span>
                    <div class="blue-under-line"></div>
                  </div>
                </div>
                <a href="recruit.html">
                  <div class="detail-btn">
                    <img
                      src="./img/index-image-04.svg"
                      class="detail-btn-icon"
                    />
                    <span class="detail-btn-text">採用情報</span>
                  </div>
                </a>
              </div>
            </div>
            <a
              id="carousel-control-prev"
              class="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <img
                alt="Previous"
                src="./img/index-image-05.svg"
                class="previous-btn-carousel"
              />
              <span class="sr-only">Previous</span>
            </a>
            <a
              id="carousel-control-next"
              class="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <img
                alt="Next"
                src="./img/index-image-06.svg"
                class="next-btn-carousel"
              />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div
          class="row no-default-spacing"
          style={{ background: "#383838 0% 0% no-repeat padding-box" }}
        >
          <div class="row col-xl-6 col-lg-12 no-default-spacing">
            <div class="more-section row col-12 no-default-spacing">
              <div class="col-xl-4 col-xs-12 no-default-spacing news-title">
                <span class="text-1">
                  NEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span class="text-2">
                  2020.03.31&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div class="col-xl-8 col-xs-12 no-default-spacing news-content">
                <span class="text-3">ホームページをリニューアルしました。</span>
              </div>
              <div class="white-border"></div>
            </div>
            <div class="row col-12 collapse" id="recruit-collapse">
              {/* <!--<div class="more-section row col-12 no-default-spacing">
                        <div class="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span class="text-1">RECRUIT&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div class="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span class="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div class="white-border"></div>
                    </div>
                    <div class="more-section row col-12 no-default-spacing">
                        <div class="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span class="text-1">TOPIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div class="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span class="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div class="white-border"></div>
                    </div>
                    <div class="more-section row col-12 no-default-spacing">
                        <div class="col-xl-4 col-xs-12 no-default-spacing news-title">
                            <span class="text-1">NEWS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span class="text-2">2019.12.01&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div class="col-xl-8 col-xs-12 no-default-spacing news-content">
                            <span class="text-3">&nbsp;&nbsp;ホームページをリニューアルしました。</span>
                        </div>
                        <div class="white-border"></div>
                    </div>--> */}
            </div>
          </div>
          <div class="col-xl-3 no-default-spacing">
            {/* <!--<div class="col-xl-3 no-default-spacing more-section-right" data-toggle="collapse"
                 data-target="#recruit-collapse" role="button">
                <a aria-expanded="false" class="more-content">MORE</a>
                <img class="more-dropdown-icon" src="./img/Symbol156-12.svg" />--> */}
          </div>
          <div class="col-xl-3 col-lg-12 image-section no-default-spacing">
            <div class="image-section-content">
              <a href="sdgs.pdf" target="_blank">
                <img class="image-section-img" src="./img/Group 209.svg" />
              </a>
            </div>
          </div>
        </div>

        <div class="blue-line"></div>
        <div class="service row no-default-spacing">
          <div class="col-12 no-default-spacing service-section">
            <span class="section-title section-title-service">SERVICE</span>
          </div>
          <div class="col-12 no-default-spacing service-section">
            <span class="section-title-cn section-title-cn-service">
              事業概要
            </span>
          </div>
          <div class="col-12 no-default-spacing service-section">
            <span class="section-content section-content-service">
              空調や給排水、電気、防災などのビル設備は、日々正常に機能することが当然です。しかし24時間365日稼働しているため、時間が経てば次第に老朽化し、時にはトラブルを起こすこともあります。それを未然に防ぎ「快適であり続けるようにする」こと。日本空調システムが提供する、運転管理、設備管理・点検・保守、広域ビル・遠隔管理のサービス概要を紹介します。
            </span>
          </div>
          <div class="col-md-4 col-xs-12 no-default-spacing position-relative">
            <a href="operation-management.html">
              <img class="service-image" src="./img/service/service-1.png" />
              <span class="image-content">運転管理</span>
              <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
            </a>
          </div>
          <div class="col-md-4 col-xs-12 no-default-spacing">
            <a href="inspect-maintenance.html">
              <img class="service-image" src="./img/service/service-2.png" />
              <span class="image-content">設備管理・点検・保守</span>
              <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
            </a>
          </div>
          <div class="col-md-4 col-xs-12 no-default-spacing">
            <a href="remote-manage.html">
              <img class="service-image" src="./img/service/service-3.png" />
              <span class="image-content">広域ビル・遠隔管理</span>
              <img src="./img/carousel/Symbol24-46.svg" class="service-btn" />
            </a>
          </div>
        </div>
        <div class="company row no-default-spacing">
          <div class="col-xl-6 col-xs-12 no-default-spacing">
            <img class="company-image" src="./img/company/company.png" />
          </div>
          <div class="col-xl-6 col-xs-12 no-default-spacing company-content-wrapper">
            <div class="col-xs-12 order-1 order-xl-1 no-default-spacing padding-title">
              <span class="section-title section-title-company">COMPANY</span>
            </div>
            <div class="col-xs-12 order-2 order-xl-2 no-default-spacing padding-title-cn">
              <span class="section-title-cn section-title-cn-company">
                企業情報
              </span>
            </div>
            <div class="col-xs-12 order-4 order-xl-3 no-default-spacing section-content-company">
              <span class="section-content content-company">
                1975年(昭和50年)に、親会社である日本空調サービス株式会社から分離独立し、愛知県における運転管理及び保守管理業務に特化した会社として40年に渡り歩んでまいりました。
              </span>
            </div>
            <a href="company.html">
              <div class="col-xs-12 order-3 order-xl-4 no-default-spacing detail-btn-company">
                <span class="detail-btn-company-content">企業情報</span>

                <img
                  onclick=""
                  src="./img/carousel/Symbol24-46.svg"
                  class="company-btn-icon"
                />
              </div>
            </a>
          </div>
        </div>
        <div class="recruit no-default-spacing recruit-section">
          <div class="col-xl-12 no-default-spacing recruit-title">
            <span class="section-title section-title-recruit">RECRUIT</span>
          </div>
          <div class="col-xs-12 no-default-spacing recruit-second-title">
            <span class="section-title-cn section-title-cn-recruit">
              採用情報
            </span>
          </div>
          <div class="row no-default-spacing recruit-content-wrapper">
            <div class="col-xl-7 col-xs-12 row no-default-spacing">
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a href="recruit-about.html" class="recruit-content">
                  日本空調システムについて
                </a>
              </div>
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a href="recruit-score.html" class="recruit-content">
                  数値で見る日本空調システム
                </a>
              </div>
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a href="recruit-senior.html" class="recruit-content">
                  先輩社員紹介
                </a>
              </div>
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a href="recruit-qa.html" class="recruit-content">
                  よくある質問
                </a>
              </div>
            </div>
            <div class="col-xl-5 col-xs-12 row no-default-spacing">
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a href="recruit-system.html" class="recruit-content">
                  各種制度
                </a>
              </div>
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a
                  href="https://job.rikunabi.com/2021/company/r999142021/"
                  target="_blank"
                  class="recruit-content"
                >
                  新卒採用エントリー
                </a>
              </div>
              <div class="col-12 no-default-spacing">
                <img src="./img/carousel/Symbol24-46.svg" />
                <a
                  href="https://en-gage.net/system_saiyo/"
                  class="recruit-content"
                >
                  中途採用エントリー
                </a>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="./html/slide.html"
          style={{ border: "unset", marginTop: "20px", width: "100%" }}
        ></iframe>
      </div>
      <a
        onclick="topFunction()"
        href="#root"
        id="scroll"
        style={{ display: "none" }}
      >
        <img src="./img/scroll-top.png" />
      </a>

      <footer id="sticky-footer" class="">
        <div class="footer-info row container-fluid no-default-spacing">
          <div class="footer-item-1">
            <a href="business-summary.html" class="footer-title">
              事業概要
            </a>
            <a href="operation-management.html" class="footer-content">
              » 運転管理
            </a>
            <a href="inspect-maintenance.html" class="footer-content">
              » 設備管理・点検・保守
            </a>
            <a href="remote-manage.html" class="footer-content">
              » 広域ビル・遠隔管理
            </a>
          </div>
          <div class="footer-item-2">
            <a href="company.html" class="footer-title">
              企業情報
            </a>
            <a href="company.html" class="footer-content">
              » ご挨拶
            </a>
            <a href="company-profile.html" class="footer-content">
              » 会社概要
            </a>
            <a href="company-history.html" class="footer-content">
              » 沿革
            </a>
            <a href="csr.html" class="footer-content">
              » CSR
            </a>
          </div>
          <div class="footer-item-3">
            <a href="recruit.html" class="footer-title">
              採用情報
            </a>
            <a href="recruit-about.html" class="footer-content">
              » 日本空調システムについて
            </a>
            <a href="recruit-score.html" class="footer-content">
              » 「数値」で見る日本空調システムの強み
            </a>
            <a href="recruit-senior.html" class="footer-content">
              » 先輩が語る日本空調システムの仕事
            </a>
            <a href="recruit-qa.html" class="footer-content">
              » よくある質問
            </a>
          </div>
          <div class="footer-item-3">
            <span class="footer-title">&nbsp;</span>
            <a href="recruit-system.html" class="footer-content">
              » 各種制度
            </a>
            <a
              href="https://job.rikunabi.com/2021/company/r999142021/"
              target="_blank"
              class="footer-content"
            >
              » 新卒採用エントリー
            </a>
            <a
              href="https://en-gage.net/system_saiyo/"
              target="_blank"
              class="footer-content"
            >
              » 中途採用エントリー
            </a>
          </div>
          <div class="footer-logo">
            <img class="footer-img" src="./img/footer/logo-footer.png" />
            <span class="text-footer">〒461-0011 名古屋市東区白壁1-9</span>
          </div>
        </div>

        <div class="footer-coppy-right">
          <div class="container-fluid no-default-spacing">
            <div class="row no-default-spacing">
              <div class="col-xl-6 col-md-12 order-2 order-lg-1 no-default-spacing">
                <span class="end-footer-text-1">
                  © NIPPON KUCHO SYSTEM Co., Ltd.
                </span>
              </div>
              <div class="col-xl-6 col-md-12 order-1 order-lg-2 no-default-spacing wapper-text-end">
                <a href="privacy-policy.html" class="end-footer-text-2">
                  » プライバシーポリシー
                </a>
                <a href="outsourcing.html" class="end-footer-text-3">
                  » 協力会社の皆様へ
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
