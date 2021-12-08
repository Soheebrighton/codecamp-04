import Head from "next/head";
export default function MypagePointUI(props) {
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

      <div>{props.data?.fetchUserLoggedIn.name}</div>
      <div>나의 포인트 : {props.data?.fetchUserLoggedIn.userPoint.amount}</div>
      <label for="amount-select">충전 포인트:</label>

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
