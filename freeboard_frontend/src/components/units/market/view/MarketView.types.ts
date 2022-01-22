import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsMarketViewUI {
  data?: Pick<IQuery, "fetchUseditem">;
  dataForPicked?: Pick<IQuery, "fetchUseditemsIPicked">;
}
