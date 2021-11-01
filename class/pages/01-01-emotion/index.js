import { MyDiv, MyInput, Group, Group2 } from "../../styles/emotion";

export default function EmotionPage() {
  // 브라우저로 내보내기

  //자바크스립트 쓰는 곳

  return (
    <>
      <Group>
        <MyDiv>로그인</MyDiv>

        <Group2>
          아이디 <br />
          <MyInput text="text" />
          <br />
          로그인 <br />
          <MyInput type="password" />
          나의이미지 <img src="/images/lotto (1).png" />
        </Group2>
      </Group>
    </>
  );

  // return 괄호안 HTML 쓰는곳
  // JSX (react html)
}
