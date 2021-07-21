import React from "react";

const Services = (props) => {
  const data = props.data;
  return (
    <section className="operation-management-gallery">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="operation-management-gallery-group">
                {data.map((subpage, index) => {
                  return (
                    <div
                      key={index}
                      className="operation-management-gallery-group-element"
                    >
                      <div className="operation-management-gallery-group-mobile">
                        <a href={subpage.url}>
                          <img
                            className="operation-management-gallery-group-element-img"
                            src={subpage.image.original}
                          />
                          <div className="operation-management-gallery-foot-group">
                            <span className="operation-management-gallery-foot-title">
                              {subpage.name}
                            </span>
                            <img
                              src="./img/carousel/Symbol24-46.svg"
                              className=""
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
