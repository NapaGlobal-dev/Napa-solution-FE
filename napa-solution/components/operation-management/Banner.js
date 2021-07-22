import React from 'react'
import { convertArrToObject } from '../../util/converArrayToObject';

const OperationManagermentBanner = (props) => {
    const data = convertArrToObject(props.data.property)
    return (
        <div id="root" className="container-fluid content-wrapper no-default-spacing">
            <div className="hearder-container">
                <div className="overlay-header"></div>
                <img src={data["OperationManagement_Banner_Image"].image.original} className="image-header" alt="" />
                <div className="header-service">
                    <div className="header-service-text text-center">{data["OperationManagement_Banner_TitleEN"].value}</div>
                    <div className="header-service-name text-center">{data["OperationManagement_Banner_TitleJP"].value}</div>
                </div>
                <div className="header-title-page">{data["OperationManagement_Banner_Pagename"].value}</div>
            </div>

        </div>
    );
}

export default OperationManagermentBanner