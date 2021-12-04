import { UseMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  const { moveToPage } = UseMoveToPage();
  return (
    <>
      <div>custom hooks practice - page move</div>
      <button onClick={moveToPage("/board/list")}>list</button>
      <button onClick={moveToPage("/market")}>market</button>
      <button onClick={moveToPage("/mypage")}>mypage</button>
    </>
  );
}
