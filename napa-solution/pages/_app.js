// import "../styles/globals.css";
import Layout from "../components/layout";
import { ApolloProvider } from "@apollo/client";
import App from "next/app";

import { client } from "../apolo-client";
import { footerDataQuery } from "../query/general";
import '../styles/globals.css';
import StoreProvier, { StoreContext } from "../util/language/store";
import { useContext, useEffect } from "react";
import Fonts from "../util/fonts";

function MyApp({ Component, pageProps, footerData, ...props }) {
  
  useEffect(() => {
    Fonts();
  },[])
  
  return (
    <StoreProvier>
      <ApolloProvider client={client}>
        <Layout footerData={footerData}>
          <Component {...pageProps} />
        </Layout>
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
