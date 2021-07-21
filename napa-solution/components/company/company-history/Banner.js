export default function Banner({data}){
    const banner = data.property[0]
    const content1 = data.property[1]
    const content2 = data.property[2]
    return(
        <div id="root" className="hearder-container">
            <div className="overlay-header"></div>
            <img src={banner.image.publicUrl} className="image-header" alt="" />
            <div className="header-service">
                <div className="header-service-text text-center">{content1.value}</div>
                <div className="header-service-name text-center">{content2.value}</div>
            </div>
            <div className="header-title">
                <span className="header-title-text">{banner.value}</span>
            </div>
        </div>
    )
}