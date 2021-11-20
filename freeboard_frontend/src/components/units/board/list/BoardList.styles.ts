import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f6f4;
`;

export const Wrapper = styled.div`
  margin: 30px;
  /* padding-bottom: 30px; */
  width: 1200px;

  /* padding: 20px; */
  background-color: white;
`;

export const Row = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #f2f6f4;
`;

export const Column = styled.div`
  /* background-color: turquoise; */
`;

export const ColumnTopCheckbox = styled.div`
  width: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const ColumnTopNumber = styled.div`
  width: 8%;
  text-align: center;
  padding-top: 10px;
  font-weight: 700;
  color: #0dc56c;
`;

export const ColumnTopTitle = styled.div`
  width: 45%;
  padding-top: 10px;
  font-weight: 700;
`;

export const ColumnTopWriter = styled.div`
  width: 15%;
  padding-top: 10px;
  font-weight: 700;
  text-align: center;
`;

export const ColumnTopDate = styled.div`
  width: 15%;
  padding-top: 10px;
  font-weight: 700;
  text-align: center;
`;

export const ColumnTopDelete = styled.div`
  width: 10%;
  padding-top: 10px;
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
  width: 8%;
  text-align: center;
  padding-top: 10px;
`;

export const Num = styled.span`
  font-size: 13px;
  font-family: "Montserrat";
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
  text-align: center;
`;

export const ColumnDate = styled.div`
  width: 15%;
  padding-top: 10px;
  font-size: 13px;
  color: gray;
  text-align: center;
  font-family: "Montserrat";
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

//// 페이지네이션 ///
export const Pages = styled.div`
  /* background-color: lightsteelblue; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const PrevPage = styled.span`
  padding-right: 10px;
  cursor: pointer;
`;

export const PageNums = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 20px;
  width: 400px;
`;

export const PageNum = styled.span`
  width: 100%;
  font-family: "Montserrat";
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
  width: 1200px;
  border-radius: 5px;
`;

export const BestContent = styled.div`
  width: 260px;
  height: 250px;

  /* border: 1px solid #dbdbdb; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const BestPhotos = styled.div`
  height: 140px;
  background: rgb(230, 246, 184);
  background: linear-gradient(
    119deg,
    rgba(230, 246, 184, 1) 0%,
    rgba(0, 215, 166, 1) 100%
  );
  /* background: linear-gradient(
    156deg,
    rgba(230, 246, 184, 1) 0%,
    rgba(78, 207, 127, 1) 48%,
    rgba(0, 212, 255, 1) 100%
  ); ; */
`;

export const BestTitle = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  font-size: 16px;
  font-weight: 800;

  /* height: 90px; */
  :hover {
    color: gray;
  }
  cursor: pointer;
  /* background-color: white; */
`;
export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BestBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 20px 20px;
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
  font-family: "Montserrat";
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
  color: white;
  font-size: 14px;
  width: 150px;
  height: 42px;
  padding: 8px;
  background-color: #1dbc67;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: white;
    background-color: #787878;
  }
`;

// background-color: #ededed;
// border-radius: 10px;
// cursor: pointer;
// transition: all 0.3s ease;
// :hover {
//   color: white;
//   background-color: #787878;
// }
