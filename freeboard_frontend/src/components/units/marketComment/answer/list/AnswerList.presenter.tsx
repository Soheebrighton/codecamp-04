import AnswerListUIItem from "./AnswerList.presenterItem";
import { IPropsAnswerListUI } from "./AnswerList.types";

export default function AnswerListUI(props: IPropsAnswerListUI) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((el) => (
        <AnswerListUIItem
          el={el}
          key={el._id}
          usedQId={props.usedQId}
          dataForUserInfo={props.dataForUserInfo}
        />
      ))}
    </>
  );
}
