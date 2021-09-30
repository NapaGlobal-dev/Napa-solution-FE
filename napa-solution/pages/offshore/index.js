import React from "react";
import { client } from "../../apolo-client";
import Banner from "../../components/offshore/Banner";
import Benefit from "../../components/offshore/Benefit";
import OffshoreType from "../../components/offshore/OffshoreType";
import WhatOffshore from "../../components/offshore/WhatOffshore";
import { OFFSHORE_QUERY } from "../../query/general";
import { convertArrToObject } from "../../util/converArrayToObject";
const Offshore = (props) => {
  const data = convertArrToObject(props.data.page.layouts)
  return (
    <>
      <Banner data = {data.Offshore_Banner} />
      <WhatOffshore data = {data.Offshore_WhatOfshore} />
      <Benefit data = {data.OffShore_Benefit}/>
      <OffshoreType data = {data.Offshore_OffshoreType}/>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: OFFSHORE_QUERY });

  return {
    props: { data },
  };
}

export default Offshore;
