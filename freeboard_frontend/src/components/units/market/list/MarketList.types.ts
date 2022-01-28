import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IPropsMarketListUI {
  dataForBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  data?: Pick<IQuery, "fetchUseditems">;
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  onClickCreateItem: () => void;
  onClickViewItem: (el: any) => () => void;
  onChangeKeyword: (value: any) => void;
  onClickPick: (el: any) => () => Promise<void>;
  onClickTodayItem: (event: any) => void;
  items: any[];
  onLoadMore: () => void;
  onError: (event: any) => void;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  keyword: string;
  images?: string[] | null | undefined;
}

export interface IPropsMarketListStyle {
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  el?: any;
}

export interface IPropsTextToken {
  isMatched: boolean;
}
