import * as A from "./Footer.styles";

export default function FooterUI() {
  return (
    <A.Footer>
      <A.Content>
        {" "}
        주식회사 소이마켓
        <br />
        대표: 정소희 | 개인정보관리책임자: 홍길동 | 전화: 000-1234-5678 |
        이메일: 0203so@naver.com
        <br />
        주소: 서울특별시 00구 0000로 00길 2층 | 사업자등록번호: 123-45-67890
        <br />
        영업 시간: (월~금) 오전 10시~오후7시, (토-일) 휴무
      </A.Content>
    </A.Footer>
  );
}
