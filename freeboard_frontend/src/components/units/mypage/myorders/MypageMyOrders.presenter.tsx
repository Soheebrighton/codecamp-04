export default function MypageMyOrdersUI(props) {
  return (
    <>
      <div>
        {/* //설명 */}
        <span>날짜</span>
        <span>내용</span>
        <span>거래 내역</span>
        <span>거래 후 잔액</span>
        <span>판매자</span>
      </div>
      {props.dataForTransaction?.fetchPointTransactionsOfBuying.map((el) => (
        <div key={el._id}>
          <span>{el.useditem.soldAt}</span>
          <span>{el.useditem.name}</span>
          <span style={{ paddingRight: "10px" }}>{el.amount}</span>
          <span>{el.balance}</span>
          <span></span>
        </div>
      ))}
    </>
  );
}
