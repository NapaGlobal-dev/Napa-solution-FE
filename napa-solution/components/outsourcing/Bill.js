import { convertArrToObject } from "../../util/converArrayToObject";

const Bill = (props) => {
  const data = convertArrToObject(props.data.property);
  const elements = Object.values(data).filter((item) =>
    item.name.includes("Outsourcing_Bill_Content")
  );
  const links = Object.values(data).filter((item) =>
    item.name.includes("Outsourcing_Bill_Link")
  );
  // console.log("data Bill:", data);
  return (
    <section className="privacy-policy-flow">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="operation-management-wrap operation-management-flow-title">
                <span className="operation-management-flow-spec">
                  {data["Outsourcing_Bill_Title"]?.key}
                </span>
                {data["Outsourcing_Bill_Title"]?.value}
              </h2>

              {elements.map((item, index) => (
                <div className="privacy-policy-info-element" key={index}>
                  <p
                    className={
                      item.flag == true
                        ? "privacy-policy-info-desc privacy-policy-info-desc-red"
                        : "privacy-policy-info-desc"
                    }
                  >
                    {item.value}
                  </p>
                </div>
              ))}

              <div className="privacy-policy-info-btn-group">
                {links.map((link, index) => (
                  <a
                    href={link.url}
                    target="_blank"
                    className="privacy-policy-info-btn"
                    key={index}
                  >
                    {link.value}
                  </a>
                ))}
                {/* <a
                  href="files/question.pdf"
                  target="_blank"
                  className="privacy-policy-info-btn"
                >
                  指定請求書に関するよくあるご質問 (PDF)
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bill;
