import React from 'react'
import { convertArrToObject, convertArrToObjectBySpecialName } from '../../util/converArrayToObject'

const TeamWork = (props) => {
    const dataTeamWork = convertArrToObject(props.dataTeamWork.property)
    let data = props.dataService.property
    data = data.map((item, key) => { return convertArrToObjectBySpecialName(item.content) })
    return (
        <section className="operation-management-people">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="operation-management-wrap operation-management-flow-title">
                                <span className="operation-management-flow-spec">{dataTeamWork['OperationManagement_Teamwork_Title'].value}</span>
                                {dataTeamWork["OperationManagement_Teamwork_Subtitle"].value
                                    .split("\\n")
                                    .map((text, key) => (
                                        <React.Fragment key={key}>
                                            {text}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </h2>
                            <div className="operation-management-wrap operation-management-people-intro operation-management-people-foot">
                                {data.map((item, key) => (
                                    <div key={key} className="operation-management-people-info-cmp">
                                        <div className="operation-management-people-info-top">
                                            <p className="operation-management-people-info-title">{item.Title.value}</p>
                                        </div>

                                        <img src={item.Img.image.original} alt="desk" className="operation-management-people-info-img" />

                                        <div className="operation-management-people-info-desc">
                                            <p className="operation-management-people-info-detail">{item.Content.value}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* <div className="operation-management-people-info-cmp">
                                    <div className="operation-management-people-info-top">
                                        <p className="operation-management-people-info-title">さまざまな提案で省エネや コストダウンに貢献します</p>
                                    </div>

                                    <img src="./img/operation-management/team.png" alt="desk" className="operation-management-people-info-img" />

                                    <div className="operation-management-people-info-desc">
                                        <p className="operation-management-people-info-detail">日常の運転管理に加え、予防保全の立場からさまざまな提案も行っています。専門のエンジニアを抱える技術部とも連携しながら、点検や改修だけでなくリフォームも含めた提案を行い、省エネやコストダウンに貢献します。特定の建設会社や設備会社の系列企業でないため、お客様の側に立った最適なご提案とアドバイスを行うことができます。</p>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TeamWork