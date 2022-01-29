import * as A from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { faStore, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StickyBox from "react-sticky-box";
import SearchBars from "../../../commons/searchbars/SearchBars.container";
import { v4 as uuidv4 } from "uuid";
import { IPropsMarketListUI } from "./MarketList.types";

export default function MarketListUI(props: IPropsMarketListUI) {
  return (
    <>
      <A.Background>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          <A.Best>
            <A.BestItemsTitle>베스트 상품</A.BestItemsTitle>
            <A.BestWrapper>
              {props.dataForBest?.fetchUseditemsOfTheBest.map((el, index) => (
                <A.BestDiv key={el._id} onClick={props.onClickViewItem(el)}>
                  <A.BestPhoto>
                    <A.Label>
                      <A.LabelTxt>{index + 1}</A.LabelTxt>
                    </A.Label>
                    <A.BImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={props.onError}
                    />
                  </A.BestPhoto>
                  <A.BestDetails>
                    <A.BestTitle>{el.name}</A.BestTitle>
                    <A.BestPriceAndPicked>
                      <A.BestPrice>
                        {Number(el.price).toLocaleString()}
                      </A.BestPrice>
                      <A.BestPicked>{el.pickedCount} 찜</A.BestPicked>
                    </A.BestPriceAndPicked>
                  </A.BestDetails>
                </A.BestDiv>
              ))}
            </A.BestWrapper>
          </A.Best>

          <A.ListMiddleWrapper>
            <A.CreateItemBtn onClick={props.onClickCreateItem}>
              <FontAwesomeIcon icon={faStore} color="#cccccc" /> 상품등록
            </A.CreateItemBtn>
            <SearchBars
              onChangeKeyword={props.onChangeKeyword}
              refetch={props.refetch}
            />
          </A.ListMiddleWrapper>

          <A.Wrapper>
            {props.data?.fetchUseditems.map((el) => (
              <A.ItemDiv key={el._id}>
                <A.ItemPhoto>
                  {el.soldAt !== null && (
                    <A.Sold>
                      <div>판매완료</div>
                    </A.Sold>
                  )}
                  <A.Img
                    onClick={props.onClickViewItem(el)}
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    onError={props.onError}
                  />
                </A.ItemPhoto>
                <A.PickWrapper
                  onClick={props.onClickPick(el)}
                  dataForPicked={props.dataForPicked}
                  el={el}
                >
                  {props.dataForPicked?.fetchUseditemsIPicked
                    .map((pick) => pick._id)
                    .includes(el._id) ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#1dbc67"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeart}
                      color="#ffffffc0"
                      style={{ fontSize: "15px", textAlign: "center" }}
                    />
                  )}
                </A.PickWrapper>
                <A.ItemDetails>
                  <A.Title>
                    {el.name
                      .replaceAll(props.keyword, `!@#$${props.keyword}!@#$`)
                      .split("!@#$")
                      .map((el) => (
                        <A.TextToken
                          key={uuidv4()}
                          isMatched={props.keyword === el}
                        >
                          {el}
                        </A.TextToken>
                      ))}
                  </A.Title>
                  <A.PriceAndPicked>
                    <A.Price>
                      {Number(el.price).toLocaleString()}
                      <span style={{ fontSize: "15px", paddingLeft: "2px" }}>
                        원
                      </span>
                    </A.Price>
                    <A.Picked>{el.pickedCount} 찜</A.Picked>
                  </A.PriceAndPicked>
                </A.ItemDetails>
              </A.ItemDiv>
            ))}
          </A.Wrapper>
        </InfiniteScroll>
        <div>
          <StickyBox offsetTop={90} offsetBottom={90}>
            <A.TodayWrapper>
              <A.TodayTitle>오늘 본 상품</A.TodayTitle>
              {props.items?.map((el) => (
                <A.TodayItemWrapper key={el._id}>
                  <A.ItemImg>
                    <A.TodayImg
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      onError={props.onError}
                    />
                  </A.ItemImg>
                  <A.ItemDetail>
                    <A.TodayName id={el._id} onClick={props.onClickTodayItem}>
                      {el.name}
                    </A.TodayName>
                    <A.TodayPrice>{el.price.toLocaleString()}</A.TodayPrice>
                  </A.ItemDetail>
                </A.TodayItemWrapper>
              ))}
            </A.TodayWrapper>
          </StickyBox>
        </div>
      </A.Background>
    </>
  );
}
