import { getData } from "../../util/converArrayToObject"
import {useRef, useState} from 'react'
import Hisory from "./History"
import Milestone from "./Milestone"
import HorizonMilestone from "./HorizonMilstone"

export default function Timeline({data}){
    // const history = getData(data, /CompanyHistory_History/)
    const scrollE = useRef()
    const [time, setTime] = useState(1)
    const nextR = useRef()

    function next(time){
        nextR?.current(time)
    }

    return(
        <>
            <div className='cover'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58.948"
                height="124.343"
                viewBox="0 0 58.948 124.343"
                >
                <g
                    id="Group_135"
                    data-name="Group 135"
                    transform="translate(-98.543 -1182.829)"
                >
                    <line
                    id="Line_88"
                    data-name="Line 88"
                    x1="94.203"
                    transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
                    fill="none"
                    stroke="#6a43d5"
                    stroke-width="4"
                    />
                    <line
                    id="Line_89"
                    data-name="Line 89"
                    x1="94.203"
                    transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
                    fill="none"
                    stroke="#6a43d5"
                    stroke-width="6"
                    />
                    <line
                    id="Line_90"
                    data-name="Line 90"
                    x1="94.203"
                    transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
                    fill="none"
                    stroke="#6a43d5"
                    stroke-width="4"
                    />
                </g>
                </svg>
                <h3>TIMELINE COMPANY</h3>
                <p>会社情報</p>
            </div>
            <div className='containerC'>
                <div className='timeline'>
                    <Milestone scrollE={scrollE} setTime={setTime} nextR={nextR} time={time}/>
                    <div className='slide'>
                        <div className='stack' ref={scrollE}>
                            <Hisory next={()=>next(1)}/>
                            <Hisory next={()=>next(2)}/>
                            <Hisory next={()=>next(3)}/>
                            <Hisory next={()=>next(4)}/>
                        </div>
                    </div>
                </div>
                <div className='horizonMilestone'>
                    <HorizonMilestone scrollE={scrollE} setTime={setTime} time={time}/>
                </div>
            </div>
        </>
    )
}