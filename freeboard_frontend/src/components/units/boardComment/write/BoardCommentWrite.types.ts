import { ChangeEvent } from "react";

export interface IPropsBoardCommentWriteUI {
  onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeMyContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  onChangeStar: (value: number) => void;
  isEdit: boolean;
  el: any;
  myContents: string;
}

export interface IPropsBoardCommentWrite {
  setIsEdit: any;
  isEdit: boolean;
  el: any;
}
