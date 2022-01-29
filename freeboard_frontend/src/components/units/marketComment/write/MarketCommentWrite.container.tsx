import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { IPropsMarketCommentWrite } from "./MarketCommentWrite.types";

export default function MarketCommentWrite(props: IPropsMarketCommentWrite) {
  const router = useRouter();

  const [contents, setContents] = useState<string>("");

  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmitQuestion = async () => {
    if (contents) {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: contents,
          },
          useditemId: String(router.query.myId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.myId },
          },
        ],
      });
    } else {
      alert("내용을 입력해주세요!");
    }
  };

  const onClickUpdateQuestion = async () => {
    await updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: contents,
        },
        useditemQuestionId: props.usedQId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.myId },
        },
      ],
    });
    props.setIsEditQuestion(false);
  };

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickSubmitQuestion={onClickSubmitQuestion}
      contents={contents}
      isEditQuestion={props.isEditQuestion}
      setIsEditQuestion={props.setIsEditQuestion}
      onClickUpdateQuestion={onClickUpdateQuestion}
      el={props.el}
    />
  );
}
