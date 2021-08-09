import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import joinJsx from "../../util/joinJsx";
import useDarkMode from "use-dark-mode";

const Philosophy = (props) => {
  const darkmode = useDarkMode();
  const data = convertArrToObject(props.data.property);
  //  { data[].value}

  const describe1 = joinJsx(
    data["Company_Philosophy_Describe1"].value.split("\\n"),
    <br className="sp-only" />
  );
  const describe2 = joinJsx(
    data["Company_Philosophy_Describe2"].value.split("\\n"),
    <br className="sp-only" />
  );
  return (
    <>
      <div
        className="col-12 "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className={darkmode?.value? "button-01 darkmode-button-01":"button-01"}>
          <span className="font-03">
            {data["Company_Philosophy_Philosophy"].value}
          </span>
        </div>
      </div>
      <div className="col-12  cw2-child-02">
        <span className="font-04 sp-center">{describe1}</span>
      </div>
      <div className="col-12 " style={{ textAlign: "center" }}>
        <span className="font-04 sp-center">{describe2}</span>
      </div>
    </>
  );
};

export default Philosophy;
