import React, { useEffect, useState } from 'react';
import { convertArrToObject } from '../../util/converArrayToObject';

const Message = (props) => {
    const data = convertArrToObject(props.data.property);

    const [defaultCenter, setDefaultCenter] = useState({ lat: 35.68965254335417, lng: 139.77491259808536 })

    useEffect(() => {
        document.body.classList.add("is-map");
        // handleAttachGoogleMap()
        return () => {
            document.body.classList.remove("is-map")
        }
    }, []);

    const handleAttachGoogleMap = () => {
        const map = new google.maps.Map(document.getElementById("google-map"), {
            center: defaultCenter,
            zoom: 19,
        });

        new google.maps.Size(42, 68)

        // map.addListener("zoom_changed", () => {
        //     // Get the current bounds, which reflect the bounds before the zoom.
        //     rectangle.setOptions({
        //         strokeColor: "#FF0000",
        //         strokeOpacity: 0.8,
        //         strokeWeight: 2,
        //         fillColor: "#FF0000",
        //         fillOpacity: 0.35,
        //         map,
        //         bounds: map.getBounds(),
        //     });
        // });

        setTimeout(() => {
            handleDrawMarkers(map);
        }, 2000);
    };


    const handleDrawMarkers = (map) => {
        new google.maps.Marker({
            position: defaultCenter,
            map: map,
            strokeWeight: 10
        });
    };

    return (
        <div className="profile-company">
            <div className="wrapper-head">
                <div className="wrap-title" >
                    <div className="wrap-message-icon">
                        <div className="line-1" />
                        <div className="line-2" />
                        <div className="line-3" />
                    </div>
                    <div className="profile-title" id='down-up'>
                        <div className="profile-big-title">
                            <h1>{data["CompanyProfile_Message_Label"].value}</h1>
                        </div>
                        <div className="profile-sub-title">
                           {data["CompanyProfile_Message_Description"].value}
                        </div>
                        <div className="divided-line" />
                    </div>
                </div>

                <div className="wrap-address-message">
                    <div id = "google-map">
                    <iframe src={data["CompanyProfile_Message_Location"].value}
                        style={{ border: 0, width: "100%", height: "100%" }}
                        loading="lazy"
                        allowFullScreen = ""
                        >
                    </iframe>
                    </div>
                    <div className="wrap-detail">
                        <div className="wrap-message" id='down-up'>
                            <div className="message-label">
                            {data["CompanyProfile_Message_Title"].value}
                            </div>
                            <div className="message-content">
                                {data["CompanyProfile_Message_Title"].content.map((content, index) => (
                                    <React.Fragment key={index}>
                                        {'('+(index+1)+') '+content.value}
                                        <br />
                                    </React.Fragment>)
                                )}
                            </div>
                        </div>
                        {/* <div id="detail-btn-company" className="btn-message">
                            <a id="detail-btn-company-content" href = {data["CompanyProfile_Message_Btn"].url} >
                                {data["CompanyProfile_Message_Btn"].value}
                            </a>
                            <svg id="stroke-arr-btn" viewBox="0 0 64 7"><path d="M0 6h61.5l-5.2-5.2"></path></svg>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Message;