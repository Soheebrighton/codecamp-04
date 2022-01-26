import { ChangeEvent } from "react";

export interface IPropsMarketCommentWriteUI {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmitQuestion: () => Promise<void>;
  contents: string;
  isEditQuestion: any;
  setIsEditQuestion: any;
  onClickUpdateQuestion: () => Promise<void>;
}

export interface IPropsMarketCommentWrite {
  isEditQuestion: boolean;
  setIsEditQuestion: boolean;
}
