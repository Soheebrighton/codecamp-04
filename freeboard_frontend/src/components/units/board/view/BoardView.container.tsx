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
  IQuery,
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQueryFetchBoardArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardView() {
  const router = useRouter();

  const [commentWriter, setCommentWriter] = useState<string>("");
  const [commentPassword, setCommentPassword] = useState<string>("");
  const [commentContent, setCommentContent] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [isEdit, setEdit] = useState<boolean>(false);

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

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.myId },
    }
  );

  const { data: dataForComments } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.myId },
  });

  const date = data?.fetchBoard.createdAt.split("T")[0];
  // const date = data?.fetchBoard.createdAt.split("");
  // const newDate = date.splice(0, 10).join("");

  //splice, slice적용할 경우엔 값을 일일히 가져오면서 런타임 에러

  // /////라이크////////

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: router.query.myId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.myId } },
      ],
    });
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({ variables: { boardId: router.query.myId } });
    } catch (error) {
      alert(error.message);
    }
    Modal.success({
      content: "게시물이 정상적으로 삭제되었습니다.",
    });
    router.push(`/boards/list`);
  };

  const onClickList = () => {
    router.push(`/boards/list`);
  };

  const onClickEdit = () => {
    router.push(`/boards/${router.query.myId}/edit`);
  };

  const checkCommentSubmitValid = () => {
    if (commentWriter && commentPassword && commentContent) {
      console.log("빈칸없음");
      commentSubmit();
      alert("댓글이 등록되었습니다");
    } else {
      console.log("빈칸있음");
    }
  };

  const saveCommentWriter = (event) => {
    setCommentWriter(event.target.value);
  };

  const saveCommentPassword = (event) => {
    setCommentPassword(event.target.value);
  };

  const saveCommentContent = (event) => {
    setCommentContent(event.target.value);
    setWord(event.target.value);
  };

  const commentSubmit = async () => {
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
  };

  const onClickDeleteComment = async (event) => {
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
  };

  const onClickUpdateComment = (event) => {
    console.log(event.target.id);
    setEdit(true);
  };

  const onClickList = () => {
    router.push(`/boards/list`);
  };

  const onErrorImage = (event) => {
    event.target.src = "/images/unnamed.png";
  };

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
