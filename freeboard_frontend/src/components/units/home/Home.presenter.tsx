import * as A from "./Home.styles";

export default function HomeUI() {
  return (
    <>
      <A.Background>
        <A.Wrapper>
          <A.TextDiv>
            {" "}
            <A.Text>
              {" "}
              환경을 위한 중고거래
              <br />
              소이마켓과 함께하세요.
            </A.Text>
            <A.SubText>지속가능한 소비문화를 만들어요</A.SubText>
            <A.Button>시작하기</A.Button>
          </A.TextDiv>

          <A.Img src={"/images/background2.png"} />
        </A.Wrapper>
      </A.Background>
    </>
  );
}
