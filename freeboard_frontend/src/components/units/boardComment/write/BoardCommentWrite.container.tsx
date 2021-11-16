import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import {
  CREATED_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";

export default function BoardCommentWrite(props) {
  //새 댓글의 작성자, 비밀번호, 내용의 값을 변수에 담기//
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  ///// ///// //// ///// /////

  const [createBoardComment] = useMutation(CREATED_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }

  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: 0,
          },
          boardId: String(router.query.myId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate() {
    if (!myContents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }

    if (!myPassword) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }

    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: myContents },
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyPassword={onChangeMyPassword}
      onChangeMyContents={onChangeMyContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
      myContents={myContents}
    />
  );
}
