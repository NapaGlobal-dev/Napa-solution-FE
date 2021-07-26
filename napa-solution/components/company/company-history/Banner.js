import {LazyLoadImage} from 'react-lazy-load-image-component'
import { getData } from "../../../util/converArrayToObject"

export default function Banner({data}){
    const banner = getData(data, /CompanyHistory_Banner_Banner/)[0]
    const title = getData(data, /CompanyHistory_Banner_Content1/)[0]
    const subtitle = getData(data, /CompanyHistory_Banner_Content2/)[0]
    return(
        <div id="root" className="hearder-container">
            <div className="overlay-header"></div>
            <LazyLoadImage
                effect='blur'
                src={banner?.image?.original}
                placeholderSrc={banner?.image?.thumbnail}
                threshold={100}
                height='100%'
                width='100%'
                className="image-header"
            />
            <div className="header-service">
                <div className="header-service-text text-center">{title?.value}</div>
                <div className="header-service-name text-center">{subtitle?.value}</div>
            </div>
            <div className="header-title">
                <span className="header-title-text">{banner?.value}</span>
            </div>
        </div>
    )
}