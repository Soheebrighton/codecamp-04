import BoardList from "../../../src/components/units/board/list/BoardList.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
function ListPage() {
  return <BoardList></BoardList>;
}

export default withAuth(ListPage);
