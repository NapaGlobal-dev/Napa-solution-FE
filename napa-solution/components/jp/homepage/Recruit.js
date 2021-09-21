import { convertArrToObject } from "../../../util/converArrayToObject";

const Recruit = (props) => {
  const data = convertArrToObject(props.data?.property);
  const listContent = Object.values(data).filter((item) =>
    item.name.includes("Home_Recruit_Content")
  );
  const listContentCol1 = listContent.slice(0, listContent.length / 2 + 1);
  const listContentCol2 = listContent.slice(
    listContent.length / 2 + 1,
    listContent.length
  );
  // console.log("Data Recruit:", data, listContent);
  return (
    <div
      className="recruit no-default-spacing recruit-section"
      style={{
        background: `transparent url("${data["Home_Recruit_background"]?.image.original}") 0% 0%no-repeat padding-box`,
      }}
    >
      <div className="col-xl-12 no-default-spacing recruit-title">
        <span className="section-title section-title-recruit">
          {data["Home_Recruit_Title"]?.value}
        </span>
      </div>
      <div className="col-xs-12 no-default-spacing recruit-second-title">
        <span className="section-title-cn section-title-cn-recruit">
          {data["Home_Recruit_SubTitle"]?.value}
        </span>
      </div>
      <div className="row no-default-spacing recruit-content-wrapper">
        <div className="col-xl-7 col-xs-12 row no-default-spacing">
          {listContentCol1.map((item, index) => (
            <div className="col-12 no-default-spacing" key={index}>
              <img src="./img/carousel/Symbol24-46.svg" />
              <a href={item.url} className="recruit-content">
                {item.value}
              </a>
            </div>
          ))}
        </div>
        <div className="col-xl-5 col-xs-12 row no-default-spacing">
          {listContentCol2.map((item, index) => (
            <div className="col-12 no-default-spacing" key={index}>
              <img src="./img/carousel/Symbol24-46.svg" />
              <a href={item.url} className="recruit-content">
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recruit;
