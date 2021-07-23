import { getData } from "../../../util/converArrayToObject"

export default function History({data}){
    const title = getData(data, /CompanyHistory_Content_SubContent1/)[0]
    const subtitle = getData(data, /CompanyHistory_Content_SubContent2/)[0]
    const history = getData(data, /CompanyHistory_History/)
    const sort = (array) => array.slice().sort((a,b)=>a?.name>b?.name? 1:-1)
    return(
        <div className="container-fluid content-wrapper-01">
            <div className="container no-spacing-mobile">
                <div className="row no-default-spacing">
                    <div className="col-12 cw1-child-01">
                        <span className="font-special">{title?.value}</span>
                        <span className="font-01">{subtitle?.value}</span>
                    </div>
                    {history.map((h,index)=>(
                        <div className="row col-12 no-default-spacing cw1-child-02" key={index}>
                            <div className="col-2 no-default-spacing cw1-c1-child-01">
                                <span className="font-02">{h.year}</span>
                            </div>
                            <div className="row col-10 cw1-c1-child-02">
                                <div className="space-trick"></div>
                                {sort(h.milestones).map((milestone,index)=>(
                                    h.milestones.length>1?
                                    (
                                        <div className="row col-12 no-default-spacing" key={index}>
                                            <div className="col-3 col-md-2 no-default-spacing">
                                                <span className="font-03">{milestone.date}</span>
                                            </div>
                                            <div className="col-9 col-md-10">
                                                {sort(milestone.events).slice(0,-1).map((event,index)=>(
                                                    <span className="font-04" key={index}>{event.event}</span>
                                                ))}
                                                {h.milestones.length-1!==index?
                                                    <span className="font-04b" key={milestone.events.length-1}>
                                                        {sort(milestone.events)[milestone.events.length-1].event}
                                                    </span>
                                                    :
                                                    <span className="font-04" key={milestone.events.length-1}>
                                                        {sort(milestone.events)[milestone.events.length-1].event}
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
                                                {sort(milestone.events).map((event,index)=>(
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