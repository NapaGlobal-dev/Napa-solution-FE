import React from 'react'
import { convertArrToObject } from '../../util/converArrayToObject'

const WorkSpace = (props) => {
    const dataWorkSpace = convertArrToObject(props.data.property)
    return (
        <section className="operation-management-flow">
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="operation-management-flow-title">
                                <span className="operation-management-flow-spec">{dataWorkSpace["OperationManagement_WorkSpace_Title"].value}</span>
                                {dataWorkSpace["OperationManagement_WorkSpace_Subtitle"].value.split("\\n")
                                    .map((text, index) => (
                                        <React.Fragment key={index}>
                                            {text}
                                            <br />
                                        </React.Fragment>
                                    ))}</h2>
                        </div>
                        <div className="col-sm-12">
                            <div className="operation-management-flow-group">
                                <div className="operation-management-flow-group-title">
                                    <p className="operation-management-flow-img-desc">
                                        {dataWorkSpace["OperationManagement_WorkSpace_Content"].value.split("\\n")
                                        .map((text, index) => (
                                            <React.Fragment key={index}>
                                                {text}
                                                <br />
                                            </React.Fragment>
                                        ))}</p>
                                </div>
                                <img src={dataWorkSpace["OperationManagement_WorkSpace_Img"].image.original} alt="img" className="operation-management-desk operation-management-flow-img" />
                                <img src={dataWorkSpace["OperationManagement_WorkSpace_ImgMobile"].image.original} alt="img" className="operation-management-mob operation-management-flow-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSpace