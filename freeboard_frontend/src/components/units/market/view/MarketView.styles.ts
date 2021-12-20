import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0px 30px;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 60px 60px 0px 60px;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const DandEBtns = styled.span`
  color: #d3d3d3;
  padding-right: 10px;
  cursor: pointer;
`;

export const TopWrapper = styled.div`
  width: 100%;

  height: 500px;
  display: flex;
  flex-direction: row;
`;

export const ImgWrapper = styled.div`
  width: 50%;
  /* height: 100%; */
  /* border: 1px solid black; */
  border-radius: 7px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;

export const Detail = styled.div`
  height: 35%;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const Price = styled.div`
  color: #1dbc67;
  font-size: 25px;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;
export const Tags = styled.div`
  padding-top: 10px;
`;
export const Tag = styled.span`
  height: 50px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 50px;
  color: #c2c2c2;
  background-color: #f5f5f5;
`;

export const CreatedAt = styled.div`
  padding-top: 10px;

  color: #cccccc;
`;

export const SoyPoint = styled.div`
  text-align: center;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #f5f5f5;
`;

export const SoyPointTxt = styled.div`
  font-size: 18px;
  width: 100%;
  color: gray;
  padding-bottom: 5px;
`;

export const BuyPointBtn = styled.div`
  padding: 5px;
  width: 80px;
  border-radius: 50px;
  color: #1dbc67;
  background-color: #f5f5f5;
  cursor: pointer;
  :hover {
    background-color: #1dbc67;
    color: white;
  }
`;
export const Btns = styled.div`
  height: 25%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 17px;
  justify-content: space-between;
`;

export const BuyBtn = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  background-color: #1dbc67;
  cursor: pointer;
`;

export const BtnBottom = styled.div`
  display: flex;
  height: 45%;
  flex-direction: row;
  justify-content: space-between;
`;
export const PickBtn = styled.div`
  width: 49%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  cursor: pointer;
`;

export const CartBtn = styled.div`
  width: 49%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1dbc67;
  border: 1px solid #1dbc67;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Contents = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  margin: 20px 0px 20px 0px;
  font-size: 17px;
  color: #1dbc67;
  text-align: center;
  font-weight: 400;
  width: 70px;
  /* border-bottom: 2px solid #1dbc67; */
`;

export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
