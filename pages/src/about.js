import Header from "../../components/Header";
import Footer from "../../components/Footer";

import baseApiUrl from "../../utils/baseApiUrl";

export default function About({ data }) {
  console.log(data);
  const dataAttr = data.data[0].attributes;

  const title = {
    fontSize: "1.5em",
    fontWeight: "700",
    marginBottom: "1em",
  };

  const content = {
    wordBreak: "keep-all",
  };
  const pulishedDate = {
    marginBottom: "0.5em",
  };
  return (
    <div>
      <Header />
      <div style={{ maxWidth: "940px", margin: "auto" }}>
        <div className="title" style={title}>
          {dataAttr.title}
        </div>
        <p className="pulishedDate" style={pulishedDate}>
          {dataAttr.publishedAt}
        </p>
        <div className="content" style={content}>
          {dataAttr.content}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { id } = context.query;
  const res = await fetch(`${baseApiUrl}/api/blogs`);
  const data = await res.json();

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
