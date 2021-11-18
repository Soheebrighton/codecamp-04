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

// export default function PaginationBasicPage() {
//   const { data} = useQuery<
//     Pick<IQuery, "fetchBoards">,
//     IQueryFetchBoardsArgs
//   >(FETCH_BOARDS, {
//     variables: { page: 1 },
//   });

//   function onClickRow(event) {
//     console.log(event.target.id);
//   }

//   return (
//     <>
//       {" "}
//       <h1>페이지네이션 연습</h1>
//       {data?.fetchBoards?.map((el) => (
//         <div key={el._id}>
//           <span>{el._id}</span>
//           <span id={el._id} onClick={onClickRow}>
//             {el.title}
//           </span>
//           <span>{el.writer}</span>
//         </div>
//       ))}
//     </>
//   );
// }

import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
    { variables: { page: 1 } }
  );
  function onClickRow(event) {
    // console.log(event.target.id);
    console.log(event.currentTarget.id);
  }
  return (
    <>
      <h1>이벤트 버블링</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id} id={el._id} onClick={onClickRow}>
            <span>{el.title}</span>
            <span> {el.writer}</span>
          </div>
        ))}
      </div>
    </>
  );
}
