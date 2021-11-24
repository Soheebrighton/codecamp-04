import MemoList from "../list/MemoList.container";

export default function MemoUI(props) {
  return (
    <>
      <div>
        제목: <input type="text" onChange={props.saveName} />
      </div>
      <div>
        글쓴이: <input type="text" onChange={props.saveTitle} />
      </div>
      <div>
        내용: <input type="text" onChange={props.saveContents} />
      </div>
      <button onClick={props.onClickSubmit}>등록하기</button>
      <div>메모 보기</div>
      <MemoList />{" "}
    </>
  );
}
