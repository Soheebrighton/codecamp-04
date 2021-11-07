import { useRouter } from "next/router";

export default function StaticRoutingNumberPage() {
  const router = useRouter();
  function onClickMove1(event) {
    //router.pathname
    // 현재 내 주소가 어디있는지 알려준다//
    router.push("/05-04-static-routed-number/1");
    // 슬래시 포함하여 작성하기
  }

  function onClickMove2(event) {
    //router.pathname
    // 현재 내 주소가 어디있는지 알려준다//
    router.push("/05-04-static-routed-number/2");
    // 슬래시 포함하여 작성하기
  }

  function onClickMove3(event) {
    //router.pathname
    // 현재 내 주소가 어디있는지 알려준다//
    router.push("/05-04-static-routed-number/3");
    // 슬래시 포함하여 작성하기
  }

  return (
    <>
      <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
      <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
      <button onClick={onClickMove3}>3번 게시글로 이동하기</button>{" "}
    </>
  );
}

//게시글 목록

//next는 리액트를 좀더 풍부하게 쓸수있는 프레임워크//
