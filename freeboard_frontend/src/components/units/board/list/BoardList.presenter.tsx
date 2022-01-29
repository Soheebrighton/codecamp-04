import * as A from "./BoardList.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import { IPropsBoardListUI } from "./BoardList.types";
import { getDate } from "../../../../commons/libraries/utils";

export default function BoardListUI(props: IPropsBoardListUI) {
  return (
    <A.Main>
      <A.BestList>
        {props.dataForBest?.fetchBoardsOfTheBest.map((el) => (
          <>
            <A.BestContent>
              <A.BestPhotos>
                {el.images ? (
                  <A.BestImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={props.onErrorBestImg}
                  />
                ) : (
                  <div />
                )}
              </A.BestPhotos>
              <A.BestTitle id={el._id} onClick={props.onClickView}>
                {el.title.length > 18
                  ? el.title.slice(0, 17) + "..."
                  : el.title}
              </A.BestTitle>
              <A.BestBottom>
                <A.ProfilePhoto>
                  <Avatar size="small" icon={<UserOutlined />} />
                </A.ProfilePhoto>
                <div>
                  <A.BestWriter>
                    <A.BestName>{el.writer}</A.BestName>
                    <A.BestDate>{getDate(el.createdAt)}</A.BestDate>
                  </A.BestWriter>
                </div>
              </A.BestBottom>
            </A.BestContent>
          </>
        ))}
      </A.BestList>
      <A.SearchWrapper>
        <A.SearchInput type="text" onChange={props.onChangeSearch} />
        <A.SearchIcon>
          <FontAwesomeIcon icon={faSearch} color="#0dc56c" />
        </A.SearchIcon>
      </A.SearchWrapper>
      <A.Wrapper>
        <A.Row>
          <A.ColumnTopNumber>☻</A.ColumnTopNumber>
          <A.ColumnTopTitle>제목</A.ColumnTopTitle>
          <A.ColumnTopWriter>작성자</A.ColumnTopWriter>
          <A.ColumnTopDate>날짜</A.ColumnTopDate>
        </A.Row>
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
            <A.ColumnDate>{getDate(el.createdAt)}</A.ColumnDate>
          </A.Row>
        ))}
        <Paginations01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          onClickPage={props.onClickPage}
        />
      </A.Wrapper>
      <A.NewButton onClick={props.onClickNew}>게시물 작성하기</A.NewButton>
    </A.Main>
  );
}
