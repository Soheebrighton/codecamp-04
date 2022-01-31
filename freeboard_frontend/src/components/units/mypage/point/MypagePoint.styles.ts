import styled from "@emotion/styled";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0px 30px 0px;
  width: 1200px;

  /* justify-content: space-between; */
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 78%;
  padding-left: 20px;
`;

export const PointCurrentWrapper = styled.div``;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: fit-content;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  padding: 30px;
`;

export const MyPhoto = styled.div``;
export const MyName = styled.div`
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  font-weight: 600;
`;

export const EditProfile = styled.div`
  padding: 5px 10px 5px 10px;
  border-radius: 7px;
  color: #484848;
  border: 1px solid #ebebeb;
  /* background-color: #f5f5f5; */
  cursor: pointer;
`;
export const MyPointWrapper = styled.div`
  width: 100%;
`;

export const MyPointDetail = styled.div`
  /* background-color: yellowgreen; */
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  font-size: 20px;
  padding: 20px;
`;

export const MyPointCurrent = styled.div`
  font-size: 50px;
  color: #1dbc67;
`;

export const PointSelect = styled.select`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  width: 100%;
  appearance: none;
  text-align: center;
  cursor: pointer;
  :hover {
    border: 1px solid #c8c8c8;
    border-radius: 4px;
  }
  :focus {
    outline-color: #1dbc67;
  }
`;

export const PointOption = styled.option`
  background-color: white;
  color: red;
`;

export const PointTopUpBtn = styled.button`
  width: 100%;
  background-color: #1dbc67;
  margin-top: 10px;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const PointQueryWrapper = styled.div`
  width: 100%;
`;

export const TransTitle = styled.h2`
  padding-top: 30px;
`;

export const TransDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #6f6f6f;
  padding-bottom: 10px;
`;

export const DisplayBtn = styled.div`
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 1px;
  height: 10px;
  background-color: #6f6f6f;
  margin: 0px 5px 0px 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid #f2f2f2;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 100%;
  text-align: center;
  :hover {
    background-color: #fafafa;
  }
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  /* justify-content: space-evenly; */
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const RowHeaderTxt = styled.div`
  color: #2e2e2e;
  font-weight: 700;
`;

export const Amount = styled.div`
  width: 20%;
`;

export const Balance = styled.div`
  width: 30%;
  justify-content: flex-end;
`;

export const Status = styled.div`
  width: 30%;
  color: ${(props) => (props.status === "구매" ? "#FFD600" : "#1dbc67")};
`;

export const CreatedAt = styled.div`
  width: 20%;
  font-size: 13px;
  color: gray;

  font-family: "Montserrat";
`;
