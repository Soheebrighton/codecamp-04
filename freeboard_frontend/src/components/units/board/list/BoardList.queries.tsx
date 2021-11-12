import { gql } from "@apollo/client";
export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      createdAt
      likeCount
    }
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

////// 개별 보드 게시물 ////

export const FETCH_BOARD = gql`
  query fetchBoard {
    fetchBoard {
      _id
      writer
      title
    }
  }
`;
