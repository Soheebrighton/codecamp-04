// import * as A from "../../../styles/view";

// //////

// import { useRouter } from "next/router";
// import { useQuery, gql } from "@apollo/client";

// import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const FETCH_BOARD = gql`
//   query fetchBoard($boardId: ID!) {
//     fetchBoard(boardId: $boardId) {
//       writer
//       title
//       contents
//       createdAt
//       likeCount
//     }
//   }
// `;

// //값으로 들어옴 createdAt

// export default function ViewPage() {
//   const router = useRouter();
//   const { data } = useQuery(FETCH_BOARD, {
//     variables: { boardId: router.query.myId },
//   });
//   const date = data?.fetchBoard.createdAt.split("T")[0];
//   // const date = data?.fetchBoard.createdAt.split("");
//   // const newDate = date.splice(0, 10).join("");

//   //splice, slice적용할 경우엔 값을 일일히 가져오면서 런타임 에러

//   function onClickLike() {
//     // let likeNum = data?.fetchBoard.likeCount;
//     // likeNum = +1;
//     // console.log({ likeNum });
//     console.log("likes!");
//   }
//   return (
//     <>
//       <A.Main>
//         <A.Wrapper>
//           <A.Date>{date}</A.Date>{" "}
//           {/* <div>
//             {" "}
//             <FontAwesomeIcon icon={faLink} color="#c8c2fc" />
//           </div>
//           <div>
//             {" "}
//             <FontAwesomeIcon icon={faMapMarkerAlt} color="#c8c2fc" />
//           </div> */}
//           <A.Writer>
//             <A.Mutation>
//               <A.Modify>수정</A.Modify>
//               <A.Delete>삭제</A.Delete>
//             </A.Mutation>
//             <A.Profile>
//               {" "}
//               <A.Name>{data?.fetchBoard.writer}</A.Name>{" "}
//               {/* <FontAwesomeIcon icon={faLink} color="#c8c2fc" /> */}
//               <A.ProfilePhoto>
//                 <img
//                   src="/images/icon_noprofile.png"
//                   width="35px"
//                   height="35px"
//                 />
//               </A.ProfilePhoto>
//             </A.Profile>
//           </A.Writer>
//           <A.Title>{data?.fetchBoard.title}</A.Title>
//           <A.SmallBar></A.SmallBar>
//           <A.Content>
//             <p> {data?.fetchBoard.contents}</p>
//           </A.Content>
//           <A.Likes>
//             <A.Like>
//               <div>
//                 <FontAwesomeIcon
//                   icon={faThumbsUp}
//                   color="#c8c2fc"
//                   onClick={onClickLike}
//                 />
//               </div>
//               <A.LikesText>{data?.fetchBoard.likeCount}</A.LikesText>
//             </A.Like>
//             {/* <Dislike>
//               <div>
//                 {" "}
//                 <FontAwesomeIcon icon={faThumbsDown} color="#c8c2fc" />
//               </div>
//               <LikesText>123</LikesText>
//             </Dislike> */}
//           </A.Likes>
//         </A.Wrapper>
//       </A.Main>
//     </>
//   );
// }

import BoardView from "../../../src/components/units/board/view/BoardView.container";

export default function ViewPage() {
  return <BoardView></BoardView>;
}
