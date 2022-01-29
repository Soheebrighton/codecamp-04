import {
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./AnswerList.queries";
import AnswerListUI from "./AnswerList.presenter";
import { useQuery } from "@apollo/client";
import { IPropsAnswerList } from "./AnswerList.types";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

export default function AnswerList(props: IPropsAnswerList) {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.usedQId,
    },
  });

  const { data: dataForUserInfo } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <AnswerListUI
      data={data}
      usedQId={props.usedQId}
      dataForUserInfo={dataForUserInfo}
    />
  );
}
