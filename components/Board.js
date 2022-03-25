import Link from "next/link";

const Board = () => {
  return (
    <section className="product_area">
      <p>New Products</p>
      <ul className="prod__list">
        <li>
          <Link href="#">
            <a>
              <div className="prod_thumb"></div>
              <p className="prod_name">제품명</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <div className="prod_thumb"></div>
              <p className="prod_name">제품명</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <div className="prod_thumb"></div>
              <p className="prod_name">제품명</p>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Board;
