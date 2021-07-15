import React from "react";

const Breadcrumb = ({ listBreadcrumb = [], ...props }) => {
  return (
    <div className="container-fluid breadcrumb-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 responsive-mobile">
            <div className="breadcrumb-header">
              <a key="xxxx" href="/">
                HOME
              </a>
              {listBreadcrumb.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <span className="breadcrumb-icon">　{">"}　</span>
                    <a href={item.url}>{item.pageName}</a>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
