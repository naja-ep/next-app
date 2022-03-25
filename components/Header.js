import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header_wrap clearfix">
        <h1>
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="일룸" />
            </a>
          </Link>
        </h1>
        <nav className="gnb">
          <ul className="depth_1">
            <li>
              <Link href="/src/bedroom">
                <a>침실</a>
              </Link>
            </li>
            <li>
              <Link href="/src/livingroom">
                <a>거실</a>
              </Link>
            </li>
            <li>
              <Link href="/src/kitchen">
                <a>주방</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>키즈룸</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>학생방</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
