import { convertArrToObject } from "../../util/converArrayToObject";
const Method = (props) => {
  const data = convertArrToObject(props.data.property);
  return (
    <section className="operation-management-people privacy-policy-flow">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="operation-management-wrap operation-management-flow-title">
                <span className="operation-management-flow-spec">
                  {data["Offshore_Method_Title-1"]?.value}
                </span>
                {data["Offshore_Method_Title-2"]?.value}
              </h2>
              <div className="to-partner-group-text-btn">
                <p className="privacy-policy-info-desc privacy-policy-info-desc-simple">
                  {data["Offshore_Method_Rule-1"]?.value}
                </p>
                <div className="privacy-policy-info-btn">
                  <p>{data["Offshore_Method_SubRule-1"]?.value}</p>
                </div>
                <span>{data["Offshore_Method_Content-1"]?.value}</span>
              </div>
              <div className="to-partner-group-text-btn">
                <p className="privacy-policy-info-desc privacy-policy-info-desc-simple">
                  {data["Offshore_Method_Rule-2"]?.value}
                </p>
                <div className="privacy-policy-info-btn">
                  <p>{data["Offshore_Method_SubRule-2"]?.value}</p>
                </div>
                <p>{data["Offshore_Method_Content-2"]?.value}</p>
                <span>{data["Offshore_Method_Content-3"]?.value}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
// ----------------------------------- Outsourcing Page_Download-------------------------------------------------------------

// const Download = (props) => {
//   const data = convertArrToObject(props.data.property);
//   // console.log("data Download:", data);
//   return (
//     <section className="operation-management-people privacy-policy-flow">
//       <div className="container-fluid">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <h2 className="operation-management-wrap operation-management-flow-title">
//                 <span className="operation-management-flow-spec">
//                   {data["Outsourcing_Download_Title"]?.key}
//                 </span>
//                 {data["Outsourcing_Download_Title"]?.value}
//               </h2>

//               <div className="to-partner-group-text-btn">
//                 <p className="privacy-policy-info-desc privacy-policy-info-desc-simple">
//                   {data["Outsourcing_Download_Excel"].value}
//                 </p>
//                 {data["Outsourcing_Download_Excel"].content.map((item) => (
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     className="privacy-policy-info-btn"
//                     key={item.value}
//                   >
//                     {item.value}
//                   </a>
//                 ))}
//               </div>

//               <div className="to-partner-group-text-btn">
//                 <p className="privacy-policy-info-desc privacy-policy-info-desc-simple">
//                   {data["Outsourcing_Download_PDF"].value}
//                 </p>
//                 {data["Outsourcing_Download_PDF"].content.map((item) => (
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     className="privacy-policy-info-btn"
//                   >
//                     {item.value}
//                   </a>
//                 ))}
//               </div>

//               <div className="privacy-policy-info-element">
//                 <p className="privacy-policy-info-desc">
//                   {data["Outsourcing_Download_Note"].value}
//                 </p>
//               </div>
//               {data["Outsourcing_Download_Note"].content.map((note, index) => (
//                 <div className="privacy-policy-info-element" key={index}>
//                   <p className="privacy-policy-info-no">{index + 1}</p>
//                   <p className="privacy-policy-info-desc">{note.value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Download;
