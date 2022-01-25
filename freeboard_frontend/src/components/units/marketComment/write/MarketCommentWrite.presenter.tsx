import * as A from "./MarketCommentWrite.styles";
import { IPropsMarketCommentWriteUI } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(
  props: IPropsMarketCommentWriteUI
) {
  return (
    <A.Wrapper>
      <A.CommentCreate>
        <A.CommentWrite>
          <A.CommentInput
            placeholder="댓글을 입력해주세요"
            maxLength={100}
            onChange={props.onChangeContents}
          ></A.CommentInput>
          <A.CommentBottom>
            <A.CommentWords>
              <span>{props.contents.length}</span>/100
            </A.CommentWords>
            <A.CommentSubmitButton
              onClick={
                !props.isEditQuestion
                  ? props.onClickSubmitQuestion
                  : props.onClickUpdateQuestion
              }
            >
              {!props.isEditQuestion ? "등록하기" : "수정하기"}
            </A.CommentSubmitButton>
          </A.CommentBottom>
        </A.CommentWrite>
      </A.CommentCreate>
    </A.Wrapper>
  );
}
