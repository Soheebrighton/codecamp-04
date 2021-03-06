import MypagePointUI from "./MypagePoint.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_POINT_TRANSACTIONS,
} from "./MypagePoint.queries";

export default function MypagePoint() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { data: dataForPoint } = useQuery(FETCH_POINT_TRANSACTIONS);

  const selectList = ["1000", "5000", "10000", "20000", "50000"];

  const [selectedPoint, setSelectedPoint] = useState<string>("");

  function onClickSelectPoint(event: any) {
    setSelectedPoint(event.target.value);
  }

  function onClickCreatePoint() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: `${selectedPoint} 소이포인트`,
        amount: selectedPoint,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후 리다이렉트될 주소!
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // to run createPointTransactionsOfLoading Mutation (to pass impuUid as an argument)
          // paid date, cancelled time
          // the date should be from Back-end side (especially to generate today's date)

          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
              refetchQueries: [
                {
                  query: FETCH_USER_LOGGED_IN,
                },
                {
                  query: FETCH_POINT_TRANSACTIONS,
                },
              ],
            });
            console.log(result);
          } catch (error) {
            alert(error.message);
          }
        } else {
          // fail
        }
      }
    );
  }

  // 포인트 충전 뮤테이션
  //
  const router = useRouter();

  const [isAllTrans, setIsAllTrans] = useState<boolean>(true);
  const [isOrders, setIsOrders] = useState<boolean>(false);
  const [isTopUp, setIsTopUp] = useState<boolean>(false);
  const [isSelling, setIsSelling] = useState<boolean>(false);

  function onClickEditUser() {
    router.push("/mypage/profile");
  }

  const onClickAllTrans = () => {
    setIsAllTrans(true);
    setIsOrders(false);
    setIsTopUp(false);
    setIsSelling(false);
  };

  const onClickTopUp = () => {
    setIsAllTrans(false);
    setIsOrders(false);
    setIsTopUp(true);
    setIsSelling(false);
  };

  const onClickOrders = () => {
    setIsAllTrans(false);
    setIsOrders(true);
    setIsTopUp(false);
    setIsSelling(false);
  };

  const onClickSelling = () => {
    setIsAllTrans(false);
    setIsOrders(false);
    setIsTopUp(false);
    setIsSelling(true);
  };

  const onClickPoint = () => {
    router.push("/mypage");
  };

  const onClickPicked = () => {
    router.push("/mypage/picked");
  };

  const onClickBought = () => {
    router.push("/mypage/bought");
  };

  return (
    <MypagePointUI
      data={data}
      dataForPoint={dataForPoint}
      onClickCreatePoint={onClickCreatePoint}
      onClickSelectPoint={onClickSelectPoint}
      selectList={selectList}
      onClickEditUser={onClickEditUser}
      onClickOrders={onClickOrders}
      onClickAllTrans={onClickAllTrans}
      onClickTopUp={onClickTopUp}
      onClickSelling={onClickSelling}
      onClickPoint={onClickPoint}
      onClickPicked={onClickPicked}
      onClickBought={onClickBought}
      isAllTrans={isAllTrans}
      isOrders={isOrders}
      isTopUp={isTopUp}
      isSelling={isSelling}
    />
  );
}
