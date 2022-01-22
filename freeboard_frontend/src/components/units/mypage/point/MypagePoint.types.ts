import { Dispatch, SetStateAction } from "react";

export interface IPropsMypagePointUI {
  selectList: string[];
  SelectedPoint: string;
  data?: any;
  onClickCreatePoint: () => void;
  onClickSelectPoint: (event: any) => void;
  onClickEditUser: () => void;
  setSelectedPoint: Dispatch<SetStateAction<string>>;
}

export interface IPropsMypagePoint {}
