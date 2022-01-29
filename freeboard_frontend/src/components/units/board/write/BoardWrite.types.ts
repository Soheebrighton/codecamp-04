import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IBoardWriteUIProps {
  saveName: (event: ChangeEvent<HTMLInputElement>) => void;
  savePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  saveTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  saveContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  nameError: string;
  passwordError: string;
  titleError: string;
  contentError: string;
  checkValid: () => Promise<void>;
  changeBtnBC: boolean;
  isEdit: boolean | undefined;
  editBoard: () => Promise<void>;
  changeBtnColor: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  saveYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onToggleModal: () => void;
  handleComplete: (data: any) => void;
  isModalVisible: boolean;
  myAddress: string;
  myZonecode: string;
  onChangeOptionalAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  optionalAddress: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  changeBtnBC: boolean;
  changeBtnColor: boolean;
}

export interface IUpdateBoardInputProps {
  updateBoardInput: {
    images: string[];
    title?: string | undefined;
    contents?: string | undefined;
    youtubeUrl?: string | null | undefined;
  };
  password: string;
  boardId: string;
}
