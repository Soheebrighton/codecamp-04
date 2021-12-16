import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MarketCommentWrite() {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const [contents, setContents] = useState("");
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

  return (
    <MarketCommentWriteUI
      onChangeContents={onChangeContents}
      onClickSubmitQuestion={onClickSubmitQuestion}
      contents={contents}
    />
  );
}
