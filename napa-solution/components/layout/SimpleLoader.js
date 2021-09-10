import { useEffect } from "react";
import Head from "next/head";

const SimpleLoader = () => {
  useEffect(() => {
  }, []);
  return (
    <>
      <Head>
        <link key="/css/loader.css" rel="stylesheet" href="/css/loader.css" />
      </Head>
      <div class="loading" id="loader">
        <div id="loading-msg">
          <div class="msg">
            <div class="spin">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default SimpleLoader;
