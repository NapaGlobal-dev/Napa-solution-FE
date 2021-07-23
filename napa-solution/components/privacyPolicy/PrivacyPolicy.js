
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
            <section class="privacy-policy-flow">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h2 class="operation-management-wrap operation-management-flow-title">
                                    <span class="operation-management-flow-spec">{privacyPolicy1Title1?.value}</span>
                                    {privacyPolicy1Title2?.value}
                                </h2>

                                {privacyPolicy1Contents.map((content, index)=>(
                                    <div key={index}>
                                        <div class="privacy-policy-info-element">
                                            <p class="privacy-policy-info-no">{index+1}</p>
                                            <p class="privacy-policy-info-desc">{content.value}</p>
                                        </div>
                                        {content.content.length?
                                            <div class="privacy-policy-info-group-element-spec">
                                                {content.content.map((subcontent, index)=>(
                                                    <p class="privacy-policy-info-desc" key={index}>{index+1+') '+subcontent.value}</p>
                                                ))}
                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>
                                ))}

                                    {privacyPolicy1Roots.map((content,index)=>(
                                        <div class="privacy-policy-info-element-foot" key={index}>
                                            <p class="privacy-policy-info-element-foot-desc">
                                                {content.value}
                                            </p>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="operation-management-people privacy-policy-flow">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h2 class="operation-management-wrap operation-management-flow-title">
                                    <span class="operation-management-flow-spec">{privacyPolicy2Title1?.value}</span>
                                    {privacyPolicy2Title2?.value}
                                </h2>

                                {privacyPolicy2Contents.map((content, index)=>(
                                    <div key={index}>
                                        <div class="privacy-policy-info-element">
                                            <p class="privacy-policy-info-desc privacy-policy-info-desc-spec">
                                                {content.value}
                                            </p>
                                        </div>
                                        {content.content.map((subcontent, index)=>(
                                            <div class="privacy-policy-info-element" key={index}>
                                                <p class="privacy-policy-info-no">{index+1}</p>
                                                <p class="privacy-policy-info-desc">
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

            <section class="privacy-policy-flow">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                <h2 class="operation-management-wrap operation-management-flow-title">
                                    <span class="operation-management-flow-spec">{privacyPolicy3Title1?.value}</span>
                                    {privacyPolicy3Title2?.value}
                                </h2>

                                {privacyPolicy3Contents.map((content, index)=>(
                                    <div class="privacy-policy-info-element" key={index}>
                                        <p class="privacy-policy-info-desc privacy-policy-info-desc-spec">
                                            {content.value}
                                        </p>
                                    </div>
                                ))}
                                {privacyPolicy3Roots.map((content, index)=>(
                                    <div class="privacy-policy-info-element" key={index}>
                                        <p class="privacy-policy-info-desc">
                                            {content.value}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="operation-management-divider"></div>
        </>
    )
}