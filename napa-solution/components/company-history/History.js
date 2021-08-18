import { getData } from "../../util/converArrayToObject"

export default function Hisory({next, timeline}){
    const subcontent = getData(timeline, /Subcontent/)[0]
    return(
            <div className='contentC'>
                <div className='leftC' id='down-up'>
                    <div className='yearC'>{timeline?.key}</div>
                    <div className='titleC'>{subcontent?.key}</div>
                    <div className='subtitleC'>{subcontent?.value}</div>
                    <div className='buttonC' onClick={next}>
                        次の一歩
                        <svg 
                            height='7px'
                            fill='none'
                            strokeWidth='2'
                            stroke='#6C3AF5'
                            strokeDasharray='69px 138px'
                            viewBox="0 0 64 7"
                            style={{position:'absolute', right:-16}}
                        >
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