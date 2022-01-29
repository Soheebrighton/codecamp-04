import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketViewUI {
  data?: Pick<IQuery, "fetchUseditem">;
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  sellerId: string | undefined;
  myId: string | undefined;
  afterChange?: void;
  onClickDeleteItem: () => Promise<void>;
  onClickEditItem: () => void;
  onClickPayment: () => Promise<void>;
  onClickPickItem: () => Promise<void>;
  onClickAddItemToCart: (el: any) => () => void;
  onClickBuyPoint: () => void;
}

export interface IPropsPickBtn {
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  data?: Pick<IQuery, "fetchUseditem">;
}
