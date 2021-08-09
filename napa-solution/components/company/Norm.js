import React from "react";
import { convertArrToObject } from "../../util/converArrayToObject";
import useDarkMode from "use-dark-mode";

const Norm = (props) => {
  const darkmode = useDarkMode();
  const data = convertArrToObject(props.data.property);

  return (
    <>
      <div className="col-12  button-wrapper">
        <div className={darkmode?.value? "button-01 darkmode-button-01":"button-01"}>
          <span className="font-03">{data["Company_Norm_Norm"].key}</span>
        </div>
      </div>
      <div className="col-12  cw2-child-03">
        <span className="font-05">{data["Company_Norm_Norm"].value}</span>
      </div>
    </>
  );
};

export default Norm;
