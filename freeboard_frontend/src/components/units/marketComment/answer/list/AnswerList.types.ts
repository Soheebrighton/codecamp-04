import { IQuery } from "../../../../../commons/types/generated/types";

export interface IPropsAnswerList {}

export interface IPropsAnswerListUI {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
}

export interface IPropsAnswerListUIItem {
  dataForUserInfo?: Pick<IQuery, "fetchUserLoggedIn">;
}
