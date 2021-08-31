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
          <div class="loader-particles loader-element">
            <div class="loader-spark1 loader-spark loader-element">
              <div class="loader-particle1 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark2 loader-spark loader-element">
              <div class="loader-particle2 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark3 loader-spark loader-element">
              <div class="loader-particle3 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark4 loader-spark loader-element">
              <div class="loader-particle4 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark5 loader-spark loader-element">
              <div class="loader-particle5 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark6 loader-spark loader-element">
              <div class="loader-particle6 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark7 loader-spark loader-element">
              <div class="loader-particle7 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark8 loader-spark loader-element">
              <div class="loader-particle8 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark9 loader-spark loader-element">
              <div class="loader-particle9 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark10 loader-spark loader-element">
              <div class="loader-particle10 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark11 loader-spark loader-element">
              <div class="loader-particle11 loader-particle loader-element"></div>
            </div>
            <div class="loader-spark12 loader-spark loader-element">
              <div class="loader-particle12 loader-particle loader-element"></div>
            </div>
          </div>
          <div class="loader-ray loader-element"></div>
          <div class="loader-sphere loader-element"></div>
        </div>
      </div>
      <div id="loader-lastray" class="loader-element"></div>
    </>
  );
};

export default Loader;
