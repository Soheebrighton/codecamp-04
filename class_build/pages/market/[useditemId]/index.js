import Head from "next/head";
import { gql, request } from "graphql-request";
export default function MarketPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        {/* <meta property="og:url" content="http://soymarket.shop/" /> */}
        <meta property="og:image" content={props.fetchUseditem.images[0]} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        ;
      </Head>
      <div>hello, this is the market page</div>
    </>
  );
}

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );
  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
