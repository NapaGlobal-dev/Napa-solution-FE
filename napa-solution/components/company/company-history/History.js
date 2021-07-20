export default function History({history, content}){
    const contents = content.property
    return(
        <div className="container-fluid content-wrapper-01">
            <div className="container no-spacing-mobile">
                <div className="row no-default-spacing">
                    <div className="col-12 cw1-child-01">
                        <span className="font-special">{contents[0].value}</span>
                        <span className="font-01">{contents[1].value}</span>
                    </div>
                    {history.map((h,index)=>(
                        <div className="row col-12 no-default-spacing cw1-child-02" key={index}>
                            <div className="col-2 no-default-spacing cw1-c1-child-01">
                                <span className="font-02">{h.year}</span>
                            </div>
                            <div className="row col-10 cw1-c1-child-02">
                                <div className="space-trick"></div>
                                {h.milestones.map((milestone,index)=>(
                                    h.milestones.length>1?
                                    (
                                        <div className="row col-12 no-default-spacing" key={index}>
                                            <div className="col-3 col-md-2 no-default-spacing">
                                                <span className="font-03">{milestone.date}</span>
                                            </div>
                                            <div className="col-9 col-md-10">
                                                {milestone.events.slice(0,-1).map((event,index)=>(
                                                    <span className="font-04" key={index}>{event.event}</span>
                                                ))}
                                                {h.milestones.length-1!==index?
                                                    <span className="font-04b" key={milestone.events.length-1}>
                                                        {milestone.events[milestone.events.length-1].event}
                                                    </span>
                                                    :
                                                    <span className="font-04" key={milestone.events.length-1}>
                                                        {milestone.events[milestone.events.length-1].event}
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="row col-12 no-default-spacing" key={index}>
                                            <div className="col-3 col-md-2 no-default-spacing">
                                                <span className="font-03">{milestone.date}</span>
                                            </div>
                                            <div className="col-9 col-md-10">
                                                {milestone.events.map((event,index)=>(
                                                    <span className="font-04" key={index}>{event.event}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}