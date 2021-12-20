import AnswerListUIItem from "./AnswerList.presenterItem";

export default function AnswerListUI(props) {
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
