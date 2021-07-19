import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ footerData, children, ...props }) => {
  // console.log(footerData);
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer data={footerData} />
    </>
  );
};

export default Layout;
