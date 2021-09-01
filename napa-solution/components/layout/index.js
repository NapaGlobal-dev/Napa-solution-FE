import Header from "./Header";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";

const Layout = ({ footerData, children, ...props }) => {
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

        <ScrollToTop />
        <Loader />

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
      <Footer data={footerData} isLoading={loading} />
    </>
  );
};

export default Layout;
