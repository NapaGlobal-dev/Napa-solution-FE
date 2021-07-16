import React from "react";
const Carousel = () => {
  return (
    <div>
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
                  <img src="./img/index-image-04.svg" class="detail-btn-icon" />
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
                  <img src="./img/index-image-04.svg" class="detail-btn-icon" />
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
                  <img src="./img/index-image-04.svg" class="detail-btn-icon" />
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
          <div class="row col-12 collapse" id="recruit-collapse"></div>
        </div>
        <div class="col-xl-3 no-default-spacing"></div>
        <div class="col-xl-3 col-lg-12 image-section no-default-spacing">
          <div class="image-section-content">
            <a href="sdgs.pdf" target="_blank">
              <img class="image-section-img" src="./img/Group 209.svg" />
            </a>
          </div>
        </div>
      </div>
      <div class="blue-line"></div>
    </div>
  );
};
export default Carousel;
