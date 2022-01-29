import BoardListUI from "./BoardList.presenter";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const [startPage, setStartPage] = useState<number>(1);
  const [myKeyword, SetMyKeyword] = useState<string>("");

  const { data: dataForBest } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );

  const { data: dataForBoards, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  const { data: dataForCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    SetMyKeyword(data);
  }, 1000);

  const onChangeSearch = (event: any) => {
    getDebounce(event.target.value);
  };

  const onClickPage = (event: any) => {
    if (event.target) {
      refetch({ search: myKeyword, page: event.target.id });
    }
  };

  const onClickNew = () => {
    router.push(`/boards/new`);
  };

  const onClickView = (event: any) => {
    router.push(`/boards/${event.target.id}`);
  };

  const onErrorBestImg = (event: any) => {
    event.target.style.display = "none";
  };

  return (
    <BoardListUI
      dataForBoards={dataForBoards}
      dataForBest={dataForBest}
      onClickNew={onClickNew}
      onClickView={onClickView}
      startPage={startPage}
      refetch={refetch}
      count={dataForCount?.fetchBoardsCount}
      setStartPage={setStartPage}
      onChangeSearch={onChangeSearch}
      onClickPage={onClickPage}
      onErrorBestImg={onErrorBestImg}
    ></BoardListUI>
  );
}
