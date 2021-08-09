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
        <div className='containerC'>
            <h1 className='titleD'>TIMELINE COMPANY</h1>
            <div className='subtitleD'>会社情報</div>
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
    )
}