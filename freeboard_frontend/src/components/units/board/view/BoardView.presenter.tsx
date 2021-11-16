import * as A from "../../../../../styles/view";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function BoardViewUI(props) {
  return (
    <>
      <A.Main>
        <A.Wrapper>
          <A.Date>{props.date}</A.Date>{" "}
          {/* <div>
          {" "}
          <FontAwesomeIcon icon={faLink} color="#c8c2fc" />
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon={faMapMarkerAlt} color="#c8c2fc" />
        </div> */}
          <A.Writer>
            <A.Mutation>
              <A.Modify onClick={props.onClickEdit}>수정</A.Modify>
              <A.Delete onClick={props.onClickDelete}>삭제</A.Delete>
            </A.Mutation>
            <A.Profile>
              {" "}
              <A.Name>{props.data?.fetchBoard.writer}</A.Name>{" "}
              {/* <FontAwesomeIcon icon={faLink} color="#c8c2fc" /> */}
              <A.ProfilePhoto>
                <img
                  src="/images/icon_noprofile.png"
                  width="35px"
                  height="35px"
                />
              </A.ProfilePhoto>
            </A.Profile>
          </A.Writer>
          <A.Title>{props.data?.fetchBoard.title}</A.Title>
          <A.SmallBar></A.SmallBar>
          <A.Content>
            <p> {props.data?.fetchBoard.contents}</p>
          </A.Content>
          <A.Likes>
            <A.Like onClick={props.onClickLike}>
              <div>
                <FontAwesomeIcon icon={faThumbsUp} color="#c8c2fc" />
              </div>
              <A.LikesText>{props.data?.fetchBoard.likeCount}</A.LikesText>
            </A.Like>
            {/* <Dislike>
            <div>
              {" "}
              <FontAwesomeIcon icon={faThumbsDown} color="#c8c2fc" />
            </div>
            <LikesText>123</LikesText>
          </Dislike> */}
          </A.Likes>
        </A.Wrapper>
        <A.ListButton onClick={props.onClickList}>목록으로</A.ListButton>

        <A.Comments>
          <A.CommentTitle>댓글</A.CommentTitle>
          {/* ////댓글 작성 인풋 ////////////////////////////// */}
          <A.CommentCreate>
            <A.CommentTop>
              <A.CommentWriteName
                type="text"
                placeholder="작성자"
                onChange={props.saveCommentWriter}
              ></A.CommentWriteName>
              <A.CommentWritePassword
                type="password"
                placeholder="비밀번호"
                onChange={props.saveCommentPassword}
              ></A.CommentWritePassword>
              <A.Rate>★★★★★</A.Rate>
            </A.CommentTop>
            <A.CommentWrite>
              <A.CommentInput
                type="text"
                placeholder="댓글을 입력해주세요"
                maxLength="100"
                onChange={props.saveCommentContent}
              ></A.CommentInput>
              <A.CommentBottom>
                <A.CommentWords>
                  <span>{props.word.length}</span>/100
                </A.CommentWords>
                <A.CommentSubmitButton onClick={props.checkCommentSubmitValid}>
                  <span>등록하기</span>
                </A.CommentSubmitButton>
              </A.CommentBottom>
            </A.CommentWrite>{" "}
          </A.CommentCreate>
          {/* /////////////////////////////////////////////////////// */}
          {props.dataForComments?.fetchBoardComments.map((el) => (
            <A.CommentView key={el._id}>
              <A.CommentProfilePhoto></A.CommentProfilePhoto>

              {/* ///댓글 내용 보기 */}
              <A.CommentViewDetails>
                {!props.isEdit && (
                  <A.CommentWriter>{el.writer}</A.CommentWriter>
                )}

                {/* //// 댓글 작성자 수정 인풋 */}

                {/* ////// 수정하기 인풋 및 버튼  */}
                {props.isEdit && (
                  <A.CommentCreate>
                    <A.CommentTop>
                      <A.CommentWriteName
                        type="text"
                        placeholder="작성자"
                        onChange={props.saveCommentWriter}
                        defaultValue={el.writer}
                      ></A.CommentWriteName>
                      <A.CommentWritePassword
                        type="password"
                        placeholder="비밀번호"
                        onChange={props.saveCommentPassword}
                      ></A.CommentWritePassword>
                      <A.Rate>★★★★★</A.Rate>
                    </A.CommentTop>
                    <A.CommentWrite>
                      <A.CommentInput
                        type="text"
                        placeholder="댓글을 입력해주세요"
                        maxLength="100"
                        onChange={props.saveCommentContent}
                        defaultValue={el.contents}
                        // defaultValue={props.commentContent}
                      ></A.CommentInput>
                      <A.CommentBottom>
                        <A.CommentWords>
                          <span>{props.word.length}</span>/100
                        </A.CommentWords>
                        <A.CommentSubmitButton
                          onClick={props.checkCommentSubmitValid}
                        >
                          <span>수정하기</span>
                        </A.CommentSubmitButton>
                      </A.CommentBottom>
                    </A.CommentWrite>{" "}
                  </A.CommentCreate>
                )}

                {!props.isEdit && (
                  <A.CommentViewText>{el.contents}</A.CommentViewText>
                )}

                {!props.isEdit && (
                  <A.CommentViewDate>{el.createdAt}</A.CommentViewDate>
                )}
              </A.CommentViewDetails>
              {/* ///////////////////// */}
              <A.CommentEandD>
                <A.CommentEdit id={el._id} onClick={props.onClickUpdateComment}>
                  수정
                </A.CommentEdit>
                <A.CommentDelete
                  id={el._id}
                  onClick={props.onClickDeleteComment}
                >
                  삭제
                </A.CommentDelete>
              </A.CommentEandD>
            </A.CommentView>
          ))}
        </A.Comments>
      </A.Main>
    </>
  );
}
