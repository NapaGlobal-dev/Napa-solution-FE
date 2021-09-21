import { useEffect } from "react";
import Head from "next/head";

const SimpleLoader = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <link key="/css/loader.css" rel="stylesheet" href="/css/loader.css" />
      </Head>
      <div className="loading" id="loader">
        <div id="loading-msg">
          <div className="msg">
            <div className="spin">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleLoader;
