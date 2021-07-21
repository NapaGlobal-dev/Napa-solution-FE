import { convertArrToObject } from "../../../util/converArrayToObject";
import Head from "next/head";
const Footer = (props) => {
  // console.log("footer data", props.data);

  const data = convertArrToObject(props.data.layout[0].property);
  const page_urls = props.data.pages;
  return (
    <>
      <Head>
        <link key="css/common.css" rel="stylesheet" href="css/common.css" />
      </Head>
      <footer id="sticky-footer" className="">
        <div className="footer-info row container-fluid no-default-spacing">
          {page_urls.map((page, index) => {
            return (
              <div key={index} className="footer-item-1">
                <a href={page.url} className="footer-title">
                  {page.name}
                </a>

                {page.subpages.map((subpage, index) => {
                  return (
                    <a
                      key={`${subpage.url}--${index}`}
                      href={subpage.url}
                      className="footer-content"
                    >
                      {`» ${subpage.name}`}
                    </a>
                  );
                })}
              </div>
            );
          })}
          <div className="footer-logo">
            <img
              className="footer-img"
              src={data["Footer_Logo"].image.original}
            />
            <span className="text-footer">{data["Footer_Address"].value}</span>
          </div>
        </div>

        <div className="footer-coppy-right">
          <div className="container-fluid no-default-spacing">
            <div className="row no-default-spacing">
              <div className="col-xl-6 col-md-12 order-2 order-lg-1 no-default-spacing">
                <span className="end-footer-text-1">
                  {`» ${data["Footer_Copyright"].value}`}
                </span>
              </div>
              <div className="col-xl-6 col-md-12 order-1 order-lg-2 no-default-spacing wapper-text-end">
                <a
                  href={data["Footer_Privacy"].url}
                  className="end-footer-text-2"
                >
                  {`» ${data["Footer_Privacy"].value}`}
                </a>
                <a
                  href={data["Footer_Outsourcing"].url}
                  className="end-footer-text-3"
                >
                  {`» ${data["Footer_Outsourcing"].value}`}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
