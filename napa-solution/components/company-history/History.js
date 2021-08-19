import { getData } from "../../util/converArrayToObject"

export default function Hisory({ next, timeline }) {
    const subcontent = getData(timeline, /Subcontent/)[0]

    return (
        <div className='contentC'>
            <div className='leftC'>
                <div className='yearC'>{timeline?.key}</div>
                <div className='titleC'>{subcontent?.key}</div>
                <div className='subtitleC'>{subcontent?.value}</div>
                <div id='detail-btn-company' onClick={next}>
                    <span id="detail-btn-company-content">次の一歩</span>
                    <svg id="stroke-arr-btn" viewBox="0 0 64 7">
                        <path d="M0 6h61.5l-5.2-5.2"></path>
                    </svg>
                </div>
            </div>
            <div className='rightC'>
                <img src='/img/img-history.svg'></img>
            </div>
        </div>
    )
}