import * as A from "./Home.styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function HomeUI() {
  const router = useRouter();
  function onClickMarket() {
    router.push("/market");
  }
  useEffect(() => {
    sessionStorage.setItem("prevPath", "/");
  }, []);
  return (
    <>
      <A.Background>
        <A.Wrapper>
          <A.TextDiv>
            <A.Text>
              환경을 위한 중고거래
              <br />
              소이마켓과 함께하세요.
            </A.Text>
            <A.SubText>지속가능한 소비문화를 만들어요</A.SubText>
            <A.Button onClick={onClickMarket}>시작하기</A.Button>
          </A.TextDiv>

          <A.Img src={"/images/background2.png"} />
        </A.Wrapper>
      </A.Background>
    </>
  );
}
