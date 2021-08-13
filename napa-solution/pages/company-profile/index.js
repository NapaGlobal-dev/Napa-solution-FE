import React from 'react'
import Head from 'next/head'
import Banner from '../../components/companyProfile/banner'
import Message from '../../components/companyProfile/message'
import { client } from '../../apolo-client';
import { contactQuery, GET_COMPANYPROFILE } from '../../query/general';
import { convertArrToObject, getData } from '../../util/converArrayToObject';
import Profile from '../../components/companyProfile/profile';

const CompanyProfilePage = (props) => {
    const data = convertArrToObject(props.data.page.layouts);

    return (
        <>
            <Head>
                <link
                    key='css/company-profile.css'
                    rel='stylesheet'
                    href='css/company-profile.css'
                />
            </Head>
            <Banner data={data.CompanyProfile_Banner} />
            <Profile data={data.CompanyProfile_Corporate} />
            <Message data={data.CompanyProfile_Message} />
        </>
    );
}

export async function getStaticProps() {
    const { data } = await client.query({ query: GET_COMPANYPROFILE });

    return {
        props: { data }
    };
}

export default CompanyProfilePage