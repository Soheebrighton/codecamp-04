import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 30px;
`;

export const CountWrapper = styled.div`
  padding-top: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
`;

export const Count = styled.span`
  padding-left: 5px;
  color: #1dbc67;
`;

export const Title = styled.h2`
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.items[props.items.length - 1] === props.el
      ? "none"
      : "1px solid #f2f2f2"};
  /* border-bottom: 1px solid #f2f2f2; */
  padding: 10px 0px 30px 0px;
  margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  width: 30%;
  height: 30%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 7px;
`;

export const ItemWrapper = styled.div`
  width: 60%;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ItemDetails = styled.div``;

export const Price = styled.div`
  color: #1dbc67;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #6f6f6f;
`;

export const Option = styled.span`
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 1px;
  height: 10px;
  background-color: #6f6f6f;
  margin: 0px 5px 0px 5px;
`;
export const DeleteWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row-reverse;
`;

export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  font-size: 16px;
  color: #dfdfdf;
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: #d2d2d2;
  }
`;
export const NoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f2f2f2;
  color: #919191;
  border-radius: 7px;
  height: 100px;
`;
export const ShopBtn = styled.button`
  width: 100%;
  background-color: #1dbc67;
  margin-top: 20px;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
