export default function Breadcrumb({data}){
    const routes = data.property
    return(
        <div className="container-fluid breadcrumb-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 spacing-mobile">
                        <div className="breadcrumb-header">
                            <a href="/">HOME</a>
                            <span className="breadcrumb-icon">&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;</span>
                            <a href={routes[1].url}>{routes[1].value}</a>
                            <span className="breadcrumb-icon">&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;</span>
                            <a href={routes[2].url}>{routes[2].value}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}