import Image from "next/image";

const blogTest = ({ data }) => {
  return (
    <div>
      <div>
        <Image src={data.data[0].attributes.media.data[0].attributes.url} alt="상대경로 되야함" width={500} height={500} />
      </div>
    </div>
  );
};

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

export default blogTest;
