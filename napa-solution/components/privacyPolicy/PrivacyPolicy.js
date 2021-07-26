
import { getData } from "../../util/converArrayToObject"

export default function PrivacyPolicy({data}){
    const privacyPolicy1Title1 = getData(data, /PrivacyPolicy_1_Title_Subtitle1/)[0]
    const privacyPolicy1Title2 = getData(data, /PrivacyPolicy_1_Title_Subtitle2/)[0]
    const privacyPolicy1Contents = getData(data, /PrivacyPolicy_1_Content/)
    const privacyPolicy1Roots = getData(data, /PrivacyPolicy_1_Foot_Content/)

    const privacyPolicy2Title1 = getData(data, /PrivacyPolicy_2_Title_Subtitle1/)[0]
    const privacyPolicy2Title2 = getData(data, /PrivacyPolicy_2_Title_Subtitle2/)[0]
    const privacyPolicy2Contents = getData(data, /PrivacyPolicy_2_Content/)

    const privacyPolicy3Title1 = getData(data, /PrivacyPolicy_3_Title_Subtitle1/)[0]
    const privacyPolicy3Title2 = getData(data, /PrivacyPolicy_3_Title_Subtitle2/)[0]
    const privacyPolicy3Contents = getData(data, /PrivacyPolicy_3_Content/)
    const privacyPolicy3Roots = getData(data, /PrivacyPolicy_3_Foot_Content/)

    return (
        <>
            <section className="privacy-policy-flow">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <h2 className="operation-management-wrap operation-management-flow-title">
                                    <span className="operation-management-flow-spec">{privacyPolicy1Title1?.value}</span>
                                    {privacyPolicy1Title2?.value}
                                </h2>

                                {privacyPolicy1Contents.map((content, index)=>(
                                    <div key={index}>
                                        <div className="privacy-policy-info-element">
                                            <p className="privacy-policy-info-no">{index+1}</p>
                                            <p className="privacy-policy-info-desc">{content.value}</p>
                                        </div>
                                        {content.content.length?
                                            <div className="privacy-policy-info-group-element-spec">
                                                {content.content.map((subcontent, index)=>(
                                                    <p className="privacy-policy-info-desc" key={index}>{index+1+') '+subcontent.value}</p>
                                                ))}
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>
                                ))}

                                    {privacyPolicy1Roots.map((content,index)=>(
                                        <div className="privacy-policy-info-element-foot" key={index}>
                                            <p className="privacy-policy-info-element-foot-desc">
                                                {content.value}
                                            </p>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="operation-management-people privacy-policy-flow">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <h2 className="operation-management-wrap operation-management-flow-title">
                                    <span className="operation-management-flow-spec">{privacyPolicy2Title1?.value}</span>
                                    {privacyPolicy2Title2?.value}
                                </h2>

                                {privacyPolicy2Contents.map((content, index)=>(
                                    <div key={index}>
                                        <div className="privacy-policy-info-element">
                                            <p className="privacy-policy-info-desc privacy-policy-info-desc-spec">
                                                {content.value}
                                            </p>
                                        </div>
                                        {content.content.map((subcontent, index)=>(
                                            <div className="privacy-policy-info-element" key={index}>
                                                <p className="privacy-policy-info-no">{index+1}</p>
                                                <p className="privacy-policy-info-desc">
                                                    {subcontent.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="privacy-policy-flow">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">

                                <h2 className="operation-management-wrap operation-management-flow-title">
                                    <span className="operation-management-flow-spec">{privacyPolicy3Title1?.value}</span>
                                    {privacyPolicy3Title2?.value}
                                </h2>

                                {privacyPolicy3Contents.map((content, index)=>(
                                    <div className="privacy-policy-info-element" key={index}>
                                        <p className="privacy-policy-info-desc privacy-policy-info-desc-spec">
                                            {content.value}
                                        </p>
                                    </div>
                                ))}
                                {privacyPolicy3Roots.map((content, index)=>(
                                    <div className="privacy-policy-info-element" key={index}>
                                        <p className="privacy-policy-info-desc">
                                            {content.value}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="operation-management-divider"></div>
        </>
    )
}