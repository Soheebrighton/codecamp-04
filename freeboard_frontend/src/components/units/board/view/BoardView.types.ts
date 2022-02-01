import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsBoardViewUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickList: () => void;
  onClickEdit: () => void;
}
