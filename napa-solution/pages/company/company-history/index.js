import Banner from "../../../components/company/company-history/Banner"
import History from "../../../components/company/company-history/History"
import Breadcrumb from "../../../components/company/company-history/Breadcrumb"
import CompanyPages from "../../../components/company/CompanyPages"

import { GET_COMPANYHISTORY } from "../../../query/general"
import { useQuery } from "@apollo/client"
import Head from "next/head"


export default function CompanyHistory(){
    const {data, loading, error} = useQuery(GET_COMPANYHISTORY)

    const banner = loading || data.banner[0]
    const breadcrumb = loading || data.breadcrumb[0]
    const content = loading || data.content[0]
    const history = loading || data.history

    return loading || (
        <>
            <Head>
                <link
                    key="/css/company-history.css"
                    rel="stylesheet"
                    href="/css/company-history.css"
                />
                <link rel="stylesheet" href="/css/common.css" />
                <link rel="stylesheet" type="text/css" href="/css/isotope.css" media="screen" />
                <link key="/css/header.css" rel="stylesheet" href="/css/header.css" />
                <script src="../js/common/jquery-3.4.1.slim.min.js"></script>
                <script src="../js/common/popper.min.js"></script>
                <script src="../js/common/bootstrap.min.js"></script>
            </Head>
            <Banner data={banner}/>
            <Breadcrumb data={breadcrumb}/>
            <History history={history} content={content}/>
            <CompanyPages/>
        </>
    )
}