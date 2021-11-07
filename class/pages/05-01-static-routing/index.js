import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();
  function onClickMove(event) {
    //router.pathname
    // 현재 내 주소가 어디있는지 알려준다//
    router.push("/05-02-static-routed");
    // 슬래시 포함하여 작성하기
  }
  return <button onClick={onClickMove}>페이징 이동하기</button>;
}

//next는 리액트를 좀더 풍부하게 쓸수있는 프레임워크//
