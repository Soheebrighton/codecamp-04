export interface IPropsAnswerWrite {}

export interface IPropsAnswerWriteUI {
  AnswerWriteSubmit: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  onChangeContents: (event: any) => void;
}
