import styles from './index.module.css';
import NAPALogo from '../../../assets/images/vi/napa/company-logo.png';
import NAPALightLogo from '../../../assets/images/vi/napa/company-logo-light.png';
import { Link } from 'react-router-dom';
import Language from './language';
import { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import HomeIcon from '../../../assets/icons/vi/header/home.svg';
import ServiceIcon from '../../../assets/icons/vi/header/service.svg';
import ProjectIcon from '../../../assets/icons/vi/header/project.svg';
import ContactIcon from '../../../assets/icons/vi/header/contact.svg';
import LangIcon from '../../../assets/icons/vi/header/lang.svg';
import languages from '../../../../util/language/language';
import StoreContext from '../../../../util/language/store';

const headerNavigations = [
  {
    name: 'Trang Chủ',
    path: '/',
    id: 'home-section',
    icon: HomeIcon
  },
  {
    name: 'Giới Thiệu',
    path: '/#services-section',
    icon: ServiceIcon
  },
  {
    name: 'Tuyển Dụng',
    path: '/recruit',
    id: 'projects-section',
    icon: ProjectIcon
  },
  {
    name: 'Liên Hệ',
    path: '/#contact-section',
    icon: ContactIcon
  }
];

const Header = () => {
  const [changeNav, setChangeNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState(0);
  const [navColor, setNavColor] = useState('light');

  const [language, setLanguage] = useState({});
  const dataLang = useContext(StoreContext)?.language;

  useEffect(() => {
    setLanguage(dataLang);
  }, [dataLang]);

  const mobileHeaderNav = [
    ...headerNavigations,
    ...languages.map((lang, index) => ({
      path: '#',
      name: lang,
      type: 'language',
      icon: LangIcon,
      languageId: index
    }))
  ];

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
      if (entry.name === 'EN') {
        language[1](entry.languageId);
      }
      if (entry.name === 'JP') {
        window.location = 'http://www.napa-solutions.com';
      }
    }
  }

  return (
    <header
      className={clsx(
        styles.root,
        changeNav && styles.darkNav,
        navColor === 'dark' && styles.darkNav
      )}
    >
      <div className={styles.wrapNav}>
        <div className={styles.wrapImg}>
          <a href='/'>
            <img
              alt='NAPA Global'
              src={changeNav ? NAPALightLogo : NAPALogo}
              className={styles.brandLogo}
            />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.listNavigationTitle}>
            {headerNavigations.map((entry, index) => (
              <li key={index} className={styles.wrapLink}>
                {/* <Link
                  to={`#${entry.path}`}
                  className={styles.link}
                  onClick={() =>
                    entry.path === '/recruit'
                      ? setNavColor('dark')
                      : setNavColor('light')
                  }
                >
                  {entry.name}
                </Link> */}
                <a
                  href={entry.path[0] === '/' ? entry.path : `#${entry.path}`}
                  // <a href={entry.path}
                  className={styles.link}
                  onClick={() =>
                    entry.path === '/recruit'
                      ? setNavColor('dark')
                      : setNavColor('light')
                  }
                >
                  {entry.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Language />
        <div
          className={clsx(styles.wrapMenu, isOpen && styles.change)}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.bar1} />
          <div className={styles.bar2} />
          <div className={styles.bar3} />
        </div>
        <div className={isOpen ? styles.overlay : null}></div>
        <div className={clsx(styles.mobileMenu, isOpen && styles.show)}>
          {mobileHeaderNav.map((entry, index) => (
            // <Link to={`#${entry.path}`} key={index} className={styles.wrapLinkMobile}>

            // </Link>
            <a
              href={entry.path[0] === '/' ? entry.path : `#${entry.path}`}
              key={index}
              className={styles.wrapLinkMobile}
            >
              <span>{entry.name}</span>
              <button
                onClick={() => handleClickMenu(entry, index)}
                className={clsx(
                  styles.wrapIcon,
                  activePath === index && styles.active
                )}
              >
                <img
                  className={styles.icon}
                  src={entry.icon}
                  alt='Mobile Icon'
                />
              </button>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
