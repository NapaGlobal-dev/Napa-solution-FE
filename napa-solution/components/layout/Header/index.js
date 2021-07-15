const Header = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light bg-light no-default-spacing"
    >
      <a className="navbar-brand no-default-spacing" href="/">
        <img
          alt="LOGO"
          src="./img/index-image-01.svg"
          className="img-navbar-brand"
        />
      </a>
      <div className="collapse navbar-collapse navbar-menu" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item item-navbar-menu active">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              className="icon-navbar-menu"
            />
            <a href="/" className="text-navbar-menu">
              HOME
            </a>
          </li>
          <li className="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              className="icon-navbar-menu"
            />
            <a href="business-summary" className="text-navbar-menu">
              事業概要
            </a>
          </li>
          <li className="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              className="icon-navbar-menu"
            />
            <a href="company" className="text-navbar-menu">
              企業情報
            </a>
          </li>
          <li className="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              className="icon-navbar-menu"
            />
            <a href="recruit" className="text-navbar-menu">
              採用情報
            </a>
          </li>
          <li className="nav-item item-navbar-menu">
            <img
              alt="icon-navbar-menu"
              src="./img/Symbol46-10.svg"
              className="icon-navbar-menu"
            />
            <a href="contact" className="text-navbar-menu">
              お問い合わせ
            </a>
          </li>
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
        <img alt="button-collapse" src="./img/index-image-03.svg" />
      </button>
    </nav>
  );
};

export default Header;
