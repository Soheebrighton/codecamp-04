import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => () => {
    deleteBoard({
      variables: {
        boardId,
      },

      update(cache, { data }) {
        const deletedId = data.deleteBoard; // deleted boardID (check playground)

        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // 1. to make 9lists without a deleted ID from 10 lists
              // 2. to return new 9 fetchboards data
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...newFetchBoards];
              // refetch 9 undeleted lists
              // return modified data - fetchBoards
            },
          },
        });
      },
    });
  };

  function onClickSubmit() {
    // submit
    createBoard({
      variables: {
        createBoardInput: {
          writer: "alice",
          password: "123",
          title: "hello",
          contents: "how are you",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            // added createdBoard result with previous 10lists
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  }

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>delete</button>
        </div>
      ))}

      <button onClick={onClickSubmit}>submit</button>
    </>
  );
}
