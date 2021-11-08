import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";

export default function ContainerPresentPage() {
  ////contatiner 위쪽
  return <BoardWrite />;
  ///presenter 아래
}

/// 중괄호 {} import
// default로 나오는 것들은

// import BoardWriteUI from... (어차피 default 이기때문에)
// 여러개 export 중괄호 안으로 들어간다. (default 아님, 이름이 다 있음)
