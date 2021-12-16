import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./AnswerList.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import AnswerWrite from "../write/AnswerWrite.container";

export default function AnswerListUIItem(props) {
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );
  const [isEditAnswer, setIsEditAnswer] = useState(false);

  async function onClickDeleteAnswer() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.usedQId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEditAnswer() {
    setIsEditAnswer(true);
  }

  return (
    <>
      {" "}
      {!isEditAnswer && (
        <div>
          <div>작성자:{props.el.user.name} </div>
          <div>내용:{props.el.contents} </div>
          <button onClick={onClickDeleteAnswer}>삭제</button>
          <button onClick={onClickEditAnswer}>수정</button>
        </div>
      )}
      {isEditAnswer && (
        <AnswerWrite
          isEditAnswer={isEditAnswer}
          setIsEditAnswer={setIsEditAnswer}
          useditemAId={props.el._id}
        />
      )}
    </>
  );
}
