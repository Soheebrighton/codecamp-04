import BoardView from "../../../src/components/units/board/view/BoardView.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";

export default function ViewPage() {
  return (
    <>
      <BoardView />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
