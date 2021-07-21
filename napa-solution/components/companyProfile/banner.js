import React from 'react';

const Banner = (props) => {
    return (
        <div>
            <div id="root" class="hearder-container">
                <div class="overlay-header"></div>
                <img src="./img/untitled-img/main-img.png" class="image-header" alt="" />
                <div class="header-service">
                    <div class="header-service-text text-center">COMPANY</div>
                    <div class="header-service-name text-center">企業情報</div>
                </div>
                <div class="header-title">
                    <span class="header-title-text">会社概要</span>
                </div>
            </div>

            <div class="container-fluid breadcrumb-container">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 spacing-mobile">
                            <div class="breadcrumb-header">
                                <a href="index.html">HOME</a>
                                <span class="breadcrumb-icon">{">"}</span>
                                <a href="recruit.html">企業情報</a>
                                <span class="breadcrumb-icon">{">"}</span>
                                <a href="companyProfile">会社概要</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner