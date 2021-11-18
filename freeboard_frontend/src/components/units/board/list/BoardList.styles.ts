import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f7f6;
`;

export const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 70%;

  /* padding: 20px; */
  background-color: white;
`;

export const Row = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f4f7f6;
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

export const Pages = styled.div`
  background-color: lightsteelblue;
  display: flex;
  justify-content: center;
`;

export const PrevPage = styled.span`
  padding-right: 10px;
  cursor: pointer;
`;

export const PageNums = styled.span`
  cursor: pointer;
`;

export const NextPage = styled.span`
  padding-left: 10px;
  cursor: pointer;
`;

////베스트 게시물////

export const BestList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
`;

export const BestContent = styled.div`
  width: 230px;
  height: 170px;

  /* border: 1px solid #dbdbdb; */
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 5px;
`;

export const BestTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  height: 90px;
  padding: 15px;
  margin-bottom: 5px;
  :hover {
    color: white;
  }
  cursor: pointer;
  /* background-color: white; */
`;

export const BestWriter = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  padding-left: 20px;
`;

export const BestName = styled.span``;
export const BestDate = styled.span`
  font-size: 10px;
  color: gray;
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
