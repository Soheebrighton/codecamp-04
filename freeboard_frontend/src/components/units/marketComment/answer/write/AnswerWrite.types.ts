import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IPropsAnswerWrite {
  isEditAnswer: boolean;
  setIsEditAnswer: Dispatch<SetStateAction<boolean>>;
  setIsAnswerWrite: Dispatch<SetStateAction<boolean>>;
  useditemQuestionId: any;
  useditemAId: string;
}

export interface IPropsAnswerWriteUI {
  AnswerWriteSubmit: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEditAnswer: boolean;
  contents: string;
  setIsEditAnswer: Dispatch<SetStateAction<boolean>>;
}
