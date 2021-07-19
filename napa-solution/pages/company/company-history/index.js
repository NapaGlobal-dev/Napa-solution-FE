import Banner from "../../../components/company/company-history/Banner"
import History from "../../../components/company/company-history/History"
import Breadcrumb from "../../../components/company/company-history/Breadcrumb"

import { GET_COMPANYHISTORY } from "../../../query/general"
import { useQuery } from "@apollo/client"
import Head from "next/head"


export default function CompanyHistory(){
    const {data, loading, error} = useQuery(GET_COMPANYHISTORY)

    const banner = loading || data.banner[0]
    const breadcrumb = loading || data.breadcrumb[0]
    const history = loading || data.history[0]

    return loading || (
        <>
            <Head>
                <link rel="stylesheet" href="/css/common.css" />
                <link rel="stylesheet" type="text/css" href="/css/isotope.css" media="screen" />
                <link
                    key="/css/company-history.css"
                    rel="stylesheet"
                    href="/css/company-history.css"
                /> 
                <link key="/css/header.css" rel="stylesheet" href="/css/header.css" />
    <script src="../js/common/jquery-3.4.1.slim.min.js"></script>
    <script src="../js/common/popper.min.js"></script>
    <script src="../js/common/bootstrap.min.js"></script>
    {/* <script src="../js/common/scroll-top.js"></script> */}
            </Head>
            <Banner data={banner}/>
            <Breadcrumb data={breadcrumb}/>
            <History data={history}/>
            <div className="container-fluid image-wrapper-10 no-default-spacing">
                <div className="container row no-spacing-mobile">
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-01">
                        <a className="image-wrapper" href="#"><img className="image-top img-01" src="./img/company-image-02.svg" /></a>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-02">
                        <a className="image-wrapper" href="company-profile.html"><img className="image-top img-02"
                                src="./img/company-image-03.svg" /></a>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-03">
                        <a className="image-wrapper" href="company-history.html"><img className="image-top img-03"
                                src="./img/company-image-04.svg" /></a>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 no-default-spacing image-top-wrapper img-child-04">
                        <a className="image-wrapper" href="csr.html"><img className="image-top img-04"
                                src="./img/company-image-05.svg" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}