import Banner from "../../components/company-history/Banner"
import History from "../../components/company-history/History"
import Breadcrumb from "../../components/layout/breadcrumb"
import CompanyPages from "../../components/company/CompanyPages"

import { GET_COMPANYHISTORY } from "../../query/general"
import { getData } from "../../util/converArrayToObject"
import { useQuery } from "@apollo/client"
import Head from "next/head"


export default function CompanyHistory(){
    const {data, loading, error} = useQuery(GET_COMPANYHISTORY)
    const listBreadcrumb = []
    const path = getData(data, /CompanyHistory_Breadcrumb_Content[^1]/)
    path.forEach(e => {
        listBreadcrumb.push({
            url: e.url,
            pageName: e.value
        })
    })

    return (
        <>
            <Head>
                <link
                    key="css/company-history.css"
                    rel="stylesheet"
                    href="css/company-history.css"
                />
                <link rel="stylesheet" href="css/common.css" />
                <link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />
                <link key="/css/header.css" rel="stylesheet" href="css/header.css" />
                <script src="../js/common/jquery-3.4.1.slim.min.js"></script>
                <script src="../js/common/popper.min.js"></script>
                <script src="../js/common/bootstrap.min.js"></script>
            </Head>
            <Banner data={data}/>
            <Breadcrumb listBreadcrumb={listBreadcrumb}/>
            <History data={data}/>
            <CompanyPages/>
        </>
    )
}