import Head from "next/head";

export default function PaymentPage() {
  function onClickPayment() {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후 리다이렉트될 주소!
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          // to run createPointTransactionsOfLoading Mutation (to pass impuUid as an argument)
          // paid date, cancelled time
          // the date should be from Back-end side (especially to generate today's date)
        } else {
          // fail
        }
      }
    );
  }
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
      amount: <input type="text" />
      <button onClick={onClickPayment}>pay</button>
    </>
  );
}
