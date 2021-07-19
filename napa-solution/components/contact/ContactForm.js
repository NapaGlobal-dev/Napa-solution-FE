import React from 'react';
import { convertArrToObject } from '../../util/converArrayToObject';

const ContactForm = (props) => {
    const data = convertArrToObject(props.data.property);
    return (
        <div>
            <div className="container-fluid no-default-spacing">
                <div className="container main-content no-default-spacing">
                    <div className="row no-default-spacing">
                        <div className="col-12 no-default-spacing title-wrapper">
                            <span className="font-01">{data["Contact_ContactForm_Title"].value}</span>
                        </div>
                        <form action="mailto:system_e@system.nikku.co.jp" method="post" encType="text/plain">
                            <div className="container row no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content1"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Fist Name" type="text" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content2"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Last Name" type="text" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content3"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Company Name" type="text" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content4"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Company Name" type="text" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content5"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Email" type="email" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content6"].value}</span>
                                </div>
                                <div className="col-lg-6 col-7 no-default-spacing input-wrapper">
                                    <input className="input-form" name="Phone Number" type="text" required />
                                </div>
                            </div>
                            <div className="row col-12 no-default-spacing form-wrapper-special">
                                <div className="col-lg-3 col-5 no-default-spacing label-wrapper-special">
                                    <div className="red-bg">
                                        <span className="font-02">{data["Contact_ContactForm_Require"].value}</span>
                                    </div>
                                    <span className="font-03">{data["Contact_ContactForm_Content7"].value}</span>
                                </div>
                                <div className="col-lg-9 col-7 no-default-spacing input-wrapper-special">
                                    <textarea className="input-form-special" name="Content" rows={10} type="text" required defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-9 offset-lg-3 checkbox-wrapper">
                                <div className="policy-wrapper">
                                    <input type="checkbox" name="checkbox" className="checkbox" />
                                    <span className="font-04">{data["Contact_ContactForm_CheckBox"].value}</span>
                                </div>
                            </div>
                            <div className="col-12 no-default-spacing button-wrapper">
                                {/*<img src="./img/index-image-04.svg" class="arrow-icon" />*/}
                                <button type="submit" style={{ backgroundImage: 'url("./img/index-image-04.svg")', backgroundRepeat: 'no-repeat', backgroundPosition: '20px center' }} className="font-05 button-submit">送信</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="operation-management-divider" />
        </div>
    );
}

export default ContactForm