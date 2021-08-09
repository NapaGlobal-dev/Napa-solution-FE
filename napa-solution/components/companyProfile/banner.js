import React from 'react';
import { convertArrToObject, getData } from '../../util/converArrayToObject';

const Banner = (props) => {

    const data = convertArrToObject(props.data.property);

    return (
        <div className="banner">
            <div className="overlay-header"></div>
            <img src='/img/untitled-img/contact.jpeg' className="image" alt="" />
            <div className='border-title'>
                <h1 style={{ letterSpacing: -3, fontSize: '3.3rem' }}>{data["CompanyProfile_Banner_Title"].value}</h1>
                <div style={{ marginTop: 20, fontSize: '1.2rem' }}>{data["CompanyProfile_Banner_SubTitle"].value}</div>
            </div>
            <div className='textB'>
                <div className='titleB'>
                    {data["CompanyProfile_Banner_Content"].value}
                </div>
                <div className='subtitleB'>
                    {data["CompanyProfile_Banner_SubContent"].value}
                </div>
            </div>
        </div>
    );
}

export default Banner