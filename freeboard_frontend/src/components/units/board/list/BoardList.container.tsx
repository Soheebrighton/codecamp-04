import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARD,
  DELETE_BOARD,
} from "./BoardList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  /////////////// 데이터들 //////////////
  const { data: dataForBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: dataForBoards } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data: dataForEachBoard } = useQuery(FETCH_BOARD);
  ////////////////////////////////////
  ////////////// 클릭 ///////////////
  async function onClickDelete(event) {
    try {
      await deleteBoard({
        variables: { boardId: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
    } catch (error) {
      alert(error.message);
    }
  }
  function onClickNew() {
    router.push(`/boards/new`);
  }

  function onClickView(event) {
    console.log("상세보기로 이동");
    router.push(`/boards/${event.target.id}`);
  }

  /////////////////////////////////////
  return (
    <BoardListUI
      dataForBoards={dataForBoards}
      dataForBest={dataForBest}
      deleteBoard={deleteBoard}
      onClickDelete={onClickDelete}
      onClickNew={onClickNew}
      onClickView={onClickView}
      dataForEachBoard={dataForEachBoard}
    ></BoardListUI>
  );
}
