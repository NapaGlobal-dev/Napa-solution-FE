import { getData } from "../../util/converArrayToObject";

export default function Credo({ data }) {
  const title = getData(data, /CompanyHistory_Credo_Title/)[0];
  const credos = getData(data, /CompanyHistory_Credo_[0-9]/);
  return (
    <>
      <div className="cover">
        <img className="decor-head-line" src="/img/line-style.svg" />
        <h3 id="down-up">{title?.key}</h3>
        <p id="down-up">{title?.value}</p>
      </div>
      <div className="container-credo" id="down-up">
        {credos.map((credo, index) => (
          <div
            className={
              credos.length != index + 1 ? "row-credo" : "row-credo-end"
            }
            key={index}
          >
            <div className="leftColumn">
              {index + 1 + ". "}
              {credo?.key}
            </div>
            <div className="rightColumn">{credo?.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}
