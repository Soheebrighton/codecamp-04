import * as A from "./AnswerWrite.styles";
import { IPropsAnswerWriteUI } from "./AnswerWrite.types";

export default function AnswerWriteUI(props: IPropsAnswerWriteUI) {
  return (
    <>
      <A.CommentWrite>
        <A.CommentInput
          placeholder="댓글을 입력해주세요"
          onChange={props.onChangeContents}
          maxLength={100}
        ></A.CommentInput>
        <A.CommentBottom>
          <A.CommentWords>
            <span>{props.contents.length}</span>/100
          </A.CommentWords>
          <A.CommentSubmitButton
            onClick={
              !props.isEditAnswer
                ? props.AnswerWriteSubmit
                : props.onClickUpdateAnswer
            }
          >
            {!props.isEditAnswer ? "등록하기" : "수정하기"}
          </A.CommentSubmitButton>
        </A.CommentBottom>
      </A.CommentWrite>
    </>
  );
}
