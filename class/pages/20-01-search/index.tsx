import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String) {
    fetchBoards(search: $search) {
      _id
      writer
      title
    }
  }
`;

export default function SearchPage() {
  const [keyword, SetKeyword] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    SetKeyword(event.target.value);
  }

  function onClickSearch() {
    // keyword 키워드로 fetchBoards 요청하기
    refetch({ search: keyword });
  }
  return (
    <>
      <h1>검색페이지</h1>
      search: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>search</button>
      {data?.fetchBoards.map((el) => (
        <>
          <div key={el._id}>
            <span style={{ paddingRight: "50px" }}>{el.writer}</span>
            <span style={{ paddingRight: "50px" }}>{el.title}</span>
            <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
          </div>
        </>
      ))}
    </>
  );
}
