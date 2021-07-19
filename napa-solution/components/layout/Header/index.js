import {useQuery} from '@apollo/client'
import { GET_HEADER } from '../../../query/general'

const Header = () => {
  const { data, loading, error } = useQuery(GET_HEADER)
  const navbar = loading || data.navbar[0].property
  const navbarLogo = loading || navbar[0]
  const navbarHome = loading || navbar[1]
  const navbarMenu = loading || navbar.slice(2,-1)
  const navbarMenuIcon = loading || navbar[navbar.length-1]
  return loading || (
    <nav
      id="navbar"
      class="navbar navbar-expand-lg navbar-light bg-light no-default-spacing"
    >
      <a class="navbar-brand no-default-spacing" href="index.html">
        <img
          alt="LOGO"
          src={navbarLogo.image.publicUrl}
          class="img-navbar-brand"
        />
      </a>
      <div class="collapse navbar-collapse navbar-menu" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item item-navbar-menu active">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              class="icon-navbar-menu"
            />
            <a href={navbarHome.url} class="text-navbar-menu">
              {navbarHome.value}
            </a>
          </li>
          {navbarMenu.map(menu =>
            <li class="nav-item item-navbar-menu">
              <img
                alt="icon-navbar-menu"
                src="./img/Symbol46-10.svg"
                class="icon-navbar-menu"
              />
              <a href={menu.url} class="text-navbar-menu">
                {menu.value}
              </a>
            </li>
          )}
        </ul>
      </div>
      <button
        id="navbar-toggler"
        class="navbar-toggler no-default-spacing"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img alt="button-collapse" src={navbarMenuIcon.image.publicUrl} />
      </button>
    </nav>
  );
};

export default Header;
