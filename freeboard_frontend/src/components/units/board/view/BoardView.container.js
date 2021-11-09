import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardView.queries";
import { gql, useQuery, useMutation } from "@apollo/client";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardView() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  const date = data?.fetchBoard.createdAt.split("T")[0];
  // const date = data?.fetchBoard.createdAt.split("");
  // const newDate = date.splice(0, 10).join("");

  //splice, slice적용할 경우엔 값을 일일히 가져오면서 런타임 에러

  function onClickLike() {
    // let likeNum = data?.fetchBoard.likeCount;
    // likeNum = +1;
    // console.log({ likeNum });
    console.log("likes!");
  }
  async function onClickDelete(event) {
    try {
      await deleteBoard({
        variables: { boardId: event.target.id },
      });
    } catch (error) {
      alert(error.message);
    }
    console.log("deleted!!");
  }
  return (
    <BoardViewUI
      data={data}
      date={date}
      onClickLike={onClickLike}
      deleteBoard={deleteBoard}
      onClickDelete={onClickDelete}
    ></BoardViewUI>
  );
}
