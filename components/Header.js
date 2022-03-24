const Header = () => {
  return (
    <header>
      <h1>
        <img src="/images/logo.png" alt="일룸" />
      </h1>
      <nav className="gnb">
        <ul className="depth_1">
          <li>
            <a href="#">Menu 1</a>
          </li>
          <li>
            <a href="#">Menu 2</a>
          </li>
          <li>
            <a href="#">Menu 3</a>
          </li>
          <li>
            <a href="#">Menu 4</a>
          </li>
          <li>
            <a href="#">Menu 5</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
