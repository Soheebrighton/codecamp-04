import * as A from "./MemoList.styles";

export default function MemoListUI(props) {
  return (
    <A.Wrapper>
      <button onClick={props.onClickFetch}>보여주기</button>
      <A.Boxes>
        {props.query3?.map((el, index) => (
          <>
            <A.MemoBox key={props.ids[index]}>
              {" "}
              <A.Title>{el.title}</A.Title>
              <A.Contents>{el.contents}</A.Contents>
              <A.DeleteBtn onClick={props.onClickDelete} id={props.ids[index]}>
                삭제하기
              </A.DeleteBtn>
            </A.MemoBox>
          </>
        ))}
      </A.Boxes>{" "}
    </A.Wrapper>
  );
}
