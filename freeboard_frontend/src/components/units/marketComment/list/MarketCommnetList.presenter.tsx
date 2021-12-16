import MarketCommentListUIItem from "./MarketCommentList.presenterItem";

export default function MarketCommentListUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <MarketCommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
