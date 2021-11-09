import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  /* background-color: lightblue; */
  border: 1px solid black;
`;

export const Row = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

export const Column = styled.div`
  /* background-color: turquoise; */
`;

export const ColumnTitle = styled.div`
  width: 35%;
`;

export const ColumnNumber = styled.div`
  width: 5%;
  text-align: center;
`;

export const ColumnCheckbox = styled.div`
  width: 8%;
`;

export const DeleteButton = styled.button`
  background-color: salmon;
`;

////베스트 게시물////

export const BestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

export const BestContent = styled.div`
  width: 20%;
  height: 100px;
  border: 1px solid black;
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BestTitle = styled.div`
  background-color: chocolate;
`;

export const BestWriter = styled.div`
  background-color: darkblue;
`;

export const BestName = styled.span`
  background-color: yellow;
`;
export const BestDate = styled.span`
  background-color: red;
`;

export const BestLikes = styled.div`
  background-color: blueviolet;
`;
