import {useRef} from 'react'

export default function Milestone({scrollE, time, setTime, nextR, number=5}){
    if(number<5) number=5
    if(number>8) number=8

    const time1 = useRef()
    const time2 = useRef()
    const time3 = useRef()
    const time4 = useRef()
    const time5 = useRef()
    const time6 = useRef()
    const time7 = useRef()
    const time8 = useRef()
    const ring = useRef()
    const line = useRef()

    const timeArr = [time1, time2, time3, time4, time5, time6, time7, time8]

    const choices = {
        number5:{
            circleDiameter:51,
            ringDiameter:61,
            between:40,
            lineWidth:3,
            fontSize: 26,
        },
        number6:{
            circleDiameter:46,
            ringDiameter:57,
            between:30,
            lineWidth:3,
            fontSize: 22,
        },
        number7:{
            circleDiameter:40,
            ringDiameter:51,
            between:20,
            lineWidth:3,
            fontSize: 20,
        },
        number8:{
            circleDiameter:40,
            ringDiameter:51,
            between:13,
            lineWidth:2,
            fontSize: 20,
        },
    }

    const choiced = choices['number'+number]
    const circleDiameter = choiced.circleDiameter
    const ringDiameter = choiced.ringDiameter
    const between = choiced.between
    const lineWidth = choiced.lineWidth
    const fontSize = choiced.fontSize

    
    const milestone = {
        width: 80,
        height: ringDiameter+(ringDiameter+between)*(number-1),
    }
    const circle1 = {
        width: circleDiameter,
        height: circleDiameter,
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        font: 'normal normal bold '+fontSize+'px Roboto',
        backgroundColor:' #412490',
        color: '#FFFFFF',
        position: 'absolute',
        top:ringDiameter/2-circleDiameter/2,
        right: 40-circleDiameter/2,
        zIndex: 9,
      }
    const ringStyle = {
        width: ringDiameter,
        height: ringDiameter,
        border: '#412490 solid 3px',
        borderRadius: '100%',
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 0,
        right: 40-ringDiameter/2,
        zIndex: 6,
      }
    const lineStyle = {
        width: lineWidth,
        height: 0,
        backgroundColor: '#412490',
        position: 'absolute',
        top: ringDiameter/2-circleDiameter/2+circleDiameter,
        right: 40-lineWidth/2,
        zIndex: 3
      }
    const backgroundLine = {
        width: lineWidth,
        height: (ringDiameter+between)*(number-1),
        backgroundColor: '#BDBDBD',
        position: 'absolute',
        top: ringDiameter/2-circleDiameter/2+circleDiameter,
        right: 40-lineWidth/2,
      }
    function circleN(n){
        return {
            width: circleDiameter,
            height: circleDiameter,
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            font: 'normal normal bold '+fontSize+'px Roboto',
            backgroundColor: '#BDBDBD',
            color: '#FFFFFF',
            position: 'absolute',
            top: ringDiameter/2-circleDiameter/2+(between+ringDiameter)*(n-1),
            right: 40-circleDiameter/2,
            zIndex: 9,
        }
    }
    function animate(time, current){
        const distance = time - current
        if(!distance) return

        let times
        if(distance>0)
            times = timeArr.slice(current, time)
        else
            times = timeArr.slice(time, current).reverse()
        
        const rate = 1000/(between+ringDiameter)/Math.abs(distance/1.1)/2
        const road = Math.abs(between*(time-1)+ringDiameter*(time-1) - between*(current-1)-ringDiameter*(current-1))
        // console.log('road', road, current,time, rate*road)
        const timeDistance = rate*road
        const lineAnimate = {
            keyframes:[
                { height:  current==1? '0px' : ringDiameter/2-circleDiameter/2+between*(current-1)+ringDiameter*(current-1)+'px'},
                { height: time==1? '0px' : ringDiameter/2-circleDiameter/2+between*(time-1)+ringDiameter*(time-1)+'px' }
              ],
            options:{
                // timing options
                duration: distance>0? timeDistance : timeDistance-circleDiameter*rate,
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
                        duration: circleDiameter*rate,
                        delay: (index+1)*rate*between + index*rate*circleDiameter,
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
                        duration: circleDiameter*rate,
                        delay: index*rate*between + index*rate*circleDiameter,
                        fill: 'forwards'
                    }
                }
        })

        ring.current.style.border = '#FFFFFF solid 3px'
        ring.current.style.top = (time-1)*(ringDiameter+between)+'px'
        ring.current.animate([
            {border:'#FFFFFF solid 3px'},
            {border:'#412490 solid 3px'}
        ],{
            duration: timeDistance,
            fill: 'forwards'
        })

        line.current.animate(lineAnimate.keyframes, lineAnimate.options)
        times.forEach((time,index)=> time.current.animate(timeAnimates[index].keyframes, timeAnimates[index].options))

    }

    function next(newtime){
        if(newtime<number){
            animate(newtime+1, newtime)
            scrollE.current?.scrollTo({
                top: newtime*600,
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
            top: (newtime-1)*600,
            left: 0,
            behavior: 'smooth'
        })
        if(newtime!==time){}
            setTime(newtime)
    }

    return (
        <div className='milestone' style={milestone}>
            <div style={circle1} onClick={()=>history(1)} ref={time1}>1</div>
            <div style={ringStyle} ref={ring} id='dd'></div>
            <div style={lineStyle} ref={line}></div>
            <div style={backgroundLine}></div>
            {(()=>{
                const circles = []
                for(let i=2;i<=number;i++){
                    circles.push(
                        <div style={circleN(i)} onClick={()=>history(i)} ref={timeArr[i-1]} key={i}>{i}</div>
                    )
                }
                return circles
            })()}
        </div>
    )
}