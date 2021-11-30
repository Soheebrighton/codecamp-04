export default function MapElPage() {
  // 기본방법 (화살표함수)
  //   ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // function (일반함수)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((firstname, secondname) => {
  //     console.log("el", firstname);
  //     console.log("index", secondname);
  //   });

  // el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}

// return 필요없이 반복만 하고싶을때 forEach를 쓰면된다
// 함수안에 함수 콜백함수
