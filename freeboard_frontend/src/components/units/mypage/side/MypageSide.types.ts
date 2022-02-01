import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMypageSideUI {
  selectList: string[];
  selectedPoint: string;
  currentPage: string;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  onClickCreatePoint: () => void;
  onClickSelectPoint: (event: any) => void;
  onClickEditUser: () => void;
  onClickPoint: () => void;
  onClickPicked: () => void;
  onClickBought: () => void;
}

export interface IPropsBtn {
  currentPage: string;
}
