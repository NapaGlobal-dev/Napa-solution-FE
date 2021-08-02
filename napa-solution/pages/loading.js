import Head from 'next/head';
import React from 'react';

const Loading = () => {
    const textSlide = ["N", "A", "P", "A", "..."];
    return (
        <>
            <Head>
            <link key="css/loading.css" rel="stylesheet" href="css/loading.css" />
            </Head>
            {/* <div className="content">
                <div >
                    <div className="loading-page">
                        <div className="spinner">
                        </div>
                    </div>
                </div>
            </div> */}

            {/* loading v2 */}
            <div className = "wrap-loader">
                <div className = "loader">
                    {new Array(4).fill(null).map((item, key) =>(
                        <div className= "box" key = {key} />
                    ))}
                    <div className = "wrap-text">
                        <div className = "text">
                            {textSlide.map((item, key) =>(
                                <span key = {key}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className = "loader-text">

                </div>
            </div>

        </>
    );
}

export default Loading