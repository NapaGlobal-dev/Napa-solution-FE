import { useQuery } from "@apollo/client";
import { GET_HEADER } from "../../../query/general";
import { getData } from "../../../util/converArrayToObject";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import languages from "../../../util/language/language";
import clsx from "clsx";
import { StoreContext } from "../../../util/language/store";
import ScrollToTop from "../ScrollToTop";
import useDarkMode from "use-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useSwipeDirection } from "../../../util/windowEvents";

function Language() {
  const [openDropdown, setOpenDropndown] = useState(false);
  const [language, setLanguage] = useState({});
  const dataLang = useContext(StoreContext)?.language;
  useEffect(() => {
    setLanguage(dataLang);
  }, []);
  return (
    <div className="langWrapper">
      <div className="langBtn" onClick={() => setOpenDropndown(!openDropdown)}>
        <div>{languages[2]}</div>
        <div className="arr-down lang-arr"></div>
      </div>
      <div
        className={clsx("lang-list", openDropdown ? "show-lang-list" : " ")}
        id="lang-list"
      >
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => {
              language && language[1](index);
              setOpenDropndown(false);
            }}
            className={index === (language && language[0]) ? "lang-active" : ""}
          >
            <div>{lang}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Header = (props) => {
  const { data } = useQuery(GET_HEADER);
  const navbarLogo = getData(data, /Navbar_Logo/)[0];
  const navbarHome = getData(data, /Navbar_Menu1/)[0];
  const navbarMenu = getData(data, /Navbar_Menu([2-9]|1[0-9])/);
  const navbarMobile = getData(data, /Navbar_Menu/);
  // const navbarMenuIcon = getData(data, /Navbar_MenuIcon/)[0];
  console.log("navbarsss", navbarMobile);
  const darkmode = useDarkMode(true);

  const [changeNav, setChangeNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState(0);
  const [navColor, setNavColor] = useState("light");

  const { direction } = useSwipeDirection({});

  const mobileHeaderNav = [
    ...navbarMobile,
    ...languages.map((lang, index) => ({
      path: "#",
      name: lang,
      type: "language",
      icon: "img/header/lang.svg",
      languageId: index,
    })),
  ];
  const languagesdata = languages.map((lang, index) => ({
    url: lang !== "JP" ? "http://www.napaglobal.com" : "#",
    languageId: index,
    icon: "img/header/lang.svg",
    name: lang,
    type: "language",
  }));
  // const scrollEvent = () => {
  //   if (window.pageYOffset !== 0 && changeNav === false) {
  //     setChangeNav(true);
  //   }
  //   if (window.pageYOffset === 0) {
  //     setChangeNav(false);
  //   }
  // };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 5 || hour >= 19) darkmode.enable();

    if (window.location.pathname === "/") {
      setNavColor("light");
    } else {
      setNavColor("dark");
    }

    // window.addEventListener("scroll", scrollEvent);

    // if ($("#navbar").hasClass("dark-nav")) {
    //   $(".menu-icon-toggle").on("click", function (e) {
    //     $("body").toggleClass("open");
    //     // $(".popcover").toggleClass("toggle");
    //     $(".wrap-menu.menu-icon-toggle").toggleClass("change");
    //   });
    // }
    // if ($("#navbar").hasClass("home")) {
    //   $(".menu-icon-toggle").on("click", function (e) {
    //     $("body").toggleClass("open");

    //     // $(".popcover").toggleClass("toggle");
    //     $(".wrap-menu.menu-icon-toggle").toggleClass("change");
    //   });
    // }

    // return function cleanup() {
    //   window.removeEventListener("scroll", scrollEvent);
    // };
  }, []);

  const hideNavbar = (e) => {
    let shouldHideNavbar = e.deltaY > 0 ? true : false;
    shouldHideNavbar = shouldHideNavbar && window.pageYOffset > 10;
    if (shouldHideNavbar !== hideNav) setHideNav(shouldHideNavbar);
  };

  // useEffect(() => {
  //   window.addEventListener("wheel", hideNavbar);
  //   $(".menu-icon-toggle").on("click", function (e) {
  //     $("body").toggleClass("open");
  //     $(".popcover").toggleClass("toggle");
  //     $(".wrap-menu.menu-icon-toggle").toggleClass("change");
  //   });

  //   return () => {
  //     window.removeEventListener("wheel", hideNavbar);
  //   };
  // }, [hideNav, setHideNav]);

  function handleClickLanguage(entry, index) {
    setActivePath(index);
    if (entry?.type && entry?.type === "language") {
      if (entry.name === "JP") {
        setLanguageId(entry.languageId);
      }
      if (entry.name === "EN") {
        window.location = "http://www.napaglobal.com";
        localStorage.setItem("languageID", 0);
      }
      if (entry.name === "VI") {
        window.location = "http://www.napaglobal.com";
        localStorage.setItem("languageID", 1);
      }
    }
  }
  useEffect(() => {
    Array.from({ length: navbarMobile.length }, (num, index) => {
      $(`#btn-item-up-${index + 1}`).css("display", "none");
      $(`#ul-subitem-${index + 1}`).css({
        display: "none",
        transition: "all 0.5s ease",
      });
    });

    if ($("#navbar").hasClass("dark-nav")) {
      $(".menu-icon-toggle").on("click", function (e) {
        $("body").toggleClass("open");
        // $(".popcover").toggleClass("toggle");
        $(".wrap-menu.menu-icon-toggle").toggleClass("change");
      });
    } else if ($("#navbar").hasClass("home")) {
      $(".menu-icon-toggle").on("click", function (e) {
        $("body").toggleClass("open");
        // $(".popcover").toggleClass("toggle");
        $(".wrap-menu.menu-icon-toggle").toggleClass("change");
      });
    }

    // if (darkmode.value) {
    //   $("#checkbox-dark-mode").attr("checked", true);
    // }
  }, []);

  useEffect(() => {
    Array.from({ length: navbarMobile.length }, (num, index) => {
      $(`#btn-item-up-${index + 1}`).click(() => {
        $(`#ul-subitem-${index + 1}`).css({
          display: "none",
          transition: "all 0.5s ease",
        });
        $(`#btn-item-down-${index + 1}`).css("display", "block");
        $(`#btn-item-up-${index + 1}`).css("display", "none");

        $(`#item-link-${index + 1}`).css("border-bottom", "0.5px solid #fff");
      });
      $(`#btn-item-down-${index + 1}`).click(() => {
        $(`#ul-subitem-${index + 1}`).css({
          display: "block",
          transition: "all 0.5s ease",
        });
        $(`#btn-item-down-${index + 1}`).css("display", "none");
        $(`#btn-item-up-${index + 1}`).css("display", "block");

        $(`#item-link-${index + 1}`).css("border", "none");
      });
    });

    // if ($("#navbar").hasClass("dark-nav")) {
    //   $(".menu-icon-toggle").on("click", function (e) {
    //     $("body").toggleClass("open");
    //     // $(".popcover").toggleClass("toggle");
    //     $(".wrap-menu.menu-icon-toggle").toggleClass("change");
    //   });
    // }
    // if ($("#navbar").hasClass("home")) {
    //   $(".menu-icon-toggle").on("click", function (e) {
    //     $("body").toggleClass("open");

    //     // $(".popcover").toggleClass("toggle");
    //     $(".wrap-menu.menu-icon-toggle").toggleClass("change");
    //   });
    // }
    if (darkmode.value) {
      $("#checkbox-dark-mode").attr("checked", false);
    } else $("#checkbox-dark-mode").attr("checked", true);
    // $(".popcover").addClass("toggle");
  });

  return (
    <>
      <Head>
        <link key="css/common.css" rel="stylesheet" href="css/common.css" />
        <link
          key="css/header.module.css"
          rel="stylesheet"
          href="css/header.module.css"
        />
      </Head>

      <nav
        id="navbar"
        style={{ borderBottom: !props.isLoading && "none" }}
        className={clsx(
          "navbar navbar-expand-lg navbar-light no-default-spacing home",
          changeNav ? "dark-nav" : "",
          navColor === "dark" ? "dark-nav" : "",
          direction && "navbar-hidden"
        )}
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
            <li className="nav-item item-navbar-menu active item-home">
              <a href={navbarHome?.url} className="text-navbar-menu">
                {navbarHome?.value}
              </a>
            </li>
            {navbarMenu.map((menu, key) => (
              <li className="nav-item item-navbar-menu" key={key}>
                <div className="slice-navbar-item" />
                <div className="dropdown">
                  <a href={menu?.url} className="text-navbar-menu">
                    {menu?.value}
                  </a>
                  {menu.content.length !== 0 && (
                    <div className="dropdown-layer">
                      <div className="dropdown-body">
                        <ul>
                          {menu.content.map((item, index) => (
                            <li key={index}>
                              <div>
                                <a href={item.url}>{item.value}</a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="wrap-menu menu-icon-toggle"
          // onClick={() => {
          //   setIsOpen(!isOpen);
          //   // setActivePath(0);
          // }}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </a>

        <div
          className="mobile-menu popcover"
          style={{ width: "100%", zIndex: 25 }}
        >
          <i className="menu-background top"></i>
          <i className="menu-background middle"></i>
          <i className="menu-background bottom"></i>
          <i className="menu-background top2"></i>
          <i className="menu-background middle2"></i>
          <i className="menu-background bottom2"></i>
          <i className="menu-background top3"></i>
          <i className="menu-background middle3"></i>
          <i className="menu-background bottom3"></i>
          <div className="menu content-backdrop">
            <div className="menu logo-backdrop">
              <a className="logo" href={navbarLogo?.url}>
                <img
                  alt="LOGO"
                  src={navbarLogo?.image?.publicUrl}
                  className="img-backdrop"
                />
              </a>
            </div>
            <div className="menu boxcover">
              {navbarMobile.length > 0 &&
                navbarMobile.map((item, index) => (
                  <div
                    key={index}
                    className="mainItem"
                    id={`item-link-${index + 1}`}
                  >
                    <h4>
                      <a href={item.url}> {item.value}</a>
                      <span
                        id={`btn-item-down-${index + 1}`}
                        style={
                          item.content.length > 0 ? {} : { display: "none" }
                        }
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="sort-down"
                          className="svg-inline--fa fa-sort-down fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                          ></path>
                        </svg>
                      </span>
                      <span
                        id={`btn-item-up-${index + 1}`}
                        style={{ display: "none" }}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="sort-up"
                          className="svg-inline--fa fa-sort-up fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
                          ></path>
                        </svg>
                      </span>
                    </h4>
                    <ul id={`ul-subitem-${index + 1}`}>
                      {item.content.length > 0 &&
                        item.content.map((subitem, key) => (
                          <li>
                            <a className="liText" href={subitem.url} key={key}>
                              {subitem.value}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
            </div>
            <div className="group-control">
              <div className="menu languages-group">
                {languagesdata.map((lang, index) => (
                  <div className="language-item" key={index}>
                    <a href={lang.url}>{lang.name}</a>
                  </div>
                ))}
              </div>
              <div className="menu darkmode-checkbox">
                {!darkmode.value ? <p>Dark</p> : <p>Light</p>}
                <label>
                  <input
                    onClick={darkmode.toggle}
                    type="checkbox"
                    id="checkbox-dark-mode"
                  />
                  <span className="check"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={isOpen ? clsx("overlay", "show") : "overlay"}></div> */}

        {/* <div className={clsx("mobile-menu", isOpen ? "show" : "")}>
          {mobileHeaderNav.map((entry, index) => (
            // <Link to={`#${entry.path}`} key={index} className={styles.wrapLinkMobile}>

            // </Link>
            <div className="dropdown">
              <a href={entry?.url} key={index} className="wrap-link-mobile">
                <span>{entry?.value ? entry?.value : entry.name}</span>
                <button
                  onClick={() => handleClickMenu(entry, index)}
                  className={clsx(
                    "wrap-icon",
                    activePath === index ? "active" : ""
                  )}
                >
                  <img
                    key={index}
                    className="icon"
                    src={
                      entry?.image?.publicUrl
                        ? entry?.image?.publicUrl
                        : entry.icon
                    }
                    alt="Mobile Icon"
                  />
                </button>
              </a>
              {entry.content && entry.content.length !== 0 && (
                <div className="dropdown-layer">
                  <div className="dropdown-body">
                    <ul>
                      {entry.content.map((item, index) => (
                        <li key={index}>
                          <div>
                            <a href={item.url}>{item.value}</a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="wrap-link-mobile">
            <span>{!!darkmode.value ? "Dark" : "Light"}</span>
            <div className="wrap-icon nav-darkmode-icon-mobile">
              <DarkModeSwitch
                style={{ margin: "0 12px" }}
                className="nav-darkmode-icon"
                checked={!!darkmode.value}
                onChange={darkmode.toggle}
                size={40}
              />
            </div>
          </div>

          <Language />
        </div> */}
        <DarkModeSwitch
          style={{ margin: "0 12px" }}
          className="nav-darkmode-icon hide-on-mobile"
          checked={!!darkmode.value}
          onChange={darkmode.toggle}
          size={40}
        />
        <Language />
      </nav>
      <ScrollToTop />
    </>
  );
};

export default Header;
