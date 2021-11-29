import * as A from "./BoardList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";

export default function BoardListUI(props) {
  return (
    <A.Main>
      <A.BestList>
        {props.dataForBest?.fetchBoardsOfTheBest.map((el) => (
          <>
            <A.BestContent>
              <A.BestPhotos></A.BestPhotos>
              <A.BestTitle id={el._id} onClick={props.onClickView}>
                {el.title.length > 18
                  ? el.title.slice(0, 17) + "..."
                  : el.title}
              </A.BestTitle>
              <A.BestBottom>
                {" "}
                <A.ProfilePhoto>
                  {" "}
                  <Avatar size="small" icon={<UserOutlined />} />
                </A.ProfilePhoto>
                <div>
                  {" "}
                  <A.BestWriter>
                    <A.BestName>{el.writer}</A.BestName>
                    <A.BestDate>{el.createdAt.split("T")[0]}</A.BestDate>
                  </A.BestWriter>
                </div>
              </A.BestBottom>

              <A.BestLikes></A.BestLikes>
            </A.BestContent>
          </>
        ))}
      </A.BestList>
      <A.SearchWrapper>
        <A.SearchInput type="text" onChange={props.onChangeSearch} />
        <A.SearchIcon>
          {" "}
          <FontAwesomeIcon icon={faSearch} color="#0dc56c" />
        </A.SearchIcon>
      </A.SearchWrapper>
      <A.Wrapper>
        {/* //게시글 목록 설명 */}

        <A.Row>
          <A.ColumnTopNumber>☻</A.ColumnTopNumber>
          <A.ColumnTopTitle>제목</A.ColumnTopTitle>
          <A.ColumnTopWriter>작성자</A.ColumnTopWriter>
          <A.ColumnTopDate>날짜</A.ColumnTopDate>
        </A.Row>
        {/* ////////////// */}
        {props.dataForBoards?.fetchBoards.map((el, index) => (
          <A.Row key={el._id}>
            <A.ColumnNumber>
              <A.Num>{index + 1}</A.Num>
            </A.ColumnNumber>
            <A.ColumnTitle id={el._id} onClick={props.onClickView}>
              {el.title.length > 54
                ? `${el.title.slice(0, 52) + "..."}`
                : el.title}
            </A.ColumnTitle>
            <A.ColumnWriter>{el.writer}</A.ColumnWriter>
            <A.ColumnDate>{el.createdAt.split("T")[0]}</A.ColumnDate>
            {/* <A.ColumnDelete>
              {" "}
              <A.DeleteButton id={el._id} onClick={props.onClickDelete}>
                x
              </A.DeleteButton>
            </A.ColumnDelete> */}
          </A.Row>
        ))}
        {/* <A.Pages>
          <A.PrevPage onClick={props.onClickPagePrev}>
            {" "}
            <FontAwesomeIcon icon={faAngleLeft} color="#0dc56c" />
          </A.PrevPage>
          <A.PageNums onClick={props.onClickPage}>
            {" "}
            {new Array(10).fill(1).map(
              (_, index) =>
                props.startPage + index <= props.lastPage && (
                  <A.PageNum
                    key={props.startPage + index}
                    onClick={props.onClickPage}
                    id={String(props.startPage + index)}
                    style={{ margin: "10px", cursor: "pointer" }}
                  >
                    {props.startPage + index}
                  </A.PageNum>
                )
            )}{" "}
          </A.PageNums>
          <A.NextPage onClick={props.onClickPageNext}>
            {" "}
            <span>
              {" "}
              <FontAwesomeIcon icon={faAngleRight} color="#0dc56c" />
            </span>
          </A.NextPage>
        </A.Pages> */}
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          onClickPage={props.onClickPage}
        />
      </A.Wrapper>

      {/* //버튼 */}
      <A.NewButton onClick={props.onClickNew}>
        <div>게시물 작성하기</div>
      </A.NewButton>
    </A.Main>
  );
}
