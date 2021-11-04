import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation 

    createBoard(
        $writer: String,
        $title: String,
        $contents: String
      ){
    createBoard(
      $writer: "정소희",
      $title: "오늘의 퀴즈",
      $contents: "오늘은 graphql 연습을 합니다."
    ) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationBoard2Page() {
  const [aaa, setAaa] = useState("안녕하세요");
  const [createBoard] = useMutation(CREATE_BOARD);

  async function zzz() {
    const result = await createBoard({
      variables: { writer: "영희", title: "제목이요", contents: "내용이요" },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
    setAaa(result.data.createBoard.message);
    // 실행 요청 들어감
  }
  return (
    <>
      <div>{aaa}</div>
      <button onClick={zzz}>GRAPHQL-API 요청하기</button>
    </>
  );
}
