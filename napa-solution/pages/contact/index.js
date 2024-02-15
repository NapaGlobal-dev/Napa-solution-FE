import React from "react";
import Head from "next/head";
import {
	contactQuery,
	HomePage,
	GET_CASESTUDIES,
	CONTACT_QUERY,
	GET_IMAGE_PROPERTIES,
} from "../../query/general";
import { client } from "../../apolo-client";
import { convertArrToObject } from "../../util/converArrayToObject";
import ContactForm from "../../components/contact/ContactForm";
// import Project from "../../components/homepage/Project/index";
import Banner from "../../components/contact/banner";
// import { getData } from "../../util/converArrayToObject";
import { OurWorksCpn } from "../../components/case-study/ourworks/index.js";

const ContactPage = (props) => {
	const data = convertArrToObject(props.data.page.layouts);
	const convertImageSeo = convertArrToObject(
		props.imagePropertions.data.allProperties
	);
	const imageSeo = convertImageSeo["Image_Preview_Contact"]?.image?.original;
	return (
		<>
			<Head>
				<link key="css/contact.css" rel="stylesheet" href="css/contact.css" />
				<link
					key="home-page-slide.css"
					rel="stylesheet"
					href="css/home-page-slide.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					integrity="sha512-L/EyzxvZCddd652hKB4w2gEaZgCZSOaH0Ia6JoEGysTu27VnWvej5ipuBnru/iDhPWMO0AvwiVd0HHVUHWeDRA=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
			</Head>
			<Banner data={data.Contact_ContactBanner} />
			<ContactForm data={data.Contact_ContactForm} />
			{/* <div className="container-fluid content-wrapper no-default-spacing">
        <Project data={getData(props.data, /Slides_Section/)[0]} />
      </div> */}
			<OurWorksCpn center isRow={true} data={props.caseStudies} />
		</>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({ query: CONTACT_QUERY });
	// const { data: dataHome } = await client.query({ query: HomePage });
	const caseStudies = await client.query({
		query: GET_CASESTUDIES,
	});
	const imagePropertions = await client.query({
		query: GET_IMAGE_PROPERTIES,
		variables: { name: "Image_Preview_Contact" },
	});
	return {
		props: {
			data,
			caseStudies: caseStudies.data,
			imagePropertions: imagePropertions,
		},
	};
}

export default ContactPage;
