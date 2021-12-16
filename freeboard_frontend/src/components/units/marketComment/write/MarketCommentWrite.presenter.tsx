import * as A from "./MarketCommentWrite.styles";

export default function MarketCommentWriteUI(props) {
  return (
    <A.Wrapper>
      <A.CommentCreate>
        <A.CommentTop></A.CommentTop>
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
            <A.CommentSubmitButton onClick={props.onClickSubmitQuestion}>
              등록하기
            </A.CommentSubmitButton>
          </A.CommentBottom>
        </A.CommentWrite>
      </A.CommentCreate>
    </A.Wrapper>
  );
}
