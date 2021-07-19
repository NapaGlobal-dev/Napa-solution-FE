export default function History({data}){
    const content1 = data.property[0]
    const history = data.property.slice(1)
    return(
        <div className="container-fluid no-default-spacing content-wrapper-01">
            <div className="container no-spacing-mobile">
                <div className="row no-default-spacing">
                    <div className="col-12 no-default-spacing cw1-child-01">
                        <span className="font-special">{content1.content[0].value}</span>
                        <span className="font-01">{content1.content[1].value}</span>
                    </div>
                    {history.map((h,index)=>(
                        <div className="row col-12 no-default-spacing cw1-child-02" key={index}>
                            <div className="col-2 no-default-spacing cw1-c1-child-01">
                                <span className="font-02">{h.value}</span>
                            </div>
                            <div className="row col-10 no-default-spacing cw1-c1-child-02">
                                <div className="space-trick"></div>
                                {h.content.map((c,index)=>(
                                    <div className="row col-12 no-default-spacing" key={index}>
                                        <div className="col-3 col-md-2 no-default-spacing">
                                            <span className="font-03">{c.value}</span>
                                        </div>
                                        <div className="col-9 col-md-10">
                                            {c.content.map((subc,index)=>(
                                                <span className="font-04" key={index}>{subc.value}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}