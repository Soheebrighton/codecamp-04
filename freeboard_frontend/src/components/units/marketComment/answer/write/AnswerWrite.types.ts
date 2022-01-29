import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IPropsAnswerWrite {
  isEditAnswer?: boolean;
  setIsEditAnswer?: any;
  setIsAnswerWrite?: any;
  useditemAId?: string;
  el?: any;
  useditemQuestionId?: string;
}

export interface IPropsAnswerWriteUI {
  AnswerWriteSubmit: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isEditAnswer: boolean | undefined;
  contents: string;
  setIsEditAnswer: Dispatch<SetStateAction<boolean>> | undefined;
  el?: any;
}
