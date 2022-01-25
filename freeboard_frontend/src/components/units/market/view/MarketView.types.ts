import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketViewUI {
  data?: Pick<IQuery, "fetchUseditem">;
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  onClickDeleteItem: () => Promise<void>;
  onClickEditItem: () => void;
  onClickPayment: () => Promise<void>;
  onClickPickItem: () => Promise<void>;
  onClickAddItemToCart: (el: any) => () => void;
  sellerId: string | undefined;
  myId: string | undefined;
  onClickBuyPoint: () => void;
  afterChange?: void;
}
