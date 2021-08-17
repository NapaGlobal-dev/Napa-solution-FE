import { getData } from "../../util/converArrayToObject"

export default function Credo({data}){
    const title = getData(data, /CompanyHistory_Credo_Title/)[0]
    const credos = getData(data, /CompanyHistory_Credo_[0-9]/)
    return(
        <>
            <div className='cover'>
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
            </div>
            <div className='containerD'>
                {credos.map((credo,index)=>(
                    <div className={credos.length!=index+1?'rowD':'rowD-end'} key={index}>
                        <div className='leftColumn'>{index+1+'. '}{credo?.key}</div>
                        <div className='rightColumn'>{credo?.value}</div>
                    </div>
                ))}
            </div>
        </>
    )
}