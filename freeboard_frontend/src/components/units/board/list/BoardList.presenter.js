import * as A from "../../../../../styles/list";

export default function BoardListUI(props) {
  return (
    <A.Main>
      <A.BestList>
        {props.dataForBest?.fetchBoardsOfTheBest.map((el) => (
          <A.BestContent>
            <A.BestTitle>{el.title}</A.BestTitle>
            <A.BestWriter>
              <A.BestName>{el.writer}</A.BestName>
              <A.BestDate>{el.createdAt}</A.BestDate>
            </A.BestWriter>
            <A.BestLikes></A.BestLikes>
          </A.BestContent>
        ))}
      </A.BestList>
      <A.Wrapper>
        {/* //게시글 목록 설명 */}

        <A.Row>
          <A.ColumnCheckbox>체크박스</A.ColumnCheckbox>
          <A.ColumnNumber>번호</A.ColumnNumber>
          <A.ColumnTitle>제목</A.ColumnTitle>
          <A.Column>작성자</A.Column>
          <A.Column>날짜</A.Column>
          <A.Column>삭제버튼</A.Column>
        </A.Row>
        {/* ////////////// */}
        {props.dataForBoards?.fetchBoards.map((el, index) => (
          <A.Row key={el._id}>
            <A.ColumnCheckbox>
              <input type="checkbox" />
            </A.ColumnCheckbox>
            <A.ColumnNumber>{index + 1}</A.ColumnNumber>
            <A.ColumnTitle>{el.title}</A.ColumnTitle>
            <A.Column>{el.writer}</A.Column>
            <A.Column>{el.createdAt}</A.Column>
            <A.DeleteButton id={el._id} onClick={props.onClickDelete}>
              삭제하기
            </A.DeleteButton>
          </A.Row>
        ))}
      </A.Wrapper>
    </A.Main>
  );
}
