import Banner from "../../components/company-history/Banner"
import Timeline from "../../components/company-history/Timeline"
import Credo from "../../components/company-history/Credo"

import { GET_COMPANYHISTORY } from "../../query/general"
import { getData } from "../../util/converArrayToObject"
import { useQuery } from "@apollo/client"
import Head from "next/head"


export default function CompanyHistory(){
    const {data} = useQuery(GET_COMPANYHISTORY)
    return (
        <>
            <Head>
                <link
                    key="css/company-history.css"
                    rel="stylesheet"
                    href="css/company-history.css"
                />
            </Head>
            <Banner data={data}/>
            <Timeline data={data}/>
            <Credo data={data}/>
        </>
    )
}