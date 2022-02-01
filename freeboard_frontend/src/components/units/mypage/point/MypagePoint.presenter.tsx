import Head from "next/head";
import * as A from "./MypagePoint.styles";
import { IPropsMypagePointUI } from "./MypagePoint.types";
import { getDate } from "../../../../commons/libraries/utils";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MypageOrders from "./list/orders";
import MypageTopUp from "./list/topup";
import MypageSelling from "./list/selling";
import MypageSide from "../side/MypageSide.container";
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
          <MypageSide />
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
                <A.DisplayBtn
                  isAllTrans={props.isAllTrans}
                  onClick={props.onClickAllTrans}
                >
                  전체내역
                </A.DisplayBtn>
                <A.Bar />
                <A.DisplayTopUpBtn
                  isTopUp={props.isTopUp}
                  onClick={props.onClickTopUp}
                >
                  충전내역
                </A.DisplayTopUpBtn>
                <A.Bar />
                <A.DisplayOrdersBtn
                  isOrders={props.isOrders}
                  onClick={props.onClickOrders}
                >
                  구매내역
                </A.DisplayOrdersBtn>
                <A.Bar />
                <A.DisplaySellingBtn
                  isSelling={props.isSelling}
                  onClick={props.onClickSelling}
                >
                  판매내역
                </A.DisplaySellingBtn>
              </A.TransDisplay>
              {props.isOrders && <MypageOrders />}
              {props.isTopUp && <MypageTopUp />}
              {props.isSelling && <MypageSelling />}
              {props.isAllTrans && (
                <>
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
                  {props.dataForPoint?.fetchPointTransactions.length === 0 && (
                    <A.NoTrans>아직 이용내역이 없습니다.</A.NoTrans>
                  )}
                </>
              )}
            </A.PointQueryWrapper>
          </A.WrapperRight>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
