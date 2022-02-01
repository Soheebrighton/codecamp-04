import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import { FETCH_BOARD, LIKE_BOARD, DELETE_BOARD } from "./BoardView.queries";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IQuery,
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

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

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.myId) },
    }
  );

  const onClickLike = async () => {
    await likeBoard({
      variables: { boardId: String(router.query.myId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.myId } },
      ],
    });
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({ variables: { boardId: String(router.query.myId) } });
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

  return (
    <BoardViewUI
      data={data}
      onClickLike={onClickLike}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    ></BoardViewUI>
  );
}
