import * as A from "./BoardCommentWrite.styles";
import { Rate } from "antd";
import { IPropsBoardCommentWriteUI } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IPropsBoardCommentWriteUI) {
  return (
    <A.Wrapper>
      <A.CommentCreate>
        <A.CommentTop>
          <A.CommentWriteName
            placeholder="작성자"
            readOnly={props.el?.writer}
            defaultValue={props.el?.writer || ""}
            onChange={props.onChangeMyWriter}
          ></A.CommentWriteName>
          <A.CommentWritePassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeMyPassword}
          ></A.CommentWritePassword>
          <A.Rate>
            <span>
              <Rate onChange={props.onChangeStar} />
            </span>
          </A.Rate>
        </A.CommentTop>
        <A.CommentWrite>
          <A.CommentInput
            placeholder="댓글을 입력해주세요"
            maxLength={100}
            defaultValue={props.el?.contents}
            onChange={props.onChangeMyContents}
          ></A.CommentInput>
          <A.CommentBottom>
            <A.CommentWords>
              <span>{props.myContents.length}</span>/100
            </A.CommentWords>
            <A.CommentSubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </A.CommentSubmitButton>
          </A.CommentBottom>
        </A.CommentWrite>
      </A.CommentCreate>
    </A.Wrapper>
  );
}
