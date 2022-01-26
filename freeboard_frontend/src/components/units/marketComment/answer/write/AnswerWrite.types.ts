import { ChangeEvent } from "react";

export interface IPropsAnswerWrite {
  isEditAnswer: boolean;
  setIsEditAnswer: boolean;
}

export interface IPropsAnswerWriteUI {
  AnswerWriteSubmit: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEditAnswer: boolean;
  contents: string;
  setIsEditAnswer: boolean;
}
