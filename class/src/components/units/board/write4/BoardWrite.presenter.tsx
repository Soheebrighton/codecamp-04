import { ChangeEvent } from "react";
import { MyInput, MyButton } from "./BoardWrite.styles";
import { IBoardWriteUIprops } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIprops) {
  return (
    <>
      작성자:{" "}
      <MyInput
        type="text"
        onChange={props.aaa}
        defaultValue={props.data?.fetchBoard.writer}
      />
      <br />
      제목:{" "}
      <MyInput
        type="text"
        onChange={props.bbb}
        defaultValue={props.data?.fetchBoard.title}
      />
      <br />
      내용:{" "}
      <MyInput
        type="text"
        onChange={props.ccc}
        defaultValue={props.data?.fetchBoard.contents}
      />
      {/* <MyButton onClick={props.ggg ? props.xxx : props.zzz} MyQqq={props.qqq}> */}
      {/* <MyButton onClick={props.xxx} MyQqq={props.qqq}>
        게시물 {props.ggg ? "수정" : "등록"}하기
      </MyButton> */}
      {!props.ggg && (
        <MyButton onClick={props.zzz} myQqq={props.qqq}>
          게시물 등록하기
        </MyButton>
      )}
      {props.ggg && (
        <MyButton onClick={props.xxx} myQqq={props.qqq}>
          게시물 수정하기
        </MyButton>
      )}
      {/* <MyButton onClick={props.xxx} MyQqq={props.qqq}>
        게시물 {props.ggg ? "수정" : "등록"}하기
      </MyButton> */}
      {/* // mybutton 도 하나의 컴포넌트 */}
    </>
  );
}
