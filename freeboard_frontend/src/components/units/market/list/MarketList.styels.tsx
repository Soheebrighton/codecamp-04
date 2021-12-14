import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemDiv = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 20px 0px;
`;

export const ItemPhoto = styled.div`
  height: 300px;

  width: 300px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid #f7f7f7;
  object-fit: cover;
`;

export const ItemDetails = styled.div``;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 15px 0px 25px 0px;
  width: 100%;
  height: 35px;
  overflow: hidden;
  cursor: pointer;
`;

export const PriceAndPicked = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.span`
  color: #1dbc67;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;

export const Picked = styled.span`
  font-size: 12px;
  color: lightgray;
`;

export const TodayWrapper = styled.div``;
