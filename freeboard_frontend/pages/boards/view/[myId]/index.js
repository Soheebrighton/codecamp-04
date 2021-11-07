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
} from "../../../../styles/view";

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
    }
  }
`;

export default function ViewPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  return (
    <>
      <Main>
        <Wrapper>
          <Date>{data?.fetchBoard.createdAt}</Date>{" "}
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
                <FontAwesomeIcon icon={faThumbsUp} color="#c8c2fc" />
              </div>
              <LikesText>57</LikesText>
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
