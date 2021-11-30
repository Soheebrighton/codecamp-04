import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DELETE_BOARD,
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardView.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

export default function BoardView() {
  const router = useRouter();

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  const { data: dataForComments } = useQuery(FETCH_BOARD_COMMENTS, {
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
    Modal.success({
      content: "게시물이 정상적으로 삭제되었습니다.",
    });
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
      alert("댓글이 등록되었습니다");
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
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: commentWriter,
            password: commentPassword,
            contents: commentContent,
            rating: 1,
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

  ////////////////////////////////////

  /////// 댓글 삭제//////
  async function onClickDeleteComment(event) {
    const myPassword = prompt("비밀번호를 입력하세요.");

    try {
      // alert(event.target.id);
      await deleteBoardComment({
        variables: { password: myPassword, boardCommentId: event.target.id },
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
  //////// 댓글 수정 //////
  //// 연필 아이콘 눌렀을 때 수정 인풋으로 나오게 하기///

  const [isEdit, setEdit] = useState(false);

  function onClickUpdateComment(event) {
    console.log(event.target.id);
    setEdit(true);
  }

  function onClickList() {
    router.push(`/boards/list`);
  }

  //// 이미지 에러 //////
  function onErrorImage(event) {
    event.target.src = "/images/unnamed.png";
  }

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
      dataForComments={dataForComments}
      deleteBoardComment={deleteBoardComment}
      onClickDeleteComment={onClickDeleteComment}
      updateBoardComment={updateBoardComment}
      onClickUpdateComment={onClickUpdateComment}
      isEdit={isEdit}
      onErrorImage={onErrorImage}
    ></BoardViewUI>
  );
}
