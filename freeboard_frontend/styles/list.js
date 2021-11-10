import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 70%;
  /* padding: 20px; */
  /* background-color: lightblue; */
`;

export const Row = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
`;

export const Column = styled.div`
  /* background-color: turquoise; */
`;

export const ColumnCheckbox = styled.div`
  width: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const ColumnNumber = styled.div`
  width: 5%;
  text-align: center;
  padding-top: 10px;
`;

export const ColumnTitle = styled.div`
  width: 45%;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const ColumnWriter = styled.div`
  width: 15%;
  padding-top: 10px;
`;

export const ColumnDate = styled.div`
  width: 15%;
  padding-top: 10px;
`;

export const ColumnDelete = styled.div`
  width: 10%;
  padding-top: 10px;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #dbdbdb;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

////베스트 게시물////

export const BestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

export const BestContent = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`;

export const BestTitle = styled.div`
  background-color: chocolate;
  :hover {
    color: white;
  }
  cursor: pointer;
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

export const NewButton = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: gray;
  font-size: 14px;
  width: 150px;
  height: 42px;
  padding: 8px;
  background-color: #ededed;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: white;
    background-color: #787878;
  }
`;
