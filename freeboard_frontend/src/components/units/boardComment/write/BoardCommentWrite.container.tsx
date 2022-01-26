import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { IPropsBoardCommentWrite } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IPropsBoardCommentWrite) {
  const router = useRouter();

  const [myWriter, setMyWriter] = useState<string>("");
  const [myPassword, setMyPassword] = useState<string>("");
  const [myContents, setMyContents] = useState<string>("");
  const [myStar, setMyStar] = useState<number>(0);

  const myInputs = {
    writer: myWriter,
    password: myPassword,
    contents: myContents,
    rating: myStar,
  };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeMyWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMyWriter(event.target.value);
  };

  const onChangeMyPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onChangeMyContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMyContents(event.target.value);
  };

  const onChangeStar = (value: number) => {
    setMyStar(value);
  };

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: { ...myInputs },

          boardId: String(router.query.myId),
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
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async () => {
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
  };

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
