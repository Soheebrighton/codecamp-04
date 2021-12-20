import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
export default function MarketCommentListUI(props) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUIItem
            key={el._id}
            el={el}
            dataForUserInfo={props.dataForUserInfo}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
