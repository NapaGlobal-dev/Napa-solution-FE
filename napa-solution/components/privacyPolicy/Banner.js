import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getData } from "../../util/converArrayToObject"
export default function Banner({data}){
    const banner = getData(data, /PrivacyPolicy_Banner_Banner/)[0]
    return(
        <div className="hearder-container">
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
            <div className="header-title-page header-title-page-spec">{banner?.value}</div>
        </div>
    )
}