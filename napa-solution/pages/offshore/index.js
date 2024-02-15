import React from "react";
import { client } from "../../apolo-client";
import Banner from "../../components/offshore/Banner";
import Benefit from "../../components/offshore/Benefit";
import OffshoreType from "../../components/offshore/OffshoreType";
import WhatOffshore from "../../components/offshore/WhatOffshore";
import { OFFSHORE_QUERY, GET_IMAGE_PROPERTIES } from "../../query/general";
import { convertArrToObject } from "../../util/converArrayToObject";
import Head from "next/head";
const Offshore = (props) => {
	const data = convertArrToObject(props.data.page.layouts);
	const convertImageSeo = convertArrToObject(
		props.imagePropertions.data.allProperties
	);
	const imageSeo = convertImageSeo["Image_Preview_offshore"]?.image?.original;
	return (
		<>
			<Head>
				<meta
					property="og:image"
					content="https://napa-website-data.s3.ap-southeast-1.amazonaws.com/NapaSolutions/seo-preview-image-300x300.png"
				/>
				<meta
					property="og:image:secure_url"
					content="https://napa-website-data.s3.ap-southeast-1.amazonaws.com/NapaSolutions/seo-preview-image-300x300.png"
				/>
			</Head>
			<Banner data={data.Offshore_Banner} />
			<WhatOffshore data={data.Offshore_WhatOffshore} />
			<Benefit data={data.Offshore_Benefit} />
			<OffshoreType data={data.Offshore_OffshoreType} />
		</>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({ query: OFFSHORE_QUERY });
	const imagePropertions = await client.query({
		query: GET_IMAGE_PROPERTIES,
		variables: { name: "Image_Preview_offshore" },
	});
	return {
		props: { data, imagePropertions: imagePropertions },
	};
}

export default Offshore;
