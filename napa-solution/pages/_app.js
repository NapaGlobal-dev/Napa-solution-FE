// import "../styles/globals.css";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { FOOTER_DATA_QUERY } from "../query/general";
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

  useEffect(() => {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "109640574821750");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v12.0",
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
    <StoreProvier>
      <ApolloProvider client={client}>
        <Layout footerData={footerData}>
          <Component {...pageProps} />
        </Layout>

        {/* <!-- Messenger Chat Plugin Code --> */}
        <div id="fb-root"></div>

        {/* <!-- Your Chat Plugin code --> */}
        <div id="fb-customer-chat" class="fb-customerchat"></div>
      </ApolloProvider>
    </StoreProvier>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const { data } = await client.query({
    query: FOOTER_DATA_QUERY,
  });

  const appData = await App.getInitialProps(ctx);
  return {
    ...appData,
    footerData: data,
  };
};

export default MyApp;
