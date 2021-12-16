import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("presenter is being rendered");
  return (
    <>
      <div>========================</div>
      <div>this is presenter</div>

      <div>========================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
