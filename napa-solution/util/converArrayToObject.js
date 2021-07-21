export const convertArrToObject = (data = [], keyName = "name") => {
  const object = {};
  data.forEach((item) => {
    // const key = item[keyName];
    // delete item[keyName];
    object[item[keyName]] = item;
  });

  return object;
};


export const convertArrToObjectBySpecialName  = (data = [], keyName ="name") => {
  const object = {};
  //parse key name to basic name 
  data.forEach((item) => {
      let basicName = item.name.split('_')
      object[basicName[basicName.length -1]] = item
  });
  return object
}