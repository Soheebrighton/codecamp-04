import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./AnswerList.queries";
import AnswerListUI from "./AnswerList.presenter";
import { useQuery } from "@apollo/client";

export default function AnswerList(props) {
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.usedQId,
    },
  });

  console.log(data);
  return <AnswerListUI data={data} usedQId={props.usedQId} />;
}
