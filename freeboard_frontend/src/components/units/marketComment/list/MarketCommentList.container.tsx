import MarketCommentListUI from "./MarketCommnetList.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./MarketCommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function MarketCommentList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.myId },
  });

  const { data: dataForUserInfo } = useQuery(FETCH_USER_LOGGED_IN);

  return <MarketCommentListUI data={data} dataForUserInfo={dataForUserInfo} />;
}
