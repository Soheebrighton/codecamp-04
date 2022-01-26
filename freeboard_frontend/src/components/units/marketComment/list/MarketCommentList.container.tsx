import MarketCommentListUI from "./MarketCommnetList.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USER_LOGGED_IN,
} from "./MarketCommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
export default function MarketCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.myId },
  });

  const { data: dataForUserInfo } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  function onLoadMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult?.fetchUseditemQuestions,
          ],
        };
      },
    });
  }

  return (
    <MarketCommentListUI
      data={data}
      dataForUserInfo={dataForUserInfo}
      onLoadMore={onLoadMore}
    />
  );
}
