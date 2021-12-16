// import * as A from "./MarketView.styles";
import DOMPurify from "dompurify";
import { useEffect } from "react";
declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketViewUI(props) {
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
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        //
        //
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(props.address, function (result, status) {
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
                '<div style="width:150px;text-align:center;padding:6px 0;">{}</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, []);
  return (
    <>
      <div>{props.data?.fetchUseditem.createdAt}</div>
      <div>판매자: {props.data?.fetchUseditem.seller.name}</div>
      <div>상품명: {props.data?.fetchUseditem.name}</div>
      <div>{props.data?.fetchUseditem.remarks}</div>
      <div>
        {" "}
        태그:
        {props.data?.fetchUseditem.tags.map((el) => (
          <span key={el}>#{el} </span>
        ))}
      </div>
      <div>가격: {props.data?.fetchUseditem.price.toLocaleString()} 포인트</div>
      {process.browser ? (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              String(props.data?.fetchUseditem.contents)
            ),
          }}
        />
      ) : (
        <div />
      )}
      {props.data?.fetchUseditem.images
        ?.filter((el) => el)
        .map((el) => (
          <div key={el}>
            <img src={`https://storage.googleapis.com/${el}`} />
          </div>
        ))}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      {props.sellerId === props.myId && (
        <>
          <button onClick={props.onClickDeleteItem}>삭제하기</button>
          <button onClick={props.onClickEditItem}>수정하기</button>
        </>
      )}

      <button onClick={props.onClickPayment}>구매하기</button>
      <button onClick={props.onClickAddItemToCart(props.data?.fetchUseditem)}>
        add to cart
      </button>
      <button onClick={props.onClickPickItem}>찜하기</button>
      <div>{props.data?.fetchUseditem.pickedCount}</div>
    </>
  );
}
