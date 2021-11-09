import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";
import { gql, useMutation, useQuery } from "@apollo/client";
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function BoardList() {
  const { data: dataForBoards } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data: dataForBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);

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

  return (
    <BoardListUI
      dataForBoards={dataForBoards}
      dataForBest={dataForBest}
      deleteBoard={deleteBoard}
      onClickDelete={onClickDelete}
    ></BoardListUI>
  );
}
