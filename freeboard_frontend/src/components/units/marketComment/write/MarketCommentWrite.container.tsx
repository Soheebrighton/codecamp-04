import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./MarketCommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MarketCommentWrite(props) {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [contents, setContents] = useState<string>("");
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS);

  const router = useRouter();
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickSubmitQuestion() {
    await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents: contents,
        },
        useditemId: router.query.myId,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: { useditemId: router.query.myId },
        },
      ],
    });
  }

  async function onClickUpdateQuestion() {
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
  }

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickSubmitQuestion={onClickSubmitQuestion}
      contents={contents}
      isEditQuestion={props.isEditQuestion}
      setIsEditQuestion={props.setIsEditQuestion}
      onClickUpdateQuestion={onClickUpdateQuestion}
    />
  );
}
