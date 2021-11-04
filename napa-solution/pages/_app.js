// import "../styles/globals.css";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { FOOTER_DATA_QUERY, GET_HEADER } from "../query/general";
import "../styles/globals.css";
import StoreProvier, { StoreContext } from "../util/language/store";
import Fonts from "../util/fonts";
import React, { useState, useEffect } from "react";

import useDarkMode from "use-dark-mode";
// import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themeConfig";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
import Head from "next/head";
function MyApp({ Component, pageProps, layoutData, ...props }) {
  useEffect(() => {
    Fonts();
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "1055847547921910");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v12.0"
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="google" content="notranslate" />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width, user-scalable=no, target-densitydpi=device-dpi"
        />

        <title>NAPA Solutions</title>
      </Head>
      <StoreProvier>
        <ApolloProvider client={client}>
          <Layout data={layoutData}>
            <Component {...pageProps} />
          </Layout>

          {/* <!-- Messenger Chat Plugin Code --> */}
          <div id="fb-root"></div>

          {/* <!-- Your Chat Plugin code --> */}
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </ApolloProvider>
      </StoreProvier>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  // const { data } = await client.query({
  //   query: FOOTER_DATA_QUERY,
  // });
  // const { data } = await client.query({
  //   query: GET_HEADER,
  // });

  const [footerData, headerData] = await Promise.allSettled([
    client.query({
      query: FOOTER_DATA_QUERY
    }),
    client.query({
      query: GET_HEADER
    })
  ]);

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    layoutData: {
      footerData: footerData.value.data,
      headerData: headerData.value.data
    }
  };
};

export default MyApp;
