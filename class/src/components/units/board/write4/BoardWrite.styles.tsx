import styled from "@emotion/styled";
import { IStylesprops } from "./BoardWrite.types";

export const MyInput = styled.input`
  color: red;
`;

export const MyButton = styled.button`
  color: white;
  background-color: ${(props: IStylesprops) =>
    props.myQqq === true ? "yellow" : "gray"};
`;

//props를 받는 방식이 다름. 강제로 함수를 만들어준다

//emotion 도 props를 받을 수 있다
