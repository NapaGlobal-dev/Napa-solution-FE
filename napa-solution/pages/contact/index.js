import React from 'react';
import Head from 'next/head';
import { contactQuery, HomePage } from '../../query/general';
import { client } from '../../apolo-client';
import { convertArrToObject } from '../../util/converArrayToObject';
import ContactForm from '../../components/contact/ContactForm';
import Project from '../../components/homepage/Project/index';
import Banner from '../../components/Company-history/Banner';
import { getData } from "../../util/converArrayToObject"

const ContactPage = (props) => {
    const data = convertArrToObject(props.data.page.layouts);
    return (
        <>
            <Head>
                <link key="css/contact.css" rel="stylesheet" href="css/contact.css"/>
                <link key="home-page-slide.css" rel="stylesheet" href="css/home-page-slide.css"/>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    integrity="sha512-L/EyzxvZCddd652hKB4w2gEaZgCZSOaH0Ia6JoEGysTu27VnWvej5ipuBnru/iDhPWMO0AvwiVd0HHVUHWeDRA=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
            </Head>
            <Banner data = {data.ContactBanner}/>
            <ContactForm data = {data.ContactForm}/>
            <div className="container-fluid content-wrapper no-default-spacing">
                <Project data={getData(props.data,/Slides_Section/)[0]}/>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({ query: contactQuery });
    const { data:dataHome } = await client.query({ query: HomePage });
    
    return {
        props: { data: {...data, dataHome:dataHome.page.layouts} }
    };
}

export default ContactPage