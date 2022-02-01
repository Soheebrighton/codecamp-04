import Head from "next/head";
import * as A from "./MypageSide.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IPropsMypageSideUI } from "./MypageSide.types";

export default function MypageSideUI(props: IPropsMypageSideUI) {
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
      <A.Profile>
        <A.MyPhoto>
          <Avatar size={64} icon={<UserOutlined />} />
        </A.MyPhoto>
        <A.MyName>{props.data?.fetchUserLoggedIn.name}</A.MyName>
        <A.EditProfile onClick={props.onClickEditUser}>
          회원정보 수정
        </A.EditProfile>
        <A.PointSelect
          id="amount-select"
          onChange={props.onClickSelectPoint}
          value={props.selectedPoint}
        >
          <A.PointOption value="">-충전금액을 선택해주세요-</A.PointOption>

          {props.selectList.map((el) => (
            <A.PointOption key={el} value={el}>
              {Number(el).toLocaleString()} 포인트
            </A.PointOption>
          ))}
        </A.PointSelect>
        <A.PointTopUpBtn onClick={props.onClickCreatePoint}>
          충전하기
        </A.PointTopUpBtn>
        <A.Pages>
          <A.PointBtn
            onClick={props.onClickPoint}
            currentPage={props.currentPage}
          >
            나의 포인트
          </A.PointBtn>
          <A.PickedBtn
            onClick={props.onClickPicked}
            currentPage={props.currentPage}
          >
            찜한 상품
          </A.PickedBtn>
          <A.BoughtBtn
            onClick={props.onClickBought}
            currentPage={props.currentPage}
          >
            구매한 상품
          </A.BoughtBtn>
        </A.Pages>
      </A.Profile>
    </>
  );
}
