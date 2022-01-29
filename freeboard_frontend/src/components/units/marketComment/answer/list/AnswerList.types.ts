import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsAnswerList {
  usedQId: any;
}

export interface IPropsAnswerListUI {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
  usedQId: any;
  el: any;
}

export interface IPropsAnswerListUIItem {
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
  el: any;
  usedQId: any;
}
