import {
  Main,
  Title,
  Wrapper,
  Writer,
  Name,
  Date,
  ProfilePhoto,
  Content,
  Likes,
  Like,
  Dislike,
  LikesText,
  SmallBar,
} from "../../../styles/view";

//////

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      likeCount
    }
  }
`;

//값으로 들어옴 createdAt

export default function ViewPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  const date = data?.fetchBoard.createdAt.split("T")[0];
  // const date = data?.fetchBoard.createdAt.split("");
  // const newDate = date.splice(0, 10).join("");

  //splice, slice적용할 경우엔 값을 일일히 가져오면서 런타임 에러

  function onClickLike() {
    // let likeNum = data?.fetchBoard.likeCount;
    // likeNum = +1;
    // console.log({ likeNum });
    console.log("likes!");
  }
  return (
    <>
      <Main>
        <Wrapper>
          <Date>{date}</Date>{" "}
          {/* <div>
            {" "}
            <FontAwesomeIcon icon={faLink} color="#c8c2fc" />
          </div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faMapMarkerAlt} color="#c8c2fc" />
          </div> */}
          <Writer>
            <Name>{data?.fetchBoard.writer}</Name>

            {/* <FontAwesomeIcon icon={faLink} color="#c8c2fc" /> */}
            <ProfilePhoto>
              <img
                src="/images/icon_noprofile.png"
                width="35px"
                height="35px"
              />
            </ProfilePhoto>
          </Writer>
          <Title>{data?.fetchBoard.title}</Title>
          <SmallBar></SmallBar>
          <Content>
            <p> {data?.fetchBoard.contents}</p>
          </Content>
          <Likes>
            <Like>
              <div>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  color="#c8c2fc"
                  onClick={onClickLike}
                />
              </div>
              <LikesText>{data?.fetchBoard.likeCount}</LikesText>
            </Like>
            {/* <Dislike>
              <div>
                {" "}
                <FontAwesomeIcon icon={faThumbsDown} color="#c8c2fc" />
              </div>
              <LikesText>123</LikesText>
            </Dislike> */}
          </Likes>
        </Wrapper>
      </Main>
    </>
  );
}
