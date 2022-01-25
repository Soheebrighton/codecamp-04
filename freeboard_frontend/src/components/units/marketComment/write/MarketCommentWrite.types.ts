export interface IPropsMarketCommentWriteUI {
  onChangeContents: (event: any) => void;
  onClickSubmitQuestion: () => Promise<void>;
  contents: string;
  isEditQuestion: any;
  setIsEditQuestion: any;
  onClickUpdateQuestion: () => Promise<void>;
}
