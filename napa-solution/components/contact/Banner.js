import React from 'react';
import { convertArrToObject } from '../../util/converArrayToObject';

const ContactBanner = (props) => {
    const data = convertArrToObject(props.data.property);
    return (
        <div className="hearder-container">
            <div className="overlay-header"></div>
            <img src={data["Contact_Banner_Img"].image.original} className="image-header" alt="" />
            <div className="header-title-page header-title-page-spec">{data["Contact_Banner_Content"].value}</div>
        </div>
    );
}

export default ContactBanner;