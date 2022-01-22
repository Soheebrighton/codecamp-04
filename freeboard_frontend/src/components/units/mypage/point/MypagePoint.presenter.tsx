import Head from "next/head";
import * as A from "./MypagePoint.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IPropsMypagePointUI } from "./MypagePoint.types";

export default function MypagePointUI(props: IPropsMypagePointUI) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <A.Background>
        <A.Wrapper>
          <A.Profile>
            <A.MyPhoto>
              <Avatar size={64} icon={<UserOutlined />} />
            </A.MyPhoto>
            <A.MyName>{props.data?.fetchUserLoggedIn.name}</A.MyName>
            <A.EditProfile onClick={props.onClickEditUser}>
              회원정보 수정
            </A.EditProfile>
          </A.Profile>
          <A.MyPointWrapper>
            <A.MyPointDetail>
              <div>사용가능한 포인트</div>
              <A.MyPointCurrent>
                {props.data?.fetchUserLoggedIn.userPoint.amount}
              </A.MyPointCurrent>
            </A.MyPointDetail>
          </A.MyPointWrapper>
        </A.Wrapper>
      </A.Background>

      <label htmlFor="amount-select">충전 포인트:</label>

      <select
        id="amount-select"
        onChange={props.onClickSelectPoint}
        value={props.SelectedPoint}
      >
        <option value="">--충전할 금액을 선택해주세요--</option>

        {props.selectList.map((el) => (
          <option key={el} value={el}>
            {el}포인트
          </option>
        ))}
      </select>

      <button onClick={props.onClickCreatePoint}>충전하기</button>
    </>
  );
}
