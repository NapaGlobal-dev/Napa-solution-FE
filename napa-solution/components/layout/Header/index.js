import { useQuery } from "@apollo/client";
import { GET_HEADER } from "../../../query/general";
import { getData } from "../../../util/converArrayToObject";
import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import languages from "../../../util/language/language";
import clsx from "clsx";
import { StoreContext } from "../../../util/language/store";
import useDarkMode from "use-dark-mode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ScrollToTop from "../ScrollToTop";
import { registerSwipeEvent } from "../../../util/windowEvents";
import { useRouter } from "next/router";

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
            <a href={lang !== "JP" ? "http://www.napaglobal.com" : "#"}>
              {lang}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const Header = (props) => {
  const { data } = useQuery(GET_HEADER);
  const navbarLogo = getData(data, /Navbar_Logo/)[0];
  const navbarMenu = getData(data, /Navbar_Menu/);
  const navbarMobile = getData(data, /Navbar_Menu/);
  const contact = navbarMenu.slice(-1)[0];
  const navRef = useRef(null);

  const router = useRouter();

  const darkmode = useDarkMode();
  useEffect(() => {
    if (!localStorage.getItem("darkmode")) {
      const hour = new Date().getHours();
      if (hour < 5 || hour >= 19) darkmode.enable();
      else darkmode.disable();
    } else {
      const isDarkmode = localStorage.getItem("darkmode");
      if (isDarkmode == "on") darkmode.enable();
      else darkmode.disable();
    }
  }, []);

  function wrapToggle() {
    if (darkmode.value) localStorage.setItem("darkmode", "off");
    else localStorage.setItem("darkmode", "on");
    darkmode.toggle();
  }

  const languagesdata = languages.map((lang, index) => ({
    url: lang !== "JP" ? "http://www.napaglobal.com" : "#",
    languageId: index,
    icon: "img/header/lang.svg",
    name: lang,
    type: "language",
  }));

  const scrollEvent = () => {
    if (navRef.current) {
      if (window.pageYOffset >= 20) {
        navRef.current.classList.add("dark-nav");
      } else {
        navRef.current.classList.remove("dark-nav");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent, true);

    if (router.pathname.includes("company"))
      document.getElementById("navbar")?.classList.add("dark-nav-force");

    const cleanupSwipeEvent = registerSwipeEvent(({ direction }) => {
      if (navRef.current) {
        if (direction) navRef.current.classList.add("navbar-hidden");
        else navRef.current.classList.remove("navbar-hidden");
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollEvent, true);
      cleanupSwipeEvent();
    };
  }, [navRef]);

  useEffect(() => {
    function toggleDropdown(e) {
      $(this).toggleClass("po-dropdown-open");
    }

    function toggleOpenPopcover(e) {
      $("body").toggleClass("po-open");
      // $(".po-popcover").toggleClass("po-popcover-open");
      [...document.getElementsByClassName("po-popcover")].map((e) =>
        e.classList.toggle("po-popcover-open")
      );
    }

    $(".po-list-dropdown").on("click", toggleDropdown);

    // $(".toggle-open-popcover-button").on("click", toggleOpenPopcover);
    let buttons = [
      ...document.getElementsByClassName("toggle-open-popcover-button"),
    ];

    buttons.map((btn) => btn.addEventListener("click", toggleOpenPopcover));

    return () => {
      $(".po-list-dropdown").off("click", toggleDropdown);
      // $(".toggle-open-popcover-button").off("click", toggleOpenPopcover);
      buttons.map((btn) =>
        btn.removeEventListener("click", toggleOpenPopcover)
      );
    };
  });

  return (
    <>
      <Head>
        <link key="/css/common.css" rel="stylesheet" href="/css/common.css" />
        <link
          key="/css/header.module.css"
          rel="stylesheet"
          href="/css/header.module.css"
        />
      </Head>

      <nav
        id="navbar"
        ref={navRef}
        style={{ borderBottom: !props.isLoading && "none" }}
        className={clsx(
          "navbar navbar-expand-lg navbar-light no-default-spacing home"
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
            {navbarMenu.slice(0, -1).map((menu, key) => (
              <li className="nav-item item-navbar-menu" key={key}>
                <div className="dropdown">
                  <div className="hover-o">
                    <div className="hover-t">
                      <a href={menu?.url} className="text-navbar-menu">
                        {menu?.value}
                      </a>
                      <a href={menu?.url} className="text-navbar-menu">
                        {menu?.value}
                      </a>
                    </div>
                  </div>
                  {menu.content.length !== 0 && (
                    <div
                      className={
                        menu.content.length > 4
                          ? "dropdown-layer long-width"
                          : "dropdown-layer"
                      }
                    >
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
            {contact ? (
              <a className="skewed-button" href={contact?.url}>
                <svg
                  className="contact-icon-button"
                  viewBox="0 0 230.17 230.17"
                >
                  <path
                    fill="currentColor"
                    d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"
                  />
                  <path
                    fill="currentColor"
                    d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647
                      L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"
                  />
                  <path
                    fill="currentColor"
                    d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866
                      L115.251,138.757z"
                  />
                  <path
                    fill="currentColor"
                    d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"
                  />
                </svg>
                {contact?.value}
              </a>
            ) : (
              <></>
            )}
          </ul>
        </div>

        <a className="wrap-menu menu-icon-toggle toggle-open-popcover-button">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </a>

        <div className="po-popcover">
          <div className="po-postition-relative po-fill-full">
            <div className="po-container">
              <div className="po-box-logo-container">
                <div className="po-box-logo">
                  <a className="po-logo" href={navbarLogo?.url}>
                    <img alt="LOGO" src={navbarLogo?.image?.publicUrl} />
                  </a>
                  <img
                    className="po-close-button toggle-open-popcover-button"
                    src="/img/close.svg"
                  />
                </div>
              </div>
              <ul className="po-list-container">
                {navbarMobile.length > 0 &&
                  navbarMobile.map((item, index) => (
                    <li key={index} className="po-list-dropdown">
                      <div
                        className={`po-list-dropdown-text ${
                          item.content.length > 0 && `po-arrow`
                        }`}
                      >
                        <a href={item.url}> {item.value}</a>
                      </div>
                      <ul className="po-list-dropdown-children">
                        {item.content.length > 0 &&
                          item.content.map((subitem, key) => (
                            <li key={key} className="po-list-dropdown-item">
                              <a className="" href={subitem.url} key={key}>
                                <div className="">{subitem.value}</div>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
              <div className="po-box-options">
                <div className="po-box-language">
                  {languagesdata.map((lang, index) => (
                    <div className="po-language-item" key={index}>
                      <a href={lang.url}>{lang.name}</a>
                    </div>
                  ))}
                </div>
                <div className="po-box-darkmode">
                  {!!darkmode.value ? <p>Dark</p> : <p>Light</p>}
                  <label className="po-box-darkmode-switch">
                    <input
                      onClick={wrapToggle}
                      type="checkbox"
                      id="checkbox-dark-mode"
                    />
                    <span className="check"></span>
                    <div className="dark-mode-bubble"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DarkModeSwitch
          style={{ margin: "0 12px" }}
          className="nav-darkmode-icon hide-on-mobile"
          checked={!!darkmode.value}
          onChange={wrapToggle}
          size={40}
        />
        <Language />
      </nav>
      <ScrollToTop />
    </>
  );
};

export default Header;
