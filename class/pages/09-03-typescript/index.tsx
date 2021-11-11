export default function Typescriptpage() {
  // 문자타입 타입추론
  let aaa = "안녕하세요";

  aaa = 3;
  // 문자타입
  let bbb: string;

  bbb = "반갑습니다";

  //숫자타입
  bbb = 123;

  let ccc: number = 5;
  //배열타입
  let ddd: number[] = [1, 2, 4, 5, 6, 7];
  let eee: string[] = ["a", "b", "c"];
  let fff: number[] | string[] = [2, 3, 5, 6, 7];
  fff = ["a", "b", "c"];

  let ggg: (number | string)[] = ["1", "c", "3", "d"];

  ggg = ["2", "b", "d"];

  // 객체타입

  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  let profile: IProfile = {
    name: "철수",
    age: 9,
    school: "다람쥐초등학교",
  };

  profile.age = "4";

  // 모두 가능한 타입
  let kkk: any = 5;

  return <div>타입스크립트 연습</div>;
}
