import MypagePointUI from "./MypagePoint.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
      statusDetail
      createdAt
      updatedAt
    }
  }
`;

export default function MypagePoint() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const selectList = ["100", "200", "300", "400", "500"];

  const [selectedPoint, setSelectedPoint] = useState<string>("");

  // useEffect(() => {});
  function onClickSelectPoint(event: any) {
    setSelectedPoint(event.target.value);
  }

  // function onClickCreatePoint() {
  //   console.log(selectedPoint, "충전하기");
  // }

  // 결제하기

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

  function onClickEditUser() {
    router.push("/mypage/myprofile");
  }

  return (
    <MypagePointUI
      data={data}
      onClickCreatePoint={onClickCreatePoint}
      onClickSelectPoint={onClickSelectPoint}
      selectList={selectList}
      onClickEditUser={onClickEditUser}
    />
  );
}
