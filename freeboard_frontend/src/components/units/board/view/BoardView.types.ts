import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardViewUI {
  data?: Pick<IQuery, "fetchBoard">;
  date: any;
  onClickLike: () => Promise<void>;
}
