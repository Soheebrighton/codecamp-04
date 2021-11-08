import { MyInput, MyButton } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자: <MyInput type="text" onChange={props.aaa} />
      <br />
      제목: <MyInput type="text" onChange={props.bbb} />
      <br />
      내용: <MyInput type="text" onChange={props.ccc} />
      <MyButton onClick={props.zzz} MyQqq={props.qqq}>
        게시물 등록하기
      </MyButton>
      {/* // mybutton 도 하나의 컴포넌트 */}
    </>
  );
}
