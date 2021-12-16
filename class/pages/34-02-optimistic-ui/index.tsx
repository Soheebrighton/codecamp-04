import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
export default function OptimisticUIPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "6196ef6533bb5c002919e228" },
    }
  );

  async function onClickLike() {
    // mutation that adds like
    await likeBoard({
      variables: {
        boardId: "6196ef6533bb5c002919e228",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "6196ef6533bb5c002919e228",
      //       },
      //     },
      //   ], // we should wait for it until it is refetched
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6196ef6533bb5c002919e228" },
          data: {
            fetchBoard: {
              _id: "6196ef6533bb5c002919e228",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>{data?.fetchBoard.likeCount}likes</div>
      <button onClick={onClickLike}>like</button>
    </>
  );
}
