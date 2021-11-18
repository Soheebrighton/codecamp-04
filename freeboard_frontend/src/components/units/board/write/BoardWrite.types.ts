import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  nameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;

  saveName: (event: ChangeEvent<HTMLInputElement>) => void;
  savePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  saveTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  saveContent: (event: ChangeEvent<HTMLInputElement>) => void;
  saveYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;

  onChangeMyYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeOptionalAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;

  myZonecode: string;
  myAddress: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
