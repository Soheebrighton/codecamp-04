export default function HelloLetPage() {
  // 스크립트 태그에서 작성하는 것처럼 적용 //

  const [qqq, setQqq] = useState(0);

  function abc() {
    setAbc(Number(qqq + 1));
  }

  return (
    <>
      <div>{qqq}</div>
      <button onClick={abc}>카운트증가</button>
    </>
  );
}

// 직접 쓴것 문자열
// 위에서 자바스크립트에 있는 것들은 중괄호
