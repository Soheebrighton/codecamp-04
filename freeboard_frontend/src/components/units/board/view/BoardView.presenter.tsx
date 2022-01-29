import * as A from "./BoardView.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";
import { IPropsBoardViewUI } from "./BoardView.types";
import { getDate } from "../../../../commons/libraries/utils";

const MyYoutube = styled(ReactPlayer)``;

export default function BoardViewUI(props: IPropsBoardViewUI) {
  return (
    <>
      <A.Main>
        <A.Wrapper>
          <A.Date>{getDate(props.data?.fetchBoard.createdAt)}</A.Date>
          <A.Writer>
            <A.Mutation>
              <A.Modify onClick={props.onClickEdit}>수정</A.Modify>
              <A.Delete onClick={props.onClickDelete}>삭제</A.Delete>
            </A.Mutation>
            <A.Profile>
              <A.Name>{props.data?.fetchBoard.writer}</A.Name>
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
            {props.data?.fetchBoard.contents}
            <A.ImageWrapper>
              {!props.data?.fetchBoard.images && <A.Image />}
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <A.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                    onError={props.onErrorImage}
                  />
                ))}
            </A.ImageWrapper>
            <MyYoutube url={String(props.data?.fetchBoard.youtubeUrl)} />
          </A.Content>
          <A.Likes>
            <A.Like onClick={props.onClickLike}>
              <div>
                <FontAwesomeIcon icon={faLeaf} color="#1dbc67" />
              </div>
              <A.LikesText>{props.data?.fetchBoard.likeCount}</A.LikesText>
            </A.Like>
          </A.Likes>
        </A.Wrapper>
        <A.ListButton onClick={props.onClickList}>목록으로</A.ListButton>
      </A.Main>
    </>
  );
}
