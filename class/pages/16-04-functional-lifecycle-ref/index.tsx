import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
export default function MyLifecyclePage() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  //   componentDidMount와 동일
  // 한번 실행후 실행안함

  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();
    // componentWillUpmount
    return () => {
      console.log("잘가요~");
    };
  }, []);

  // componentDidUpdate와 비슷
  //   한번 실행후 뭐라도 실행하면 다시 실행
  useEffect(() => {
    console.log("수정됨");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
