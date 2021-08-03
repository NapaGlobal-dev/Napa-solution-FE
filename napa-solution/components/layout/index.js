import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Loading from "../../pages/loading";
import { useQuery } from "@apollo/client";
import { footerDataQuery } from "../../query/general";

const Layout = ({ footerData, children, ...props }) => {
  // console.log("sssss", footerData);
  const [loading, setLoading] = useState(true);
  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
  }

  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false));
  });

  return loading ? (
    <>
      {/* <Header /> */}
      <Loading />
    </>
  ) : (
    <>
      <Header />
      <div>{children}</div>
      <Footer data={footerData} />
    </>
  );
};

export default Layout;
