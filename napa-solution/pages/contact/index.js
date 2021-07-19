import React from 'react';
import Head from 'next/head';
import { contactQuery } from '../../query/general';
import { client } from '../../apolo-client';
import { convertArrToObject } from '../../util/converArrayToObject';
import ContactForm from '../../components/contact/ContactForm';
import Breadcrumb from '../../components/layout/breadcrumb';
import ContactBanner from '../../components/contact/Banner';

const ContactPage = (props) => {
    const data = convertArrToObject(props.data.page.layouts);
    const listBreadcrumb = [
        { url: props.data.page.url, pageName: props.data.page.name },
    ];

    return (
        <>
            <Head>
                <link key="css/operation-management.css" rel="stylesheet" href="css/operation-management.css" />
                <link key="css/privacy-policy.css" rel="stylesheet" href="css/privacy-policy.css"/>
                <link key="css/contact.css" rel="stylesheet" href="css/contact.css"/>
            </Head>
            <ContactBanner data = {data.ContactBanner}/>
            <Breadcrumb listBreadcrumb={listBreadcrumb}/>
            <ContactForm data = {data.ContactForm}/>
        </>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({ query: contactQuery });

    return {
        props: { data },
    };
}

export default ContactPage