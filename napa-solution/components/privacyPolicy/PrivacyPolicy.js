import { getData } from "../../util/converArrayToObject"

export default function PrivacyPolicy({data}){
    const title = getData(data, /PrivacyPolicy_Title/)[0]
    const policyContent = getData(data, /PrivacyPolicy_Content/)[0]
    const contact = getData(data, /PrivacyPolicy_Contact/)[0]
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return (
        <div className='cover policy'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58.948"
            height="124.343"
            viewBox="0 0 58.948 124.343"
            >
            <g
                id="Group_135"
                data-name="Group 135"
                transform="translate(-98.543 -1182.829)"
            >
                <line
                id="Line_88"
                data-name="Line 88"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1261.142)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
                />
                <line
                id="Line_89"
                data-name="Line 89"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1283.819)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="6"
                />
                <line
                id="Line_90"
                data-name="Line 90"
                x1="94.203"
                transform="matrix(0.574, -0.819, 0.819, 0.574, 101, 1306.024)"
                fill="none"
                stroke="#6a43d5"
                stroke-width="4"
                />
            </g>
            </svg>
            <h3>{title?.key}</h3>
            <p>{title?.value}</p>
            <div className='devider'/>
            <div className='policy-content'>{policyContent?.value}</div>
            {policyContent?.content.map((policy,index)=>
                <div className='p-subcontent' key={index}>{alphabet[index]+') '+policy?.value}</div>
            )}
            <div className='p-contact'>{contact?.value}</div>
            {contact?.content.map((c,index)=>
                <div className='c-content' key={index}>{c?.value}</div>
            )}
        </div>
    )
}