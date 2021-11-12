import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARD, LIKE_BOARD } from "./BoardView.queries";
import { gql, useQuery, useMutation } from "@apollo/client";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardView() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);

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

  return (
    <BoardViewUI
      data={data}
      date={date}
      onClickLike={onClickLike}
      deleteBoard={deleteBoard}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    ></BoardViewUI>
  );
}
