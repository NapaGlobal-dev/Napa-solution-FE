import React from "react";

const joinJsx = (arr = [], object, autoKey = true) => {
  const arrLength = arr.length;
  const newArr = [];
  arr.forEach((i, index) => {
    i = autoKey ? fragment(i, index) : i;
    newArr.push(i);
    if (index < arrLength)
      newArr.push(autoKey ? fragment(object, index + arrLength) : object);
  });

  return newArr;
};

const fragment = (object, key) => {
  return <React.Fragment key={key}>{object}</React.Fragment>;
};

export default joinJsx;
