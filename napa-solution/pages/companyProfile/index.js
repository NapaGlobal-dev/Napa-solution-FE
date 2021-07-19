import React from 'react'
import CompanyProfile from '../../components/companyProfile'
import Head from 'next/head'
const CompanyProfilePage = (props) => {
    return (
        <>
            <Head>
                <link
                    key='css/company-profile.css'
                    rel='stylesheet'
                    href='css/company-profile.css'
                />
            </Head>
            <CompanyProfile />
        </>
    );
}

export default CompanyProfilePage