import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../commons/types/generated/types";
import AnswerWriteUI from "./AnswerWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./AnswerWrite.queries";
import { IPropsAnswerWrite } from "./AnswerWrite.types";

export default function AnswerWrite(props: IPropsAnswerWrite) {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  const [contents, setContents] = useState<string>("");

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
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
      props.setIsAnswerWrite((prev: boolean) => !prev);
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
