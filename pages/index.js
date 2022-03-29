import Image from "next/image";
import head from "next/head";

import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Board from "../components/Board";
import Footer from "../components/Footer";
import baseApiUrl from "../utils/baseApiUrl";

export default function Home({ data }) {
  return (
    <>
      <Header />
      <MainBanner />
      <Board />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const res = await fetch(`${baseApiUrl}/api/blogs?populate=*`);
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
