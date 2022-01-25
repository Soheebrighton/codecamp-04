import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketCommentListUI {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

export interface IPropsMarketCommentListUIItem {
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
}
