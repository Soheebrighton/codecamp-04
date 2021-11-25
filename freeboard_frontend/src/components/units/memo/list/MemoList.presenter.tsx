// import { convertLegacyProps } from "antd/lib/button/button";
// import MemoListUIItem from "./MemoList.presenterItem";

// export default function MemoListUI(props) {
//   return <MemoListUIItem />;
// }

import MemoListUIItem from "./MemoList.presenterItem";

export default function MemoListUI(props) {
  return (
    <>
      {props.data?.docs.map((el, index) => (
        <MemoListUIItem key={props.ids[index]} el={el} />
      ))}
    </>
  );
}
