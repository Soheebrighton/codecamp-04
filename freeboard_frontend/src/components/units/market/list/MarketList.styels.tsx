import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
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
  margin-bottom: 20px;
`;

export const ItemPhoto = styled.div`
  height: 300px;

  width: 300px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemDetails = styled.div``;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0px 10px 0px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const PriceAndPicked = styled.div``;

export const Price = styled.span``;

export const Picked = styled.span``;
