import BoardCommentWrite from "../write/BoardCommentWrite.container";
import * as A from "./BoardCommentList.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";

export default function BoardCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    const myPassword = prompt("비밀번호를 입력하세요");

    try {
      await deleteBoardComment({
        variables: {
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
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <A.ItemWrapper>
          {" "}
          <A.FlexWrapper>
            <span>사진</span>
            <A.MainWrapper>
              <A.WriterWrapper>
                <A.Writer>{props.el?.writer}</A.Writer>
              </A.WriterWrapper>
              <A.Contents>{props.el?.contents}</A.Contents>
            </A.MainWrapper>
            <A.OptionWrapper>
              <span onClick={onClickUpdate}>수정</span>

              <span onClick={onClickDelete}>삭제</span>
            </A.OptionWrapper>

            <A.DateString>{props.el?.createdAt}</A.DateString>
          </A.FlexWrapper>
        </A.ItemWrapper>
      )}

      {isEdit && (
        <BoardCommentWrite
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
