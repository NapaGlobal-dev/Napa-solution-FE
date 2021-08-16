// import "../styles/globals.css";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { footerDataQuery } from "../query/general";
import "../styles/globals.css";
import StoreProvier, { StoreContext } from "../util/language/store";
import Fonts from "../util/fonts";
import React, { useState, useEffect } from "react";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themeConfig";
import { DarkModeSwitch } from "react-toggle-dark-mode";
function MyApp({ Component, pageProps, footerData, ...props }) {
  useEffect(() => {
    Fonts();
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <StoreProvier>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Layout footerData={footerData}>
            {/* <DarkModeSwitch
              style={{
                position: "fixed",
                zIndex: 20,
                top: 28,
                height: 30,
                right: 150,
              }}
              checked={!!darkmode.value}
              onChange={darkmode.toggle}
              size={120}
            /> */}
            {/* {isMounted && <Component {...pageProps} />} */}
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
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
