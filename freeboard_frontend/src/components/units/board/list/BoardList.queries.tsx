import { gql } from "@apollo/client";
export const FETCH_BOARDS = gql`
  query fetchboards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
      likeCount
    }
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
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

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

/// 페이지네이션 ///
export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
