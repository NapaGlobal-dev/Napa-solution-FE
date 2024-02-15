import React from "react";
import Head from "next/head";
import {
	CONTACT_QUERY,
	PROJECTS,
	GET_CEOMESSAGE,
	GET_IMAGE_PROPERTIES,
} from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import Banner from "../../components/ceo-message/banner";
import Message from "../../components/ceo-message";

const CompanyAbout = ({ projects, ...props }) => {
	// const data = convertArrToObject(props.data.page.layouts);
	const adata = convertArrToObject(props.data.adata.page.layouts);
	const convertImageSeo = convertArrToObject(
		props.imagePropertions.data.allProperties
	);
	const imageSeo =
		convertImageSeo["Image_Preview_CEO_Message"]?.image?.original;
	return (
		<>
			<Head>
				<link
					key="css/home-page-slide.css"
					rel="stylesheet"
					href="css/home-page-slide.css"
				/>
				<link
					key="css/ceo-message.css"
					rel="stylesheet"
					href="css/ceo-message.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<meta
					property="og:image"
					content="https://napa-website-data.s3.ap-southeast-1.amazonaws.com/NapaSolutions/seo-preview-image-300x300.png"
				/>
				<meta
					property="og:image:secure_url"
					content="https://napa-website-data.s3.ap-southeast-1.amazonaws.com/NapaSolutions/seo-preview-image-300x300.png"
				/>
			</Head>
			<Banner data={adata["CEOMessage_Banner"]} />
			<Message data={adata["CEOMessage_Message"]} />
			{/* <Project data={projects} /> */}
		</>
	);
};
export async function getStaticProps() {
	// const { data } = await client.query({ query: contactQuery });
	// const { data: adata } = await client.query({ query: companyAbout });

	// const [pageData, aboutData, projectData] = await Promise.allSettled([
	//   client.query({ query: contactQuery }),
	//   client.query({ query: companyAbout }),
	//   client.query({ query: PROJECTS }),
	// ]);
	const pageData = await client.query({ query: CONTACT_QUERY });
	const aboutData = await client.query({ query: GET_CEOMESSAGE });
	const projectData = await client.query({ query: PROJECTS });
	const imagePropertions = await client.query({
		query: GET_IMAGE_PROPERTIES,
		variables: { name: "Image_Preview_CEO_Message" },
	});
	return {
		props: {
			data: { ...pageData.data, adata: aboutData.data },
			projects: projectData.data.projects[0],
			imagePropertions: imagePropertions,
		},
	};
}
export default CompanyAbout;
