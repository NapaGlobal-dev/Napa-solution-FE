import { getData } from "../../util/converArrayToObject"

export default function PrivacyPolicy({data}){
    const title = getData(data, /PrivacyPolicy_Title/)[0]
    const policyContent = getData(data, /PrivacyPolicy_Content/)[0]
    const contact = getData(data, /PrivacyPolicy_Contact/)[0]
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return (
        <div className='cover policy'>
           <img className="decor-head-line" src = "/img/line-style.svg"/>
            <h3 id='down-up'>{title?.key}</h3>
            <p id='down-up'>{title?.value}</p>
            <div className="wrap-content" id='down-up'>
                <div className='policy-content'>{policyContent?.value}</div>
                {policyContent?.content.map((policy,index)=>
                    <div className='p-subcontent' key={index}>{alphabet[index]+') '+policy?.value}</div>
                )}
            </div>
            <div className="wrap-content" id='down-up'>
                <div className='p-contact'>{contact?.value}</div>
                {contact?.content.map((c,index)=>
                    <div className='c-content' key={index}>{c?.value}</div>
                )}
            </div>
        </div>
    )
}