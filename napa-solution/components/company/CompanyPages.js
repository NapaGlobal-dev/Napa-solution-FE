import Head from "next/head"
import { GET_COMPANYPAGES } from "../../query/general"
import { useQuery } from "@apollo/client"
import {LazyLoadImage} from 'react-lazy-load-image-component'

export default function CompanyPages(){
    const {data, loading, error} = useQuery(GET_COMPANYPAGES)

    const pages = loading || data.pages[0].property
    return loading || (
        <>
            <Head>
                <link key="/css/company-pages.css" rel="stylesheet" href="/css/company-pages.css" />
            </Head>
            <div className="container-fluid image-wrapper-10 no-default-spacing">
                <div className="container row no-spacing-mobile no-space">
                    {pages.map(page=>(
                        <div className="col-xl-3 col-lg-6 col-sm-6 col-xs-12 image-top-wrapper img-child-01">
                            <a className="image-wrapper" href={page?.url}>
                                <LazyLoadImage
                                    effect='blur'
                                    src={page?.image?.original}
                                    placeholderSrc={page?.image?.thumbnail}
                                    threshold={100}
                                    height='100%'
                                    width='100%'
                                    className="image-top img-01"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}