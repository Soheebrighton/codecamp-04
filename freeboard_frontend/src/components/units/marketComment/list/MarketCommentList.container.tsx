import MarketCommentListUI from "./MarketCommnetList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function MarketCommentList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.myId },
  });

  return <MarketCommentListUI data={data} />;
}
