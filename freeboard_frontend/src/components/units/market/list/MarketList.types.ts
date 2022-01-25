import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketListUI {
  dataForBest?: Pick<IQuery, "fetchUseditemsOfTheBest">;
  data?: Pick<IQuery, "fetchUseditems">;
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
  onClickCreateItem: () => void;
  onClickViewItem: (el: any) => void;
  onChangeKeyword: (value: any) => void;
  onClickPick: (el: any) => () => Promise<void>;
}
