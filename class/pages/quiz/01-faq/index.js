import { MyInput } from "../../../styles/emotion";
import {
  Div,
  Search,
  MyInfo,
  SearchInput,
  SearchIcon,
  Nav,
  NavSpan,
  SelectedNav,
  NavBottom,
  FaQDiv,
  FaQTitleSpan,
  FaQButtonSpan,
  QNum,
  QTitle,
  NavBottomSpan,
  MyInfoTitle,
  MyInfoProfile,
  MyPhoto,
  ArrowRight,
  MyName,
  SelectedNavBottom,
} from "../../../styles/faq";

export default function EmotionPage() {
  // 브라우저로 내보내기

  //자바크스립트 쓰는 곳

  return (
    <>
      <Div>
        <Search>
          <SearchInput type="text" placeholder=""></SearchInput>
          <SearchIcon>
            <img src="/images/ic-58-main-search-black.png" />
          </SearchIcon>
        </Search>

        <MyInfo>
          <MyInfoTitle>마이</MyInfoTitle>
          <MyInfoProfile>
            <MyPhoto>
              <img src="/images/img-60-profile-image.png" />
            </MyPhoto>
            <MyName>임정아</MyName>
            <ArrowRight>
              <img src="/images/ic-28-arrow.png" />
            </ArrowRight>
          </MyInfoProfile>
        </MyInfo>
        <Nav>
          <NavSpan>공지사항</NavSpan>
          <NavSpan>이벤트</NavSpan>
          <SelectedNav>FAQ</SelectedNav>
          <NavSpan>Q&A</NavSpan>
        </Nav>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 01</QNum>
            <QTitle>리뷰 작성은 어떻게 하나요?</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 02</QNum>
            <QTitle>리뷰 수정/삭제는 어떻게 하나요?</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 02</QNum>
            <QTitle>아이디/비밀번호를 잃어버렸어요.</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 02</QNum>
            <QTitle>회원탈퇴를 하고싶어요.</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 02</QNum>
            <QTitle>출발지 설정은 어떻게 하나요?</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <FaQDiv>
          <FaQTitleSpan>
            <QNum>Q. 02</QNum>
            <QTitle>비밀번호를 변경하고 싶어요.</QTitle>
          </FaQTitleSpan>
          <FaQButtonSpan>
            {" "}
            <img src="/images/ic-70-arrow-right.png" />
          </FaQButtonSpan>
        </FaQDiv>

        <NavBottom>
          <NavBottomSpan>
            <img src="/images/ic-58-main-home-unselected.png" />홈
          </NavBottomSpan>
          <NavBottomSpan>
            {" "}
            <img src="/images/ic-58-main-location-unselected.png" />
            잇츠로드
          </NavBottomSpan>
          <NavBottomSpan>
            {" "}
            <img src="/images/ic-58-main-like-unselected.png" />
            마이찜
          </NavBottomSpan>
          <NavBottomSpan>
            {" "}
            <img src="/images/ic-58-main-my-selected.png" />
            <SelectedNavBottom>마이</SelectedNavBottom>
          </NavBottomSpan>
        </NavBottom>
      </Div>
    </>
  );

  // return 괄호안 HTML 쓰는곳
  // JSX (react html)
}
