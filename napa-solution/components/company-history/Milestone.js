import {useRef, useState} from 'react'

export default function Milestone({scrollE, time, setTime, nextR}){
    const time1 = useRef()
    const time2 = useRef()
    const time3 = useRef()
    const time4 = useRef()
    const ring = useRef()
    const line = useRef()

    function animate(time, current){
        const arr = [time1, time2, time3, time4]
        const distance = time - current
        if(!distance) return

        let times
        if(distance>0)
            times = arr.slice(current, time)
        else
            times = arr.slice(time, current).reverse()
        
        const rate = 1000/150/Math.abs(distance/1.1)/2
        const road = Math.abs(80*(time-1)+70*(time-1) - 80*(current-1)-70*(current-1))
        console.log('road', road, current,time, rate*road)
        const timeDistance = rate*road
        const lineAnimate = {
            keyframes:[
                { height:  current==1? '0px' : 7+80*(current-1)+70*(current-1)+'px'},
                { height: time==1? '0px' : 7+80*(time-1)+70*(time-1)+'px' }
              ],
            options:{
                // timing options
                duration: distance>0? timeDistance : timeDistance-56*rate,
                fill: 'forwards'
              }
        }
        const timeAnimates = times.map((t, index)=> {
            if(distance>0)
                return {
                    keyframes:[
                        {backgroundColor:'#BDBDBD'},
                        {backgroundColor:'#412490'}
                    ],
                    options:{
                        duration: 56*rate,
                        delay: (index+1)*rate*80 + index*rate*56,
                        fill: 'forwards'
                    }
                }
            else
                return {
                    keyframes:[
                        {backgroundColor:'#412490'},
                        {backgroundColor:'#BDBDBD'}
                    ],
                    options:{
                        duration: 56*rate,
                        delay: index*rate*80 + index*rate*56,
                        fill: 'forwards'
                    }
                }
        })

        ring.current.setAttribute('style','background-color:#FFFFFF;')
        ring.current.style.border = '#FFFFFF solid 3px'
        ring.current.style.top = (time-1)*150+'px'
        // console.log('ring', distance, timeDistance)
        // ring.current.style.animationFillMode = "forwards"
        ring.current.animate([
            {border:'#FFFFFF solid 3px'},
            {border:'#412490 solid 3px'}
        ],{
            duration: timeDistance,
            fill: 'forwards'
        })

        // console.log('ring', ring.current.style.animationFillMode)
        line.current.animate(lineAnimate.keyframes, lineAnimate.options)
        times.forEach((time,index)=> time.current.animate(timeAnimates[index].keyframes, timeAnimates[index].options))

    }

    function next(newtime){
        if(newtime<4){
            animate(newtime+1, newtime)
            scrollE.current?.scrollTo({
                top: newtime*690,
                left: 0,
                behavior: 'smooth'
            })
            setTime(newtime+1)
        }
    }
    nextR.current=next

    function history(newtime){
        animate(newtime, time)
        scrollE.current?.scrollTo({
            top: (newtime-1)*690,
            left: 0,
            behavior: 'smooth'
        })
        if(newtime!==time){}
            setTime(newtime)
    }

    return (
        <div className='milestone'>
            <div className='circle1' onClick={()=>history(1)} ref={time1}>1</div>
            <div className='ring' ref={ring}></div>
            <div className='line' ref={line}></div>
            <div className='line1'></div>
            <div className='circle2' onClick={()=>history(2)} ref={time2}>2</div>
            <div className='circle3' onClick={()=>history(3)} ref={time3}>3</div>
            <div className='circle4' onClick={()=>history(4)} ref={time4}>4</div>
        </div>
    )
}