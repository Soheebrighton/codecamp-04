// import * as A from "../../../styles/list";
// import { gql, useMutation, useQuery } from "@apollo/client";

// const FETCH_BOARDS = gql`
//   query {
//     fetchBoards {
//       _id
//       writer
//       title
//       createdAt
//     }
//   }
// `;

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `;

// export default function BoardList() {
//   const { data } = useQuery(FETCH_BOARDS);
//   const [deleteBoard] = useMutation(DELETE_BOARD);

//   async function onClickDelete(event) {
//     try {
//       await deleteBoard({
//         variables: { boardId: event.target.id },
//         refetchQueries: [{ query: FETCH_BOARDS }],
//       });
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   return (
//     <A.Main>
//       <A.Wrapper>
//         {/* //게시글 목록 설명 */}

//         <A.Row>
//           <A.ColumnCheckbox>체크박스</A.ColumnCheckbox>
//           <A.ColumnNumber>번호</A.ColumnNumber>
//           <A.ColumnTitle>제목</A.ColumnTitle>
//           <A.Column>작성자</A.Column>
//           <A.Column>날짜</A.Column>
//           <A.Column>삭제버튼</A.Column>
//         </A.Row>
//         {/* ////////////// */}
//         {data?.fetchBoards.map((el, index) => (
//           <A.Row key={el._id}>
//             <A.ColumnCheckbox>
//               <input type="checkbox" />
//             </A.ColumnCheckbox>
//             <A.ColumnNumber>{index + 1}</A.ColumnNumber>
//             <A.ColumnTitle>{el.title}</A.ColumnTitle>
//             <A.Column>{el.writer}</A.Column>
//             <A.Column>{el.createdAt}</A.Column>
//             <A.DeleteButton id={el._id} onClick={onClickDelete}>
//               삭제하기
//             </A.DeleteButton>
//           </A.Row>
//         ))}
//       </A.Wrapper>
//     </A.Main>
//   );
// }

import BoardList from "../../../src/components/units/board/list/BoardList.container";

export default function ListPage() {
  return <BoardList></BoardList>;
}
