import { useEffect } from "react";
import Head from "next/head";

const Loader = () => {
  useEffect(() => {
    setTimeout(function () {
      document.getElementById("loader-loading-page").className +=
        " loader-loaded ";
      document.getElementById("loader-loader").className += " loader-opzero ";
      document.getElementById("loader-lastray").className +=
        " loader-finalray ";
      document.body.className += " loader-whitebk ";
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <link key="/css/loader.css" rel="stylesheet" href="/css/loader.css" />
      </Head>
      <div id="loader-loading-page">
        <div id="loader-loader">
          <div className="loader-particles loader-element">
            <div className="loader-spark1 loader-spark loader-element">
              <div className="loader-particle1 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark2 loader-spark loader-element">
              <div className="loader-particle2 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark3 loader-spark loader-element">
              <div className="loader-particle3 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark4 loader-spark loader-element">
              <div className="loader-particle4 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark5 loader-spark loader-element">
              <div className="loader-particle5 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark6 loader-spark loader-element">
              <div className="loader-particle6 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark7 loader-spark loader-element">
              <div className="loader-particle7 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark8 loader-spark loader-element">
              <div className="loader-particle8 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark9 loader-spark loader-element">
              <div className="loader-particle9 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark10 loader-spark loader-element">
              <div className="loader-particle10 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark11 loader-spark loader-element">
              <div className="loader-particle11 loader-particle loader-element"></div>
            </div>
            <div className="loader-spark12 loader-spark loader-element">
              <div className="loader-particle12 loader-particle loader-element"></div>
            </div>
          </div>
          <div className="loader-ray loader-element"></div>
          <div className="loader-sphere loader-element"></div>
        </div>
      </div>
      <div id="loader-lastray" className="loader-element"></div>
    </>
  );
};

export default Loader;
