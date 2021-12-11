import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KaKaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9ba75a77772202896933d3e15db534d1&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        console.log(window.kakao);
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const polygonPath = [
          new window.kakao.maps.LatLng(33.450965145649576, 126.57020280169624),
          new window.kakao.maps.LatLng(33.450958085478554, 126.57011679275952),
          new window.kakao.maps.LatLng(33.45098043867851, 126.57006290510864),
          new window.kakao.maps.LatLng(33.45097328515681, 126.56995000794919),
          new window.kakao.maps.LatLng(33.450990859851004, 126.56981816664641),
          new window.kakao.maps.LatLng(33.45101296099739, 126.5696916806749),
          new window.kakao.maps.LatLng(33.45098334215462, 126.56960040542974),
          new window.kakao.maps.LatLng(33.450985176064975, 126.56947939729541),
          new window.kakao.maps.LatLng(33.450917277011726, 126.56939906680272),
          new window.kakao.maps.LatLng(33.45086322853736, 126.56941277823229),
          new window.kakao.maps.LatLng(33.45081577388131, 126.56937805752437),
          new window.kakao.maps.LatLng(33.450779813154405, 126.56940781273165),
          new window.kakao.maps.LatLng(33.45081633405741, 126.56953938654304),
          new window.kakao.maps.LatLng(33.45080569884398, 126.56972228175628),
          new window.kakao.maps.LatLng(33.450752219367345, 126.56990001069012),
          new window.kakao.maps.LatLng(33.45065801908533, 126.57003491859678),
          new window.kakao.maps.LatLng(33.45063139100987, 126.57015604858434),
          new window.kakao.maps.LatLng(33.45064506393239, 126.5701990028593),
        ];

        const polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#39DE2A", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });
      });
    };
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
