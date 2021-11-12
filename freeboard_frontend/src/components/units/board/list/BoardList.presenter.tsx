import * as A from "../../../../../styles/list";

export default function BoardListUI(props) {
  return (
    <A.Main>
      <A.BestList>
        {props.dataForBest?.fetchBoardsOfTheBest.map((el) => (
          <A.BestContent>
            <A.BestTitle id={el._id} onClick={props.onClickView}>
              {el.title}
            </A.BestTitle>
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
          <A.ColumnCheckbox>
            <input type="checkbox" />
          </A.ColumnCheckbox>
          <A.ColumnNumber>번호</A.ColumnNumber>
          <A.ColumnTitle>제목</A.ColumnTitle>
          <A.ColumnWriter>작성자</A.ColumnWriter>
          <A.ColumnDate>날짜</A.ColumnDate>
          <A.ColumnDelete></A.ColumnDelete>
        </A.Row>
        {/* ////////////// */}
        {props.dataForBoards?.fetchBoards.map((el, index) => (
          <A.Row key={el._id}>
            <A.ColumnCheckbox>
              <input type="checkbox" />
            </A.ColumnCheckbox>
            <A.ColumnNumber>{index + 1}</A.ColumnNumber>
            <A.ColumnTitle id={el._id} onClick={props.onClickView}>
              {el.title}
            </A.ColumnTitle>
            <A.ColumnWriter>{el.writer}</A.ColumnWriter>
            <A.ColumnDate>{el.createdAt.split("T")[0]}</A.ColumnDate>
            <A.ColumnDelete>
              {" "}
              <A.DeleteButton id={el._id} onClick={props.onClickDelete}>
                x
              </A.DeleteButton>
            </A.ColumnDelete>
          </A.Row>
        ))}
      </A.Wrapper>

      {/* //버튼 */}
      <A.NewButton onClick={props.onClickNew}>
        <div>게시물 작성하기</div>
      </A.NewButton>
    </A.Main>
  );
}
