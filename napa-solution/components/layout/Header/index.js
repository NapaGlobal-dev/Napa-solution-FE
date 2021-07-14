const Header = () => {
  return (
    <nav
      id="navbar"
      class="navbar navbar-expand-lg navbar-light bg-light no-default-spacing"
    >
      <a class="navbar-brand no-default-spacing" href="index.html">
        <img
          alt="LOGO"
          src="./img/index-image-01.svg"
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
            <a href="index.html" class="text-navbar-menu">
              HOME
            </a>
          </li>
          <li class="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              class="icon-navbar-menu"
            />
            <a href="business-summary.html" class="text-navbar-menu">
              事業概要
            </a>
          </li>
          <li class="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              class="icon-navbar-menu"
            />
            <a href="company.html" class="text-navbar-menu">
              企業情報
            </a>
          </li>
          <li class="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              class="icon-navbar-menu"
            />
            <a href="recruit.html" class="text-navbar-menu">
              採用情報
            </a>
          </li>
          <li class="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              class="icon-navbar-menu"
            />
            <a href="contact.html" class="text-navbar-menu">
              お問い合わせ
            </a>
          </li>
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
        <img alt="button-collapse" src="./img/index-image-03.svg" />
      </button>
    </nav>
  );
};

export default Header;
