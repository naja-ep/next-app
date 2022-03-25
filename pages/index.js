import axios from "axios";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Board from "../components/Board";
import Footer from "../components/Footer";

export default function Home({ data }) {
  return (
    <div>
      <Header />
      <MainBanner />
      <Board />

      <Footer />
    </div>
  );
}

// Home.getInitialProps = async () => {
//   const { data } = await axios.get("https://serene-eyrie-13944.herokuapp.com/api/test");
//   console.log("data loaded");
//   return { data };
// };
