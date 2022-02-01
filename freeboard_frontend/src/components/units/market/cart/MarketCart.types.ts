import { Dispatch, SetStateAction } from "react";

export interface IPropsCartUI {
  items: any[];
  onClickViewItem: (event: any) => void;
  onClickItems: () => void;
  onClickDelete: (event: any) => void;
  onClickBuyItem: (event: any) => Promise<void>;
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsCart {
  setOpenSheet: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsContainer {
  el: any;
  items: any[];
}
