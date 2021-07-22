import Head from 'next/head'
import React from 'react'
import { client } from '../../apolo-client'
import Breadcrumb from '../../components/layout/breadcrumb'
import Banner from '../../components/operation-management/Banner'
import Service from '../../components/operation-management/Service'
import TeamWork from '../../components/operation-management/Teamwork'
import WorkSpace from '../../components/operation-management/WorkSpace'
import { OperationManagermentQuery } from '../../query/general'
import { convertArrToObject } from '../../util/converArrayToObject'

const OperationManagerment = (props) => {
    const pageData = convertArrToObject(props.page.layouts);
    const listBreadcrumb = [{ url: props.page.parentPage.url, pageName: props.page.parentPage.name }, { url: props.page.url, pageName: props.page.name } ];
    return (
        <>
            <Head>
                <link rel="stylesheet" href="./css/operation-management.css" />
                <link key="css/header.css" rel="stylesheet" href="css/header.css" />
            </Head>
            <Banner data = {pageData['OperationManagement_Banner']}/>
            <Breadcrumb  listBreadcrumb = {listBreadcrumb}/>
            <WorkSpace data = {pageData['OperationManagement_WorkSpace']} />
            <TeamWork dataService = {pageData['OperationManagement_Service']} dataTeamWork = {pageData['OperationManagement_Teamwork']}/>
            <Service data = {props.page.subpages}/>
            <div class="operation-management-divider"></div>
        </>
    )
}


export async function getStaticProps() {
    const { data } = await client.query({ query: OperationManagermentQuery });

    return {
        props: { page : data.page },
    };
}

export default OperationManagerment