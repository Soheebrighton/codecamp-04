import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARD,
  DELETE_BOARD,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

export default function BoardList() {
  const [myKeyword, SetMyKeyword] = useState("");
  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    SetMyKeyword(data);
  }, 1000);

  function onChangeSearch(event) {
    getDebounce(event.target.value);
  }

  function onClickPage(event) {
    if (event.target) {
      refetch({ search: myKeyword, page: event.target.id });
    }
  }
  const router = useRouter();
  /////////////// 데이터들 //////////////
  const { data: dataForBest } = useQuery(FETCH_BOARDS_OF_THE_BEST);
  const { data: dataForBoards, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataForCount } = useQuery(FETCH_BOARDS_COUNT);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const { data: dataForEachBoard } = useQuery(FETCH_BOARD);

  console.log(dataForBoards);

  ////////////////////////////////////
  ////////////// 클릭 ///////////////
  async function onClickDelete(event: ChangeEvent<HTMLInputElement>) {
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

  function onClickView(event: ChangeEvent<HTMLInputElement>) {
    console.log("상세보기로 이동");
    router.push(`/boards/${event.target.id}`);
  }
  ////// 페이지네이션 //////////

  const [startPage, setStartPage] = useState(1);

  // const lastPage = dataForCount
  //   ? Math.ceil(dataForCount?.fetchBoardsCount / 10)
  //   : 0;

  // function onClickPagePrev() {
  //   if (startPage === 1) return;
  //   setStartPage((prev) => prev - 10);
  //   console.log("이전");
  //   console.log(dataForCount);
  // }

  // function onClickPageNext() {
  //   if (startPage + 10 > lastPage) return;
  //   setStartPage((prev) => prev + 10);
  //   console.log("다음");
  // }

  // function onClickPage(event) {
  //   refetch({ page: Number(event.target.id) });
  // }

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
      // onClickPagePrev={onClickPagePrev}
      // onClickPageNext={onClickPageNext}
      // onClickPage={onClickPage}
      startPage={startPage}
      // lastPage={lastPage}
      refetch={refetch}
      count={dataForCount?.fetchBoardsCount}
      setStartPage={setStartPage}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
    ></BoardListUI>
  );
}
