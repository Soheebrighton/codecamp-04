import {
  FETCH_USEDITEM_QUESTION_ANSWERS,
  FETCH_USER_LOGGED_IN,
} from "./AnswerList.queries";
import AnswerListUI from "./AnswerList.presenter";
import { useQuery } from "@apollo/client";
import { IPropsAnswerList } from "./AnswerList.types";

export default function AnswerList(props: IPropsAnswerList) {
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.usedQId,
    },
  });

  const { data: dataForUserInfo } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(data);
  return (
    <AnswerListUI
      data={data}
      usedQId={props.usedQId}
      dataForUserInfo={dataForUserInfo}
    />
  );
}
