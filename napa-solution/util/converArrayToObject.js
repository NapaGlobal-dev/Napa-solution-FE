export const convertArrToObject = (data = [], keyName = "name") => {
  const object = {};
  data.forEach((item) => {
    // const key = item[keyName];
    // delete item[keyName];
    object[item[keyName]] = item;
  });

  return object;
};
