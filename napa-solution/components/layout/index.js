import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import SimpleLoader from "./SimpleLoader";
import NewYearEvent from "./NewYearEvent";

const Layout = ({ data, children, ...props }) => {
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

      const closeLoading = () => setSimpleLoading(false);
      window.addEventListener("load", closeLoading);
      setTimeout(() => {
        setSimpleLoading(false);
        window.removeEventListener("load", closeLoading);
      }, 3998);
      return () => window.removeEventListener("load", closeLoading);
    }
  }, []);

  if (router.pathname === "/") {
    return (
      <>
        <Header data={data.headerData} isLoading={loading} />

        <ScrollToTop />
        <Loader />
        <NewYearEvent delay={3000} />
        {React.cloneElement(children, {
          footer: <Footer data={data.footerData} isLoading={loading} />,
        })}
      </>
    );
  }

  return (
    <>
      <Header data={data.headerData} isLoading={loading} />
      <div>{children}</div>
      <ScrollToTop />
      <NewYearEvent />
      <Footer data={data.footerData} isLoading={loading} />
      {simpleLoading && <SimpleLoader />}
    </>
  );
};

export default Layout;
