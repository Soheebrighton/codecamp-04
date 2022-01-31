import Head from "next/head";
import * as A from "./MypagePoint.styles";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IPropsMypagePointUI } from "./MypagePoint.types";
import { getDate } from "../../../../commons/libraries/utils";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            {/* <label htmlFor="amount-select">충전 포인트:</label> */}
            <A.PointSelect
              id="amount-select"
              onChange={props.onClickSelectPoint}
              value={props.SelectedPoint}
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
          </A.Profile>
          <A.WrapperRight>
            <A.PointCurrentWrapper>
              <A.MyPointWrapper>
                <A.MyPointDetail>
                  <div>사용가능한 포인트</div>
                  <A.MyPointCurrent>
                    <FontAwesomeIcon
                      icon={faCoins}
                      color="#1dbc67"
                      style={{ marginRight: "5px", fontSize: "25px" }}
                    />
                    {props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}
                  </A.MyPointCurrent>
                </A.MyPointDetail>
              </A.MyPointWrapper>
            </A.PointCurrentWrapper>
            <A.PointQueryWrapper>
              <A.TransTitle>포인트 이용내역</A.TransTitle>
              <A.TransDisplay>
                <A.DisplayBtn>전체내역</A.DisplayBtn>
                <A.Bar />
                <A.DisplayBtn>충전내역</A.DisplayBtn>
                <A.Bar />
                <A.DisplayBtn>구매내역</A.DisplayBtn>
              </A.TransDisplay>
              <A.RowHeader>
                <A.CreatedAt>
                  <A.RowHeaderTxt>날짜</A.RowHeaderTxt>
                </A.CreatedAt>
                <A.Status>
                  <A.RowHeaderTxt>내용</A.RowHeaderTxt>
                </A.Status>
                <A.Amount>
                  <A.RowHeaderTxt>거래 및 충전 내역</A.RowHeaderTxt>
                </A.Amount>
                <A.Balance>
                  <A.RowHeaderTxt>잔액</A.RowHeaderTxt>
                </A.Balance>
              </A.RowHeader>
              {props.dataForPoint?.fetchPointTransactions.map((el) => (
                <A.Row key={el}>
                  <A.CreatedAt>{getDate(el.createdAt)}</A.CreatedAt>
                  <A.Status status={el.status}>{el.status}</A.Status>
                  <A.Amount>
                    {el.status === "충전"
                      ? "+" + el.amount.toLocaleString()
                      : el.amount.toLocaleString()}
                  </A.Amount>
                  <A.Balance>{el.balance.toLocaleString()}</A.Balance>
                </A.Row>
              ))}
            </A.PointQueryWrapper>
          </A.WrapperRight>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
