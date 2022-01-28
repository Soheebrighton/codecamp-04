// import * as A from "./MarketView.styles";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import * as A from "./MarketView.styles";
import { displayedAt } from "../../../../commons/libraries/utils";
import { faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "antd";
import { IPropsMarketViewUI, IPropsContentStyle } from "./MarketView.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketViewUI(props: IPropsMarketViewUI) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba75a77772202896933d3e15db534d1&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          // center: new window.kakao.maps.LatLng(
          //   props.data?.fetchUseditem.useditemAddress.lat,
          //   props.data?.fetchUseditem.useditemAddress.lng || 33.450701,
          //   126.570667
          // ),
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        //
        //
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address,
          function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data]);

  function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
  }

  const contentStyle: IPropsContentStyle = {
    height: "500px",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
    border: "1px solid #f7f7f7",
    borderRadius: "7px",
  };

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
              <Carousel afterChange={onChange}>
                {props.data?.fetchUseditem.images
                  ?.filter((el) => el)
                  .map((el) => (
                    <div key={el}>
                      <h3 style={contentStyle}>
                        <A.Img src={`https://storage.googleapis.com/${el}`} />
                      </h3>
                    </div>
                  ))}
              </Carousel>
            </A.ImgWrapper>
            <A.DetailWrapper>
              <A.Detail>
                <A.Name>{props.data?.fetchUseditem.name}</A.Name>
                <A.Price>
                  {props.data?.fetchUseditem.price.toLocaleString()}
                </A.Price>
                <A.Tags>
                  {props.data?.fetchUseditem.tags.map((el) => (
                    <A.Tag key={el}>#{el} </A.Tag>
                  ))}
                </A.Tags>
                <A.CreatedAt>
                  <FontAwesomeIcon icon={faClock} color="#cccccc" />
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
                      .includes(props.data?.fetchUseditem._id) ? (
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
            {/* <div>판매자: {props.data?.fetchUseditem.seller.name}</div> */}
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
              <div id="map" style={{ width: "100%", height: "250px" }}></div>
            </A.MapWrapper>
          </A.ContentWrapper>
          <A.Title>문의하기</A.Title>
        </A.Wrapper>
      </A.Background>
    </>
  );
}
