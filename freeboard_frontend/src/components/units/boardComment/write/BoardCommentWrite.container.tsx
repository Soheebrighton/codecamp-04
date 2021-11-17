import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { Modal } from "antd";

export default function BoardCommentWrite(props) {
  const router = useRouter();
  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myStar, setMyStar] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
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

  function onChangeStar(value) {
    setMyStar(value);
  }

  // function onChangeStar(value: number) {
  //   setMyStar(value);
  // }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: myWriter,
            password: myPassword,
            contents: myContents,
            rating: myStar,
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
      if (error instanceof Error) alert(error.message);
    }
  }

  async function onClickUpdate() {
    if (!myContents) {
      Modal.warning({
        title: "내용이 수정되지 않았습니다.",
      });

      return;
    }
    if (!myPassword) {
      Modal.warning({
        title: "비밀번호가 입력되지 않았습니다.",
      });

      return;
    }

    try {
      if (!props.el?._id) return;
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: myContents, rating: myStar },
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
      onChangeStar={onChangeStar}
      isEdit={props.isEdit}
      el={props.el}
      myContents={myContents}
    />
  );
}
