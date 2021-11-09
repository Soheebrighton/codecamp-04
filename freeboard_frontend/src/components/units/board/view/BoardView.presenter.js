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
              <A.Modify>수정</A.Modify>
              <A.Delete
                id={props.data?.fetchBoard._id}
                onClick={props.onClickDelete}
              >
                삭제
              </A.Delete>
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
            <A.Like>
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  color="#c8c2fc"
                  onClick={props.onClickLike}
                />
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
      </A.Main>
    </>
  );
}
