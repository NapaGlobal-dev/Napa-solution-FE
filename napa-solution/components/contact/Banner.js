import React from 'react';
import { convertArrToObject } from '../../util/converArrayToObject';

const ContactBanner = (props) => {
    const data = convertArrToObject(props.data.property);
    return (
        <div className="banner">
            <div className="overlay-header"></div>
            <img src='/img/untitled-img/contact.jpeg' className="image" alt="" />
            <div className='border-title'>
                <h1 style={{letterSpacing: -3, fontSize: '3.3rem'}}>Company</h1>
                <div style={{marginTop:20, fontSize: '1.2rem'}}>{data["Contact_Banner_Content"].value}</div>
            </div>
            <div className='textB'>
                <div className='titleB'>
                    ブルー・マーリン・パートナーズに、ご興味をお持ちいただきありがとうございます。
                </div>
                <div className='subtitleB'>
                    下記受付フォームに必要項目を入力して送信してください。3営業日以内に担当者より折り返しご連絡させていただきます。  
                </div>
            </div>
        </div>
    );
}

export default ContactBanner;