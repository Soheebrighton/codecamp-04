import { ApolloQueryResult } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardListUI {
  dataForBest?: Pick<IQuery, "fetchBoardsOfTheBest">;
  dataForBoards?: Pick<IQuery, "fetchBoards">;
  onClickNew: () => void;
  onClickView: (event: any) => void;
  startPage: number;
  refetch: (
    variables?:
      | Partial<{
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
  count: any;
  setStartPage: Dispatch<SetStateAction<number>>;
  onChangeSearch: (event: any) => void;
  onClickPage: (event: any) => void;
  onErrorBestImg: (event: any) => void;
}
