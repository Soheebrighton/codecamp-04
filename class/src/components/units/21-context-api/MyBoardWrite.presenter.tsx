import { MyContext } from "../../../../pages/21-04-context-api/index";
import { useContext } from "react";

export default function MyBoardWriteUI() {
  useContext(MyContext);
  //   return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
  return <div>{MyContext ? "수정하기" : "등록하기"}</div>;
}
