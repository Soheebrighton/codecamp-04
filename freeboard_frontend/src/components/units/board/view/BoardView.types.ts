import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickList: () => void;

  // onClickLike: () => void;
  // onClickDislike: () => void;
  // onClickMoveToList: () => void;
  // onClickMoveToUpdate: () => void;
  // onClickDelete: () => void;
}
