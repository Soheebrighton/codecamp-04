import styled from "@emotion/styled";

//css 가 덮여진 나만의 div 태그 만들기
export const MyDiv = styled.div`
  font-size: 30px;
`;

export const MyInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Group2 = styled.div`
  display: flex;
  flex-direction: column;
`;
