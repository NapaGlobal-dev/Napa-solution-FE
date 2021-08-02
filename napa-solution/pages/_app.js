// import "../styles/globals.css";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { footerDataQuery } from "../query/general";
import "../styles/globals.css";
import StoreProvier, { StoreContext } from "../util/language/store";
import { useState, useEffect } from "react";

import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../themeConfig";
function MyApp({ Component, pageProps, footerData, ...props }) {
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
            <button
              onClick={darkmode.toggle}
              style={{ position: "absolute", top: 30, zIndex: 20 }}
            >
              Switch Mode
            </button>
            {isMounted && <Component {...pageProps} />}
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
