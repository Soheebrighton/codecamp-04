import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="
        freeboards"
        />
        <meta property="og:url" content="http://soymarket.shop/" />
        <meta
          property="og:image"
          content="https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1129886007-scaled.jpg?resize=700,466"
        />
        <meta property="og:description" content="hello, welcome to the page" />;
      </Head>
      <div>hello, this is the free board</div>
    </>
  );
}
