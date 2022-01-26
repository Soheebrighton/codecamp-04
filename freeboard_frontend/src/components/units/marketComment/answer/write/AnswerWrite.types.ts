import { ChangeEvent } from "react";

export interface IPropsAnswerWrite {
  isEditAnswer: boolean;
  setIsEditAnswer: any;
  setIsAnswerWrite: any;
  useditemQuestionId: string;
  useditemAId: string;
}

export interface IPropsAnswerWriteUI {
  AnswerWriteSubmit: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEditAnswer: boolean;
  contents: string;
}
