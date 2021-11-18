// import { gql, useQuery } from "@apollo/client";
// import {
//   IQuery,
//   IQueryFetchBoardsArgs,
// } from "../../src/commons/types/generated/types";

// const FETCH_BOARDS = gql`
//   query fetchboards($page: Int) {
//     fetchboards(page: $page) {
//       _id
//       writer
//       title
//     }
//   }
// `;

// const FETCH_BOARDS_COUNT = gql`
//   query fetchBoardsCount {
//     fetchBoardsCount
//   }
// `;

// const { data: dataForBoardsCount } =
//   useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
// const lastPage = dataForBoardsCount
//   ? Math.ceil(dataForBoardsCount?.fetchBoardsCount / 10)
//   : 0;

// export default function PaginationBasicPage() {
//   const [startPage, setStartPage] = useState(1);

//   const { data: dataForFetchBoards, refetch } = useQuery<
//     Pick<IQuery, "fetchBoards">,
//     IQueryFetchBoardsArgs
//   >(FETCH_BOARDS, {
//     variables: { page: startPage },
//   });

//   function onClickPage(event: MouseEvent<HTMLSpanElement>) {
//     if (event.target instanceof Element)
//       refetch({ page: Number(event.target.id) });
//   }

//   function onClickPrevPage() {
//     if (startPage <= 1) return;
//     setStartPage((prev) => prev - 10);
//   }

//   function onClickNextPage() {
//     if (startPage + 10 > lastPage) return;
//     // 11페이지
//     setStartPage((prev) => prev + 10);
//   }

//   return (
//     <>
//       {" "}
//       <h1>페이지네이션 연습</h1>
//       <div>
//         {data?.fetchBoards.map((el) => (
//           <div key={el._id}>
//             {el.title} {el.writer}
//           </div>
//         ))}
//       </div>
//       <span onClick={onClickPrevPage}>이전페이지</span>
//       {new Array(10).fill(1).map(
//         (_, index) =>
//           startPage + index <= lastPage && (
//             <span
//               key={startPage + index}
//               onClick={onClickPage}
//               id={String(startPage + index)}
//               style={{ margin: "10px", cursor: "pointer" }}
//             >
//               {startPage + index}
//             </span>
//           )
//       )}
//       <span onClick={onClickNextPage}>다음페이지</span>
//       {/* <span onClick={onClickPage} id="1">
//         {" "}
//         1{" "}
//       </span>
//       <span onClick={onClickPage} id="2">
//         {" "}
//         2{" "}
//       </span>
//       <span onClick={onClickPage} id="3">
//         {" "}
//         3{" "}
//       </span>
//       <span onClick={onClickPage} id="4">
//         {" "}
//         4{" "}
//       </span>
//       <span onClick={onClickPage} id="5">
//         {" "}
//         5{" "}
//       </span>
//       <span onClick={onClickPage} id="6">
//         {" "}
//         6{" "}
//       </span>
//       <span onClick={onClickPage} id="7">
//         {" "}
//         7{" "}
//       </span>
//       <span onClick={onClickPage} id="8">
//         {" "}
//         8{" "}
//       </span>
//       <span onClick={onClickPage} id="9">
//         {" "}
//         9{" "}
//       </span>
//       <span onClick={onClickPage} id="10">
//         {" "}
//         10{" "}
//       </span> */}
//     </>
//   );
// }

import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
export default function PaginationBasicPage() {
  const [startPage, setStartPage] = useState(51);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }
  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }
  return (
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title} {el.writer}
          </div>
        ))}
      </div>
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {/* [1,1,1,1,1,1,1,1] new Array 는 빈 array 을 만듦  */}
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={startPage + index}
          onClick={onClickPage}
          id={String(startPage + index)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {startPage + index}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음 페이지</span>
      {/* <span onClick={onClickPage} id="1"> 1 </span>
      <span onClick={onClickPage} id="2"> 2 </span>
      <span onClick={onClickPage} id="3"> 3 </span>
      <span onClick={onClickPage} id="4"> 4 </span>
      <span onClick={onClickPage} id="5"> 5 </span>
      <span onClick={onClickPage} id="6"> 6 </span>
      <span onClick={onClickPage} id="7"> 7 </span>
      <span onClick={onClickPage} id="8"> 8 </span>
      <span onClick={onClickPage} id="9"> 9 </span>
      <span onClick={onClickPage} id="10"> 10 </span> */}
    </>
  );
}
