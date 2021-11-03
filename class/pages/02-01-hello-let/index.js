export default function HelloLetPage() {
  // 스크립트 태그에서 작성하는 것처럼 적용 //

  function abc() {
    document.getElementById("hi").innerText = "반갑습니다";
  }
  return (
    <>
      <div id="hi">안녕하세요</div>
      <button onClick={abc}>버튼클릭</button>
    </>
  );
}

// 직접 쓴것 문자열
// 위에서 자바스크립트에 있는 것들은 중괄호
