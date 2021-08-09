import React from "react";
import useDarkMode from "use-dark-mode";

const Rules = (props) => {
  const data = props.data;
  const darkmode = useDarkMode();

  return (
    <>
      {data.property.map((rule) => (
        <div className={darkmode?.value? "row col-12  card darkmode-card":"row col-12  card"}>
          <div className="col-5 card-child-01">
            <span className="font-06">{rule.key}</span>
          </div>
          <div className="col-7 card-child-03">
            <span className="font-07">{rule.value}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rules;
