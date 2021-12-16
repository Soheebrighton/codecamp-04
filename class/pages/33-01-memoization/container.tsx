import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("contatiner is being rendered");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);
  console.log(randomValue);

  const onClickLetCount = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickStateCount = useCallback(() => {
    setCountState((prev) => prev + 1);
    // console.log(countState + 1);
  }, [countState]);

  return (
    <>
      <div>##############</div>
      <div>this is container</div>

      <div>count(let):{countLet}</div>
      <button onClick={onClickLetCount}>count up(let) +1</button>

      <div>count(state):{countState}</div>
      <button onClick={onClickStateCount}>count up(state) +1</button>

      <div>##############</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}

// contatiner 부모
// presenter 자식

// 부모가 바뀌면 자식은 어떻게 되는가?

// 변수 메모 useMemo
// 함수 메모 useCallback
// hooks 제외
// usecallback 안에 state사용 조심하기
// dependency array useEffect와 마찬가지로 배열 안의 값이
// 바뀌면 한번 재기억
// d.a 1 2개 이하일때 useCallback 쓴다
// 과하게 쓰지 말것
// 유지 보수 먼저 생각하고 성능고려하기
