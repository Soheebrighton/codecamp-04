import MypageSideUI from "./MypageSide.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_USER_LOGGED_IN,
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_POINT_TRANSACTIONS,
} from "./MypageSide.queries";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

export default function MypageSide() {
  const router = useRouter();

  const currentPage = router.pathname;

  const selectList = ["1000", "5000", "10000", "20000", "50000"];
  const [selectedPoint, setSelectedPoint] = useState<string>("");

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onClickSelectPoint = (event: any) => {
    setSelectedPoint(event.target.value);
  };

  const onClickCreatePoint = () => {
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
      async (rsp: any) => {
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
  };

  const onClickEditUser = () => {
    router.push("/mypage/profile");
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
    <MypageSideUI
      data={data}
      selectedPoint={selectedPoint}
      onClickCreatePoint={onClickCreatePoint}
      onClickSelectPoint={onClickSelectPoint}
      selectList={selectList}
      currentPage={currentPage}
      onClickEditUser={onClickEditUser}
      onClickPoint={onClickPoint}
      onClickPicked={onClickPicked}
      onClickBought={onClickBought}
    />
  );
}
