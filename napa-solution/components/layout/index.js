import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Loading from "../../pages/loading";
import { useQuery } from "@apollo/client";
import { footerDataQuery } from "../../query/general";
import { useRouter } from "next/router";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ footerData, children, ...props }) => {
  // console.log("sssss", footerData);
  const [loading, setLoading] = useState(true);
  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
  }

  const router = useRouter();

  const handleLoading = () => {
    document.body.style.overflow = "auto";
    setLoading(false);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      document.body.style.overflow = "hidden";
      demoAsyncCall().then(() => handleLoading());
    } else {
      setLoading(false);
    }
  }, []);

  if (router.pathname === "/") {
    return (
      <>
        <Header isLoading={loading} />
        <div
          id="wrapper-landing-loader"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            zIndex: 99,
            visibility: loading ? "visible" : "hidden",
          }}
        >
          <Loading />
        </div>
        {React.cloneElement(children, {
          footer: <Footer data={footerData} isLoading={loading} />,
        })}
      </>
    );
  }

  return (
    <>
      <Header isLoading={loading} />
      <div
        id="wrapper-landing-loader"
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: 99,
          visibility: loading ? "visible" : "hidden",
        }}
      >
        <Loading />
      </div>
      <div>{children}</div>
      <ScrollToTop />
      <Footer data={footerData} isLoading={loading} />
    </>
  );
};

export default Layout;
