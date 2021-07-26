import { useQuery } from "@apollo/client";
import { GET_HEADER } from "../../../query/general";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import languages from '../../../util/language/language'
import clsx from "clsx";
import { StoreContext } from "../../../util/language/store";

const Header = () => {
  const { data, loading, error } = useQuery(GET_HEADER);
  const navbar = loading || data.navbar[0].property;
  const navbarLogo = loading || navbar[0];
  const navbarHome = loading || navbar[1];
  const navbarMenu = loading || navbar.slice(2, -1);
  const navbarMenuIcon = loading || navbar[navbar.length - 1];
  const [changeNav, setChangeNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState(0);
  const [navColor, setNavColor] = useState('light');
  const headerNavigations = [
    {
      name: 'Home',
      path: '/',
      id: 'home-section',
      icon: "img/header/home.svg"
    },
    {
      name: '事業概要',
      path: '/business-summary',
      icon:  "img/header/service.svg"
    },
    {
      name: '企業情報',
      path: '/company',
      id: 'company-section',
      icon:  "img/header/profile.svg"
    },
    {
      name: '採用情報',
      path: '/recruit',
      icon:  "img/header/project.svg"
    },
    {
      name: 'お問い合わせ',
      path: '/contact',
      icon:  "img/header/contact.svg"
    }
  ];

  const mobileHeaderNav = [
    ...headerNavigations,
    ...languages.map((lang, index) => ({
      path: '#',
      name: lang,
      type: 'language',
      icon: "img/header/lang.svg",
      languageId: index
    }))
  ];

  function Language() {
    const [openDropdown, setOpenDropndown] = useState(false);
    const {language: [languageId, setLanguageId] } = useContext(StoreContext);
    return (
      <div className="langWrapper">
        <div className="langBtn" onClick={() => setOpenDropndown(!openDropdown)}>
          <div>{languages[2]}</div>
          <div className="arr-down lang-arr"></div>
        </div>
        <div
          className={clsx("lang-list", openDropdown ? "show-lang-list" : " ")} id="lang-list"
        >
          {languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => {
                setLanguageId(index);
                setOpenDropndown(false);
              }}
              className={index === languageId ? "lang-active" : ""}
            >
              <div>{lang}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const scrollEvent = () => {
    if (window.pageYOffset !== 0 && changeNav === false) {
      setChangeNav(true);
    }
    if (window.pageYOffset === 0) {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    if (window.location.pathname === '/') {
      setNavColor('light');
    } else {
      setNavColor('dark');
    }
    window.addEventListener('scroll', scrollEvent);
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  function handleClickMenu(entry, index) {
    setIsOpen(false);
    setActivePath(index);
    if (entry.type === 'language') {
      if (entry.name === 'JP') {
        setLanguageId(entry.languageId);
      }
      if (entry.name === 'EN') {
        window.location = 'http://www.napaglobal.com';
      }
    }
  }

  return (

    loading || (
      <>
        <Head>
          <link key="css/common.css" rel="stylesheet" href="css/common.css" />
        </Head>
        <nav
          id="navbar"
          className={clsx("navbar navbar-expand-lg navbar-light no-default-spacing", changeNav ? "dark-nav" : "",
            navColor === 'dark' ? "dark-nav" : "")}
        >
          <a className="navbar-brand no-default-spacing" href="index.html">
            <img
              alt="LOGO"
              src={navbarLogo.image.publicUrl}
              className="img-navbar-brand"
            />
          </a>
          <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item item-navbar-menu active item-home">
                <a href={navbarHome.url} className="text-navbar-menu">
                  {navbarHome.value}
                </a>
              </li>
              {navbarMenu.map((menu, key) => (
                <li className="nav-item item-navbar-menu" key = {key}>
                  <div className="slice-navbar-item" />
                  <a href={menu.url} className="text-navbar-menu">
                    {menu.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <button
            id="navbar-toggler"
            className="navbar-toggler no-default-spacing"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav .lang-list"
            aria-controls="navbarNav lang-list"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img alt="button-collapse" src={navbarMenuIcon.image.publicUrl} />
          </button> */}
          <div
            className={clsx("wrap-menu", isOpen ? "change": "")}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
          <div className={isOpen ? clsx("overlay", "show") : "overlay"}></div>
          <div className={clsx("mobile-menu", isOpen ? "show" : "")}>
            {mobileHeaderNav.map((entry, index) => (
              // <Link to={`#${entry.path}`} key={index} className={styles.wrapLinkMobile}>

              // </Link>
              <a
                href={entry.path[0] === '/' ? entry.path : `#${entry.path}`}
                key={index}
                className="wrap-link-mobile"
              >
                <span>{entry.name}</span>
                <button
                  onClick={() => handleClickMenu(entry, index)}
                  className={clsx(
                    "wrap-icon",
                    activePath === index ? "active" : ""
                  )}
                >
                  <img
                    key = {index}
                    className= "icon"
                    src={entry.icon}
                    alt='Mobile Icon'
                  />
                </button>
              </a>
            ))}
          </div>
          <Language />
        </nav>
      </>
    )
  );
};

export default Header;
