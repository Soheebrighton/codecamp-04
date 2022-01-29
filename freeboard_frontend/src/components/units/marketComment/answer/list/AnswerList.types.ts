import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsAnswerList {
  usedQId: any;
}

export interface IPropsAnswerListUI {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  usedQId: string;
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
}

export interface IPropsAnswerListUIItem {
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
  el: any;
  usedQId: any;
}
