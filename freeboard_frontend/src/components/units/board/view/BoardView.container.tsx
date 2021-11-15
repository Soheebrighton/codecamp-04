import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
} from "./BoardView.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

export default function BoardView() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  const date = data?.fetchBoard.createdAt.split("T")[0];
  // const date = data?.fetchBoard.createdAt.split("");
  // const newDate = date.splice(0, 10).join("");

  //splice, slice적용할 경우엔 값을 일일히 가져오면서 런타임 에러

  /////// 라이크 ////////

  async function onClickLike() {
    console.log("likes!");
    await likeBoard({
      variables: { boardId: router.query.myId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.myId } },
      ],
    });
  }

  ////// 삭제 ///////
  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.myId } });
    } catch (error) {
      alert(error.message);
    }
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards/list`);
  }

  function onClickList() {
    router.push(`/boards/list`);
  }

  ////////// 수정하기 ~~~~~~~~~ //////////

  function onClickEdit() {
    console.log("edit page");
    router.push(`/boards/${router.query.myId}/edit`);
  }
  //////////////////////////////////////

  //////////// 댓글 ~~~~~~~////////////

  /////// 댓글 등록시 빈 인풋 확인 /////

  const [commentWriter, setCommentWriter] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [commentContent, setCommentContent] = useState("");

  function checkCommentSubmitValid() {
    if (commentWriter && commentPassword && commentContent) {
      console.log("빈칸없음");
      commentSubmit();
    } else {
      console.log("빈칸있음");
    }
  }
  /////////////////////////////////
  ////// 작성자, 비밀번호, 댓글 내용 저장 ////

  function saveCommentWriter(event) {
    setCommentWriter(event.target.value);
  }

  function saveCommentPassword(event) {
    setCommentPassword(event.target.value);
  }

  function saveCommentContent(event) {
    setCommentContent(event.target.value);
    setWord(event.target.value);
  }

  const [word, setWord] = useState("");

  async function commentSubmit() {
    const result = await createBoardComment({
      variables: {
        createBoardCommentInput: {
          writer: commentWriter,
          password: commentPassword,
          contents: commentContent,
          rating: 1,
        },
      },
    });

    console.log(result);
    result.data.createBoard._id;
  }


  // updateBoardInput: {},
  // password,
  // boardId: router.query.myId,

  // 아이디 라우터, commentSubmit 확인
  /

  ////////////////////////////////////

  return (
    <BoardViewUI
      data={data}
      date={date}
      onClickLike={onClickLike}
      deleteBoard={deleteBoard}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      checkCommentSubmitValid={checkCommentSubmitValid}
      commentWriter={commentWriter}
      commentPassword={commentPassword}
      commentContent={commentContent}
      saveCommentWriter={saveCommentWriter}
      saveCommentPassword={saveCommentPassword}
      saveCommentContent={saveCommentContent}
      word={word}
      commentSubmit={commentSubmit}
    ></BoardViewUI>
  );
}
