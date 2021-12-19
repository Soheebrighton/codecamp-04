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
  /* opacity: 0.4; */
  margin: 20px 0px 20px 0px;
`;

export const ItemPhoto = styled.div`
  height: 300px;
  position: relative;
  width: 300px;
  overflow: hidden;
  border-radius: 7px;
`;

export const Sold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 100%;
  height: 100%;
  background-color: #00000086;
  color: white;
  position: absolute;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

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

export const TodayWrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  height: 500px;
`;

export const TodayTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

export const TodayItemWrapper = styled.div`
  width: 130px;

  display: flex;
  flex-direction: column;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const ItemImg = styled.div`
  width: 100%;
  height: 130px;
  background-color: forestgreen;
  display: flex;
  flex-direction: column;
`;

export const TodayImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`;

export const ItemDetail = styled.div`
  width: 100%;

  padding: 10px;
`;

export const TodayName = styled.div`
  overflow: hidden;
  font-weight: 600;
  height: 20px;
  cursor: pointer;
`;

export const TodayPrice = styled.div`
  color: #1dbc67;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;
