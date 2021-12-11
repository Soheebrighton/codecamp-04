import { useRouter } from "next/router";

export default function KakaoMapRoutingPage() {
  const router = useRouter();
  function onClickMoveToMaps() {
    router.push("/29-03-kakao-map-routed");
  }
  return (
    <>
      <button onClick={onClickMoveToMaps}>go to maps</button>
    </>
  );
}
