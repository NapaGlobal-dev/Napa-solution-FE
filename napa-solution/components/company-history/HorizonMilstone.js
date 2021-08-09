import {useRef, useState} from 'react'

export default function HorizonMilestone({scrollE, time, setTime}){
    const time1 = useRef()
    const time2 = useRef()
    const time3 = useRef()
    const time4 = useRef()
    const animateRing = useRef()
    const animateLine = useRef()

    function animate(time, current){
        const arr = [time1, time2, time3, time4]
        const distance = time - current
        if(!distance) return

        let times
        if(distance>0)
            times = arr.slice(current, time)
        else
            times = arr.slice(time, current).reverse()
        
        const linePosition =[
            'm16,50l0,0',
            'm16,50l134,0',
            'm16,50l274,0',
            'm16,50l414,0'
        ]
        const ringPosition =[
            'm10,50l30,-30 l30,30 l-30,30 l-30,-30 l30,-30',
            'm150,50l30,-30 l30,30 l-30,30 l-30,-30 l30,-30',
            'm290,50l30,-30 l30,30 l-30,30 l-30,-30 l30,-30',
            'm430,50l30,-30 l30,30 l-30,30 l-30,-30 l30,-30'
        ]
        const timeDistance = Math.abs(distance)*50+200
        
        console.log(timeDistance)
        animateLine.current.setAttributeNS(
            null,
            'values',
            linePosition[current-1]+';'+linePosition[time-1]
        )
        if(current===1)
            setTimeout(() => {
                animateLine.current.setAttributeNS(null, 'dur', timeDistance - 10 +'ms')
                animateLine.current.beginElement()
            }, 10);
        else{
            animateLine.current.setAttributeNS(null, 'dur', timeDistance+'ms')
            animateLine.current.beginElement()
        }

        animateRing.current.setAttributeNS(
            null,
            'values',
            ringPosition[current-1]+';'+ringPosition[time-1]
        )
        animateRing.current.setAttributeNS(null, 'dur', timeDistance+'ms')
        animateRing.current.beginElement()
        
        const unit = timeDistance/Math.abs(distance)

        if(distance>0)
            times.forEach((time,index)=>{
                    setTimeout(() => {
                        time.current.style.fill='#412490'
                    }, (index+1)*unit)
            })
        else
            times.forEach((time,index)=>{
                    setTimeout(() => {
                        time.current.style.fill='#9E9E9E'
                    }, index*unit + 20);
            })

    }

    function history(newtime){
        animate(newtime, time)
        scrollE.current?.scrollTo({
            top: 0,
            left: (newtime-1)*scrollE.current.offsetWidth,
            behavior: 'smooth'
        })
        if(newtime!==time){}
            setTime(newtime)
    }

    return (
        // <div className='milestone'>
        //     <div className='circle1' onClick={()=>history(1)} ref={time1}>1</div>
        //     <div className='ring' ref={ring}></div>
        //     <div className='line' ref={line}></div>
        //     <div className='line1'></div>
        //     <div className='circle2' onClick={()=>history(2)} ref={time2}>2</div>
        //     <div className='circle3' onClick={()=>history(3)} ref={time3}>3</div>
        //     <div className='circle4' onClick={()=>history(4)} ref={time4}>4</div>
        // </div>
        <svg viewBox='0 0 500 100' >
            {/* <rect width="1000" height="100" fill='#9E9E9E' /> */}
            <path d='m69,50l82,0' stroke="#9E9E9E" strokeWidth="2" />
            <path d='m209,50l82,0' stroke="#9E9E9E" strokeWidth="2" />
            <path d='m349,50l82,0' stroke="#9E9E9E" strokeWidth="2" />
            <path stroke="#412490" strokeWidth="2">
                <animate attributeName="d" begin="indefinite" fill='freeze' ref={animateLine}></animate>
            </path>
            <path
                d='m15,50l25,-25 l25,25 l-25,25 l-25,-25 l25,-25'
                fill="#412490"
                ref={time1}
                onClick={()=>history(1)}
            />
            <text
                x="34"
                y="57"
                fontSize="1.5em"
                fontWeight='bold'
                fontFamily="roboto"
                fill="#FFFFFF"
                onClick={()=>history(1)}
            >1</text>

            <path
                d='m155,50l25,-25 l25,25 l-25,25 l-25,-25 l25,-25'
                fill="#9E9E9E"
                ref={time2}
                onClick={()=>history(2)}
            />
            <text
                x="174"
                y="57"
                fontSize="1.5em"
                fontWeight='bold'
                fontFamily="roboto"
                fill="#FFFFFF"
                onClick={()=>history(2)}
            >2</text>
            <path
                d='m295,50l25,-25 l25,25 l-25,25 l-25,-25 l25,-25'
                fill="#9E9E9E"
                ref={time3}
                onClick={()=>history(3)}
            />
            <text
                x="314"
                y="57"
                fontSize="1.5em"
                fontWeight='bold'
                fontFamily="roboto"
                fill="#FFFFFF"
                onClick={()=>history(3)}
            >3</text>
            <path
                d='m435,50l25,-25 l25,25 l-25,25 l-25,-25 l25,-25'
                fill="#9E9E9E"
                ref={time4}
                onClick={()=>history(4)}
            />
            <text
                x="453"
                y="57"
                fontSize="1.5em"
                fontWeight='bold'
                fontFamily="roboto"
                fill="#FFFFFF"
                onClick={()=>history(4)}
            >4</text>
            <path
                d='m10,50l30,-30 l30,30 l-30,30 l-30,-30 l30,-30'
                stroke="#412490"
                strokeWidth="2"
                fill="none"
            >
                <animate attributeName="d" begin="indefinite" fill='freeze' ref={animateRing}></animate>
            </path>
        </svg>
    )
}