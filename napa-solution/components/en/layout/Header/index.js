import styles from './index.module.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
// import NAPALogo from 'assets/images/napa/company-logo.png';
import NAPALogoWhite from '../../../assets/images/en/napa/logo_napa.svg';
import { headerNavigations } from '../../../../navigations';

import HomeIcon from '../../../assets/icons/en/home.svg';
import ServiceIcon from '../../../assets/icons/en/service.svg';
import ProjectIcon from '../../../assets/icons/en/project.svg';
import ProfileIcon from '../../../assets/icons/en/profile.svg';
import ContractIcon from '../../../assets/icons/en/contract.svg';
import NewsIcon from '../../../assets/icons/en/news.svg';
// import LangIcon from 'assets/icons/language-solid.svg';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { StoreContext } from 'utils/store';
import languages from '../../../../util/language/language';

const mobileIcons = [
  HomeIcon,
  ServiceIcon,
  ProjectIcon,
  ProfileIcon,
  ContractIcon,
  NewsIcon,
  NewsIcon,
  NewsIcon
];

function Language() {
  const [openDropdown, setOpenDropndown] = useState(false);

  const {
    language: [languageId, setLanguageId]
  } = useContext(StoreContext);

  return (
    <div className={styles.langWrapper}>
      <div className={styles.langBtn} onClick={() => setOpenDropndown(true)}>
        <div>{languages[languageId]}</div>
        <div className={clsx(styles.langArr, styles.arrDown)}></div>
      </div>
      <div
        className={clsx(styles.langList, openDropdown && styles.showLangList)}
      >
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => {
              setLanguageId(index);
              setOpenDropndown(false);
            }}
            className={clsx(index === languageId && styles.langActive)}
          >
            <div>{lang}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function useScroller(distance) {
  const [hide, setHide] = useState(false);
  let anchorPosition = window.pageYOffset;

  const scrollEvent = (event) => {
    if (window.pageYOffset > anchorPosition) {
      const scrollDistance = window.pageYOffset - anchorPosition;
      if (scrollDistance > distance && hide === false) {
        setHide(true);
        anchorPosition = window.pageYOffset;
      } else if (hide) {
        anchorPosition = window.pageYOffset;
      }
    } else {
      setHide(false);
      anchorPosition = window.pageYOffset;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return hide;
}

function Header() {
  const [state, setState] = useState({
    activePath: 0,
    isOpen: false
  });
  const currentPath = useLocation();
  const shouldHideNav = useScroller(200);
  const [changeNav, setChangeNav] = useState(false);
  const {
    language: [languageId, setLanguageId]
  } = useContext(StoreContext);

  const { activePath, isOpen } = state;
  const langNavigations = languages.map((lang, index) => ({
    path: '#',
    name: lang,
    type: 'language',
    languageId: index
  }));

  const mobileHeaderNav = [...headerNavigations, ...langNavigations];
  const langOpts = [...langNavigations];

  useEffect(() => {
    const path = headerNavigations.findIndex(
      (menu) => menu.path === currentPath.pathname
    );

    setState({ ...state, activePath: path });
    window.addEventListener('scroll', scrollEvent);
    return function cleanup() {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  const scrollEvent = () => {
    if (window.pageYOffset !== 0 && changeNav === false) {
      setChangeNav(true);
    }
    if (window.pageYOffset === 0) {
      setChangeNav(false);
    }
  };

  const handleClickMenu = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const handleClickItem = (page, index) => {
    setState({ activePath: index, isOpen: !state.isOpen });
    if (
      mobileHeaderNav[index].type === 'language' &&
      mobileHeaderNav[index].name === 'JP'
    )
      window.location = 'http://www.napa-solutions.com';

    if (
      mobileHeaderNav[index].type === 'language' &&
      mobileHeaderNav[index].name === 'VI'
    )
      setLanguageId(page.languageId);
  };

  return (
    <header
      className={clsx(
        styles.root,
        (currentPath.pathname === '/' || currentPath.pathname === 'home') &&
          styles.fixedNav,
        changeNav && styles.darkNav,
        shouldHideNav && styles.hideNav
      )}
    >
      <div className={styles.wrapNav}>
        <a href='/'>
          <img
            alt='NAPA Global Logo'
            src={NAPALogoWhite}
            className={styles.companyLogo}
          />
          <img
            alt='NAPA Global Logo mobile'
            // src={NAPALogo}
            src={NAPALogoWhite}
            className={styles.companyLogoMobile}
          />
        </a>
        <nav className={styles.navigation}>
          <ul className={styles.listNavigationTitle}>
            {window.location.pathname === '/' &&
              headerNavigations.map((page, index) => (
                <li key={index} className={styles.wrapLink}>
                  <button className={styles.btn}>
                    <a
                      href={`#${page.id}`}
                      onClick={() => setState({ ...state, activePath: index })}
                      className={
                        activePath === index ? styles.linkActive : styles.link
                      }
                    >
                      {page.name}
                    </a>
                  </button>
                  {activePath === index ? (
                    <div className={styles.borderBottom} />
                  ) : (
                    <></>
                  )}
                </li>
              ))}
          </ul>
        </nav>
        {/* <a href='#consultation-section' className={styles.btnHeader}>
          Get a Quotes
        </a> */}
        <Language />
        <div
          className={clsx(styles.wrapMenu, { [styles.change]: isOpen })}
          onClick={handleClickMenu}
        >
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
      </div>

      {/* Menu mobile */}
      <div className={clsx(styles.overlay, { [styles.show]: isOpen })}></div>
      <div className={clsx(styles.mobileMenu, { [styles.show]: isOpen })}>
        {window.location.pathname === '/'
          ? mobileHeaderNav.map((page, index) => (
              <a
                key={index}
                onClick={() => handleClickItem(page, index)}
                href={`#${page.id}`}
                className={clsx(styles.menuItem)}
              >
                <span>{page.name}</span>
                <button
                  style={{ '--animation-order': index }}
                  className={clsx(styles.fab, {
                    [styles.fabOpen]: isOpen,
                    [styles.fabActive]: activePath === index
                  })}
                >
                  <img
                    className={styles.icon}
                    src={mobileIcons[index]}
                    alt=''
                  />
                </button>
              </a>
            ))
          : langOpts.map((lang, index) => (
              <Link
                key={index}
                to={lang.path}
                onClick={() => handleClickItem(index)}
                className={clsx(styles.menuItem)}
              >
                <span>{lang.name}</span>
                <button
                  style={{ '--animation-order': index }}
                  className={clsx(styles.fab, {
                    [styles.fabOpen]: isOpen,
                    [styles.fabActive]: activePath === index
                  })}
                >
                  <img
                    className={styles.icon}
                    src={mobileIcons[index]}
                    alt=''
                  />
                </button>
              </Link>
            ))}
      </div>
    </header>
  );
}

export default Header;
