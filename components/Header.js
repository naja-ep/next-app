import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="header_wrap clearfix">
        <h1>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" alt="일룸" width="100px" height="30px" />
            </a>
          </Link>
        </h1>
        <nav className="gnb">
          <ul className="depth_1">
            <li>
              <Link href="/src/about">
                <a>회사소개</a>
              </Link>
            </li>
            <li>
              <Link href="/src/product">
                <a>제품소개</a>
              </Link>
            </li>
            <li>
              <Link href="/src/notice/1">
                <a>공지사항</a>
              </Link>
            </li>
            <li>
              <Link href="/src/contact">
                <a>문의</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
