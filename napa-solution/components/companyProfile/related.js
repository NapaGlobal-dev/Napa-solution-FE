import React from 'react';

const Related = (props) => {
    return (
        <div className="container-fluid image-wrapper-01 no-default-spacing">
            <div className="container row no-spacing-mobile">
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-01">
                    <a className="image-bottom" href="company.html"><img className="image-top img-01" src="./img/company-image-02.svg" /></a>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-02">
                    <a className="image-bottom" href="company-profile.html"><img className="image-top img-02" src="./img/company-image-03.svg" /></a>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-03">
                    <a className="image-bottom" href="company-history.html"><img className="image-top img-03" src="./img/company-image-04.svg" /></a>
                </div>
                <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-04">
                    <a className="image-bottom" href="csr.html"><img className="image-top img-04" src="./img/company-image-05.svg" /></a>
                </div>
            </div>
        </div>
    );
}

export default Related