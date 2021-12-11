import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  background-color: yellowgreen;
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
`;

export const ItemPhoto = styled.div`
  background-color: yellow;
  height: 300px;
`;

export const ItemDetails = styled.div``;

export const Title = styled.div`
  height: 20px;
  cursor: pointer;
  overflow: hidden;
`;

export const PriceAndPicked = styled.div``;

export const Price = styled.span``;

export const Picked = styled.span``;
