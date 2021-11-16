import * as A from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <A.Wrapper>
      {!props.isEdit && (
        <>
          <span>댓글</span>
        </>
      )}

      <A.InputWrapper>
        <A.Input
          placeholder="작성자"
          readOnly={props.el?.wrtier}
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeMyWriter}
        />
        <A.Input
          type="비밀번호"
          placeholder="비밀번호"
          onChange={props.onChangeMyPassword}
        />
      </A.InputWrapper>
      <A.ContentsWrapper>
        <A.Contents
          maxLength={100}
          defaultValue={props.el?.contents}
          placeholder="개인정보를 공유 및 요청하거
나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 
이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeMyContents}
        />
        <A.BottomWrapper>
          <A.ContentsLength>{props.myContents.length}/100</A.ContentsLength>
          <A.Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </A.Button>
        </A.BottomWrapper>
      </A.ContentsWrapper>
    </A.Wrapper>
  );
}
