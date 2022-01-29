import DOMPurify from "dompurify";
import * as A from "./MarketView.styles";
import { displayedAt } from "../../../../commons/libraries/utils";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import { IPropsMarketViewUI } from "./MarketView.types";
import KakaoMap from "../../../commons/maps/kakaomap";

export default function MarketViewUI(props: IPropsMarketViewUI) {
  return (
    <>
      <A.Background>
        <A.Wrapper>
          {props.sellerId === props.myId && (
            <>
              <A.DeleteAndEdit>
                <A.DandEBtns onClick={props.onClickDeleteItem}>
                  삭제
                </A.DandEBtns>
                <A.DandEBtns onClick={props.onClickEditItem}>수정</A.DandEBtns>
              </A.DeleteAndEdit>
            </>
          )}
          <A.TopWrapper>
            <A.ImgWrapper>
              <Carousel>
                {props.data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <div key={el}>
                      <A.CarouselContent>
                        <A.Img src={`https://storage.googleapis.com/${el}`} />
                      </A.CarouselContent>
                    </div>
                  ))}
              </Carousel>
            </A.ImgWrapper>
            <A.DetailWrapper>
              <A.Detail>
                <A.Name>{props.data?.fetchUseditem.name}</A.Name>
                <A.Price>
                  {Number(props.data?.fetchUseditem.price).toLocaleString()}
                </A.Price>
                <A.Tags>
                  {props.data?.fetchUseditem.tags?.map((el) => (
                    <A.Tag key={el}>#{el} </A.Tag>
                  ))}
                </A.Tags>
                <A.CreatedAt>
                  <FontAwesomeIcon
                    icon={faClock}
                    color="#cccccc"
                    style={{ marginRight: "5px" }}
                  />
                  {displayedAt(props.data?.fetchUseditem.createdAt)}
                </A.CreatedAt>
              </A.Detail>
              <A.SoyPoint>
                <A.SoyPointTxt>
                  이 상품은 소이포인트로만 결제 가능합니다. <br />
                  포인트가 없으세요?
                </A.SoyPointTxt>
                <A.BuyPointBtn onClick={props.onClickBuyPoint}>
                  충전하기
                </A.BuyPointBtn>
              </A.SoyPoint>
              <A.Btns>
                <A.BuyBtn onClick={props.onClickPayment}>구매하기</A.BuyBtn>
                <A.BtnBottom>
                  <A.PickBtn
                    onClick={props.onClickPickItem}
                    dataForPicked={props.dataForPicked}
                    data={props.data}
                  >
                    {props.dataForPicked?.fetchUseditemsIPicked
                      .map((pick) => pick._id)
                      .includes(String(props.data?.fetchUseditem._id)) ? (
                      <FontAwesomeIcon icon={faHeart} color="#ff7081" />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} color="white" />
                    )}

                    <span style={{ padding: "0px 5px 0px 10px" }}>찜하기</span>
                    {props.data?.fetchUseditem.pickedCount}
                  </A.PickBtn>
                  <A.CartBtn
                    onClick={props.onClickAddItemToCart(
                      props.data?.fetchUseditem
                    )}
                  >
                    장바구니
                  </A.CartBtn>
                </A.BtnBottom>
              </A.Btns>
            </A.DetailWrapper>
          </A.TopWrapper>
          <A.ContentWrapper>
            <A.Title>상품설명</A.Title>
            <div>판매자: {props.data?.fetchUseditem.seller?.name}</div>
            {process.browser ? (
              <A.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    String(props.data?.fetchUseditem.contents)
                  ),
                }}
              />
            ) : (
              <A.Contents />
            )}
            <A.Title>거래장소</A.Title>
            <A.MapWrapper>
              <KakaoMap data={props.data} />
            </A.MapWrapper>
          </A.ContentWrapper>
          <A.Title>문의하기</A.Title>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
