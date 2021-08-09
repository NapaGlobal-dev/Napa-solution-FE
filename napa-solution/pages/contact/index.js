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
            </Head>
            <Banner data = {data.ContactBanner}/>
            <ContactForm data = {data.ContactForm}/>
            <Project data={getData(props.data,/Slides_Section/)[0]}/>
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