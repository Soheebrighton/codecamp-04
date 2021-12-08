import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQueryFetchBoardArgs,
  IQuery,
} from "../../../src/commons/types/generated/types";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      writer
      contents
    }
  }
`;
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.id),
      },
    }
  );

  return (
    <>
      {/* 서버에서 한번그리고 브라우저에서 한번 그릴때 발생하는 이슈 해결 */}
      {/* 갯수 맞추기 */}

      <div style={{ color: "red" }}>writer {data?.fetchBoard.writer}</div>
      {/* {process.browser ? (
        <div style={{ color: "green" }}>title {data?.fetchBoard.title}</div>
      ) : (
        <div style={{ color: "green" }}></div>
      )} */}
      <div style={{ color: "blue" }}>contents hello</div>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      ) : (
        <div />
      )}
    </>
  );
}
