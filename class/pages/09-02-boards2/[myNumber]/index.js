import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
    }
  }
`;

export default function DynamicProductReadPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.myNumber) },
  });

  console.log(data, router.query.myId);

  // 비구조 할당, 구조분해 할당, [], {} 차이 뮤테이션, 쿼리

  return (
    <>
      <div>나의 게시글 번호 : {router.query.myNumber}</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <button
        onClick={() =>
          router.push(`/09-02-boards2/${router.query.myNumber}/edit`)
        }
      >
        수정하기로 이동
      </button>
    </>
  );
}
//유즈쿼리는 비동기로 작동
// fetch 오류는 아직 안받아서 오류나는 것
//있으면 실행 없으면 실행하지 않음 && 앞에것이 있으면 뒤에것 실행
//데이터안에
//쿼리는 이페이지가 실행이되면 자동 실행이 된다. 유즈 쿼리 만나서 바로 요청
//데이터가 있으면 보여주고 데이터가 없으면 보여주지 않는다

// ? 데이터가 있으면 앞에것을 보여주고 없으면 qqq를 보여준다

//<div>판매자 : {data ? data.fetchProduct.seller : "qqq"}</div> //

// # 주석 그래픽큐엘
