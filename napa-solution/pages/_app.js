// import "../styles/globals.css";
import Layout from "../components/jp/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { footerDataQuery } from "../query/general";
import "../styles/globals.css";
import StoreProvier, { StoreContext } from "../util/language/store";
import Fonts from "../util/fonts";
import React, { useState, useEffect, useContext } from "react";

import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../themeConfig";
function MyApp({ Component, pageProps, footerData, ...props }) {
  useEffect(() => {
    Fonts();
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;
  let initLanguageData = 2;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(()=>{
    initLanguageData = parseInt(localStorage.getItem("languageID"))
  })
  console.log(initLanguageData)
  return (
    <StoreProvier>
      <ApolloProvider client={client}>
        {/* <ThemeProvider theme={theme}> */}
        <Layout footerData={footerData}>
          <Component {...pageProps} />
        </Layout>
        {/* </ThemeProvider> */}
      </ApolloProvider>
    </StoreProvier>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const { data } = await client.query({
    query: footerDataQuery,
  });

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    footerData: data,
  };
};

export default MyApp;
