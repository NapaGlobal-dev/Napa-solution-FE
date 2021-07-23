import { useQuery } from "@apollo/client";
import { GET_HEADER } from "../../../query/general";
import { getData } from "../../../util/converArrayToObject";
import Head from "next/head";
const Header = () => {
  const { data, loading, error } = useQuery(GET_HEADER);
  const navbarLogo = getData(data, /Navbar_Logo/)[0]
  const navbarHome = getData(data, /Navbar_Menu1/)[0]
  const navbarMenu = getData(data, /Navbar_Menu([2-9]|1[0-9])/)
  const navbarMenuIcon = getData(data, /Navbar_MenuIcon/)[0]
  return(
      <>
        <Head>
          <link key="css/common.css" rel="stylesheet" href="css/common.css" />
        </Head>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-light bg-light no-default-spacing"
        >
          <a className="navbar-brand no-default-spacing" href={navbarLogo?.url}>
            <img
              alt="LOGO"
              src={navbarLogo?.image?.publicUrl}
              className="img-navbar-brand"
            />
          </a>
          <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item item-navbar-menu active">
                <img
                  alt="icon-navbar-menu"
                  src={navbarHome?.image?.publicUrl}
                  className="icon-navbar-menu"
                />
                <a href={navbarHome?.url} className="text-navbar-menu">
                  {navbarHome?.value}
                </a>
              </li>
              {navbarMenu.map((menu, index) => (
                <li className="nav-item item-navbar-menu" key={index}>
                  <img
                    alt="icon-navbar-menu"
                    src={menu?.image?.publicUrl}
                    className="icon-navbar-menu"
                  />
                  <a href={menu?.url} className="text-navbar-menu">
                    {menu?.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            id="navbar-toggler"
            className="navbar-toggler no-default-spacing"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img alt="button-collapse" src={navbarMenuIcon?.image?.publicUrl} />
          </button>
        </nav>
      </>
    )
}

export default Header;
