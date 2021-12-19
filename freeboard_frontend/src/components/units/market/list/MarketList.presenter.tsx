import * as A from "./MarketList.styels";
import InfiniteScroll from "react-infinite-scroller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export default function MarketListUI(props) {
  function onError(event) {
    event.target.src = "/images/unnamed.png";
  }
  console.log(props.items);

  return (
    <>
      <A.Background>
        {" "}
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          <A.Wrapper>
            <button onClick={props.onClickCreateItem}>상품등록하기</button>
            <button onClick={props.onClickCart}>장바구니</button>
            {/* 베스트목록 */}

            {props.dataForBest?.fetchUseditemsOfTheBest.map((el) => (
              <A.ItemDiv key={el._id} onClick={props.onClickViewItem(el)}>
                <A.ItemPhoto>
                  <A.Img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={onError}
                  />
                </A.ItemPhoto>
                <A.ItemDetails>
                  <A.Title>{el.name}</A.Title>
                  <A.PriceAndPicked>
                    <A.Price>{Number(el.price).toLocaleString()}</A.Price>
                    <A.Picked>❤️ {el.pickedCount}</A.Picked>
                  </A.PriceAndPicked>
                </A.ItemDetails>
              </A.ItemDiv>
            ))}

            {/* 상품목록 */}

            {props.data?.fetchUseditems.map((el) => (
              <A.ItemDiv key={el._id} onClick={props.onClickViewItem(el)}>
                <A.ItemPhoto>
                  {el.soldAt !== null && (
                    <A.Sold>
                      {" "}
                      <div>판매완료</div>
                    </A.Sold>
                  )}

                  <A.Img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={onError}
                  />
                </A.ItemPhoto>
                <A.ItemDetails>
                  <A.Title>{el.name}</A.Title>
                  <A.PriceAndPicked>
                    <A.Price>
                      {" "}
                      {/* <FontAwesomeIcon
                        icon={faCoins}
                        color="#f1e679"
                        style={{ fontSize: "11px", marginRight: "5px" }}
                      /> */}
                      {Number(el.price).toLocaleString()}
                      <span style={{ fontSize: "15px", paddingLeft: "2px" }}>
                        원
                      </span>
                    </A.Price>
                    <A.Picked>
                      {el.pickedCount} <i class="fi fi-rr-심장"></i>찜
                    </A.Picked>
                  </A.PriceAndPicked>
                </A.ItemDetails>
                {/* <span>{el.remarks}</span> */}
                {/* <button
                  onClick={props.onClickAddItemToCart(el)}
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  add to cart
                </button> */}
              </A.ItemDiv>
            ))}
          </A.Wrapper>
        </InfiniteScroll>
        <A.TodayWrapper>
          {" "}
          <A.TodayTitle>오늘 본 상품</A.TodayTitle>
          {props.items?.map((el, index) => (
            <A.TodayItemWrapper key={el._id}>
              <A.ItemImg>
                {" "}
                <A.TodayImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              </A.ItemImg>
              <A.ItemDetail>
                {" "}
                <A.TodayName id={el._id} onClick={props.onClickTodayItem}>
                  {el.name}
                </A.TodayName>
                <A.TodayPrice>{el.price.toLocaleString()}</A.TodayPrice>
              </A.ItemDetail>
            </A.TodayItemWrapper>
          ))}
        </A.TodayWrapper>
      </A.Background>
    </>
  );
}
