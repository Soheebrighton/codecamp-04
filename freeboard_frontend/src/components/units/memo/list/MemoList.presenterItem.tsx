import { convertLegacyProps } from "antd/lib/button/button";
import * as A from "./MemoList.styles";

export default function MemoListUIItem(props) {
  return (
    <A.Wrapper>
      <button onClick={props.onClickFetch}>보여주기</button>
      <A.Boxes>
        {props.query3?.map((el, index) => (
          <>
            <A.MemoBox key={props.ids[index]}>
              {!props.isEdit && (
                <>
                  {" "}
                  <A.Title>{el.title}</A.Title>
                  <A.Contents>{el.contents}</A.Contents>
                  <A.DeleteBtn
                    onClick={props.onClickDelete}
                    id={props.ids[index]}
                  >
                    삭제하기
                  </A.DeleteBtn>
                  <A.EditBtn onClick={props.onClickEdit}>수정하기</A.EditBtn>
                </>
              )}

              {props.isEdit && <div>수정하기~~~</div>}
            </A.MemoBox>
          </>
        ))}
      </A.Boxes>{" "}
    </A.Wrapper>
  );
}

// import { convertLegacyProps } from "antd/lib/button/button";
// import * as A from "./MemoList.styles";

// export default function MemoListUIItem(props) {
//   return (
//     <A.Wrapper>
//       <button onClick={props.onClickFetch}>보여주기</button>
//       <A.Boxes>
//         <>
//           <A.MemoBox>
//             {!props.isEdit && (
//               <>
//                 {" "}
//                 <A.Title>{props.el.title}</A.Title>
//                 <A.Contents>{props.el.contents}</A.Contents>
//                 {/* <A.DeleteBtn
//                     onClick={props.onClickDelete}
//                     id={props.ids[index]}
//                   >
//                     삭제하기
//                   </A.DeleteBtn> */}
//                 <A.EditBtn onClick={props.onClickEdit}>수정하기</A.EditBtn>
//               </>
//             )}

//             {props.isEdit && <div>수정하기~~~</div>}
//           </A.MemoBox>
//         </>
//       </A.Boxes>{" "}
//     </A.Wrapper>
//   );
// }
