import * as A from "./Airquality.styles";

export default function AirqualityUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>오늘의 미세먼지</A.Title>
        <A.Condition>{props.condition}</A.Condition>
      </A.Wrapper>
    </>
  );
}
