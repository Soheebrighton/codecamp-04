import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketCommentListUI {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
  dataForUserInfo: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export interface IPropsMarketCommentListUIItem {
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
  el?: any;
}
