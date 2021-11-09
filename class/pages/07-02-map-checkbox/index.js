import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      createdAt
    }
  }
`;

const DELETE_BOARDS = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Column = styled.span`
  width: 20%;
`;

export default function MapCheckboxPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARDS);

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  }

  //삭제하고 쿼리를 다시,
  //여러개의 쿼리를 요청가능

  //주의점
  //유즈쿼리시 베리어블 있을때, 리페치 할때도 똑같이 입력해줘야 한다

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <Row key={el.number}>
          {/* //index 넣으면 안된다 */}
          {/* unique (고유의) key이여야 함 */}
          {/* el.number는 백엔드에서 고유의 넘버 삭제되면 완전 사라짐
           */}
          {/* index는 사라져도 다른게시물로 넘버가 바뀜 */}
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index + 1}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
