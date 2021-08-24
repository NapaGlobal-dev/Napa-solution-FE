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
import { useSwipeDirection } from "../../../util/windowEvents";
import ScrollToTop from "../ScrollToTop";
import { registerSwipeEvent } from "../../../util/windowEvents";

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
  const contact = navbarMenu.slice(-1)[0]
  const navRef = useRef(null);
  // console.log("navbarsss", navbarMenu, data);
  const darkmode = useDarkMode();
  useEffect(() => {
    if(!localStorage.getItem('darkmode')){
      const hour = new Date().getHours();
      if (hour < 5 || hour >= 19) darkmode.enable();
      else darkmode.disable();
    }else{
      const isDarkmode = localStorage.getItem('darkmode')
      if(isDarkmode=='on')
        darkmode.enable()
      else
        darkmode.disable()
    }

  }, []);

  function wrapToggle(){
    if(darkmode.value)
      localStorage.setItem('darkmode', 'off')
    else
      localStorage.setItem('darkmode', 'on')
    darkmode.toggle()
  }

  // const [changeNav, setChangeNav] = useState(true);
  // const [navColor, setNavColor] = useState("light");

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
    // if (window.location.pathname !== "/") {
    window.addEventListener("scroll", scrollEvent, true);
    // }

    const cleanupSwipeEvent = registerSwipeEvent(({ direction }) => {
      // console.log("direction", direction);
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
        $(".wrap-menu.menu-icon-toggle").toggleClass("change");
      });
    } else if ($("#navbar").hasClass("home")) {
      $(".menu-icon-toggle").on("click", function (e) {
        $("body").toggleClass("open");
        $(".wrap-menu.menu-icon-toggle").toggleClass("change");
      });
    }
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
          maxHeight: "210px",
          overflow: "scroll"
        });
        $(`#btn-item-down-${index + 1}`).css("display", "none");
        $(`#btn-item-up-${index + 1}`).css("display", "block");

        $(`#item-link-${index + 1}`).css("border", "none");
      });
    });
    if (darkmode.value) {
      $("#checkbox-dark-mode").attr("checked", true);
    } else $("#checkbox-dark-mode").attr("checked", false);
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
        ref={navRef}
        style={{ borderBottom: !props.isLoading && "none" }}
        className={clsx(
          "navbar navbar-expand-lg navbar-light no-default-spacing home"
          // changeNav ? "dark-nav" : "",
          // navColor === "dark" ? "dark-nav" : "",
          // direction && !props.isLoading && "navbar-hidden"
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
            {navbarMenu.slice(0,-1).map((menu, key) => (
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
                    <div className={menu.content.length>3? "dropdown-layer long-width":'dropdown-layer'}>
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
            <a className='skewed-button' href={contact?.url}>
              <svg className='contact-icon-button' viewBox="0 0 230.17 230.17" >
                  <path fill="currentColor" d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"/>
                  <path fill="currentColor" d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647
                    L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"/>
                  <path fill="currentColor" d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866
                    L115.251,138.757z"/>
                  <path fill="currentColor" d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"/>
              </svg>
              {contact?.value}
            </a>
          </ul>
        </div>

        <a className="wrap-menu menu-icon-toggle">
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
            <div className="menu logo-backdrop topOfMenu">
              <a className="logo" href={navbarLogo?.url}>
                <img
                  alt="LOGO"
                  src={navbarLogo?.image?.publicUrl}
                  className="img-backdrop"
                />
              </a>
            </div>
            <div className="menu boxcover topOfMenu">
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
                          <li key={key}>
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
                {!!darkmode.value ? <p>Dark</p> : <p>Light</p>}
                <label>
                  <input
                    onClick={wrapToggle}
                    type="checkbox"
                    id="checkbox-dark-mode"
                  />
                  <span className="check"></span>
                </label>
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
