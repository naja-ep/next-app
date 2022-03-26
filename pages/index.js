import axios from "axios";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Board from "../components/Board";
import Footer from "../components/Footer";
import baseApiUrl from "../utils/baseApiUrl";
import Image from "next/image";

export default function Home({ data }) {
  console.log(data);
  console.log("???");
  const baseURL = "https://serene-eyrie-13944.herokuapp.com";
  console.log(baseURL);
  return (
    <div>
      {/* <div>{data.data.attributes.test}</div> */}
      {/* <img src="`https://serene-eyrie-13944.herokuapp.com/{data.data[0].attributes.media.data[0].attributes.url}` " /> */}
      <Image src={data.data[0].attributes.media.data[0].attributes.url} alt="상대경로 되야함" width={500} height={500} />
      {/* <Image src={baseURL + data.data[0].attributes.media.data[0].attributes.url} alt="상대경로 " width={500} height={500} />
      <Image src="/uploads/pengsoo_92ef3e1bdc.jpg" alt="상대경로2 안되는게맞음" width={500} height={500} />
      <Image src="https://serene-eyrie-13944.herokuapp.com/uploads/pengsoo_92ef3e1bdc.jpg" alt="절대경로" width={500} height={500} /> */}
      {/* <div>{data.data[0].attributes.media.data[0].attributes.url}</div> */}
      {/* <img src="https://serene-eyrie-13944.herokuapp.com/uploads/pengsoo_92ef3e1bdc.jpg" /> */}
      <Header />
      <MainBanner />
      <Board />
      <Footer />
    </div>
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
