import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import SimpleLoader from "./SimpleLoader";
import NewYearEvent from "./NewYearEvent";

const Layout = ({ footerData, children, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [simpleLoading, setSimpleLoading] = useState(true);
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

      setSimpleLoading(false);
    } else {
      setLoading(false);

      window.addEventListener("load", () => setSimpleLoading(false));
    }
  }, []);

  if (router.pathname === "/") {
    return (
      <>
        <Header isLoading={loading} />

        <ScrollToTop />
        <Loader />
        <NewYearEvent delay={3000} />
        {React.cloneElement(children, {
          footer: <Footer data={footerData} isLoading={loading} />,
        })}
      </>
    );
  }

  return (
    <>
      <Header isLoading={loading} />
      <div>{children}</div>
      <ScrollToTop />
      <NewYearEvent />
      <Footer data={footerData} isLoading={loading} />
      {simpleLoading && <SimpleLoader />}
    </>
  );
};

export default Layout;
