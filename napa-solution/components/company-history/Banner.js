import {LazyLoadImage} from 'react-lazy-load-image-component'
import { getData } from "../../util/converArrayToObject"
import Head from "next/head"

export default function Banner({data}){
    const banner = getData(data, /Banner_Banner/)[0]
    const title = getData(data, /CompanyHistory_Banner_Content1/)[0]
    const subtitle = getData(data, /CompanyHistory_Banner_Content2/)[0]
    return(
        <>
            <Head>
                <link
                    key="css/banner.css"
                    rel="stylesheet"
                    href="css/banner.css"
                />
            </Head>
            <div className="banner">
                {/* <LazyLoadImage
                    effect='blur'
                    src={banner?.image?.original}
                    placeholderSrc={banner?.image?.thumbnail}
                    threshold={100}
                    height='100%'
                    width='100%'
                    className="image-header"
                /> */}
                <div className="overlay-headerA"></div>
                <img src='/img/untitled-img/contact.jpeg' className="imageA" alt="" />
                <div className='border-titleA'>
                    <h1 style={{letterSpacing: -3, fontSize: '3.3rem'}}>Company</h1>
                    <div style={{marginTop:20, fontSize: '1.2rem'}}>{banner? banner.value: 'タイトル'}</div>
                </div>
                <div className='textB'>
                    <div className='titleB'>
                        ブルー・マーリン・パートナーズに、ご興味をお持ちいただきありがとうございます。
                    </div>
                    <div className='subtitleB'>
                        下記受付フォームに必要項目を入力して送信してください。3営業日以内に担当者より折り返しご連絡させていただきます。  
                    </div>
                </div>
            </div>
        </>
    )
}