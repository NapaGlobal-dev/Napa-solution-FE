import { getData } from "../../util/converArrayToObject"

export default function Hisory({next}){
    // const history = getData(data, /CompanyHistory_History/)
    return(
            <div className='content'>
                <div className='leftC'>
                    <div className='yearC'>2008</div>
                    <div className='titleC'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className='subtitleC'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet luctus consequat. Nulla consequat dignissim ultricies. Ut ac tincidunt nibh, a tristique magna. Duis ullamcorper justo sit amet erat efficitur lacinia.</div>
                    <div className='buttonC' onClick={next}>
                        次の一歩
                        <svg 
                            height='7px'
                            fill='none'
                            strokeWidth='2'
                            stroke='#6C3AF5'
                            strokeDasharray='69px 138px'
                            viewBox="0 0 64 7"
                            style={{position:'absolute', right:-16}}
                        >
                            <path d="M0 6h61.5l-5.2-5.2"></path>
                        </svg>
                    </div>
                </div>
                <div className='rightC'>
                    <img src='/img/img-history.svg'></img>
                </div>
            </div>
    )
}