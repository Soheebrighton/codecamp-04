import { useMutation } from "@apollo/client";
import { useState } from "react";
import AnswerWriteUI from "./AnswerWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./AnswerWrite.queries";

export default function AnswerWrite(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const [contents, setContents] = useState("");

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function AnswerWriteSubmit() {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      props.setIsAnswerWrite((prev) => !prev);
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdateAnswer() {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: contents,
          },
          useditemQuestionAnswerId: props.useditemAId,
        },
      });
      props.setIsEditAnswer(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <AnswerWriteUI
      AnswerWriteSubmit={AnswerWriteSubmit}
      onChangeContents={onChangeContents}
      onClickUpdateAnswer={onClickUpdateAnswer}
      isEditAnswer={props.isEditAnswer}
      setIsEditAnswer={props.setIsEditAnswer}
      contents={contents}
    />
  );
}
