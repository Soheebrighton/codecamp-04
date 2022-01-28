import { useMutation } from "@apollo/client";
import { ChangeEvent, SetStateAction, useState } from "react";
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
  const [contents, setContents] = useState<string>("");

  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER);

  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const AnswerWriteSubmit = async () => {
    try {
      await createUseditemQuestionAnswer({
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
      props.setIsAnswerWrite((prev: SetStateAction<boolean>) => !prev);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdateAnswer = async () => {
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
  };

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
