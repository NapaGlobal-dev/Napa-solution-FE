import { getData } from "../../../util/converArrayToObject"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function Hisory({ next, timeline }) {
    const subcontent = getData(timeline, /Subcontent/)[0]

    return (
        <div className='content-timeline'>
            <div className='left-timeline' id='down-up'>
                <div className='year-timeline'>{timeline?.key}</div>
                <div className='title-timeline'>{subcontent?.key}</div>
                <div className='subtitle-timeline'>{subcontent?.value}</div>
                <div id='detail-btn-company' className='btn-res' onClick={next}>
                    <span id="detail-btn-company-content">次の一歩</span>
                    <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                        <path d="M0 6h61.5l-5.2-5.2"></path>
                    </svg>
                </div>
            </div>
            <div className='right-timeline'>
                <LazyLoadImage
                    effect="blur"
                    src={timeline?.image?.original}
                    placeholderSrc={timeline?.image?.thumbnail}
                    threshold={100}
                    width="100%"
                    height='100%'
                    className='img-timeline'
                />
            </div>
        </div>
    )
}