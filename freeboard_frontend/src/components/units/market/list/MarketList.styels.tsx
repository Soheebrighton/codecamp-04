import styled from "@emotion/styled";

export const Background = styled.div`
  padding-top: 40px;
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

export const ItemsCount = styled.div`
  width: 100%;
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

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #f7f7f7;
  object-fit: cover;
  :hover {
    border-radius: 7px;
    transform: scale(1.2);
    transition: ease 0.2s;
  }
`;

export const PickWrapper = styled.div`
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  margin: 10px;
  width: 35px;
  height: 35px;
  border: ${(props) =>
    props.dataForPicked?.fetchUseditemsIPicked
      .map((pick) => pick._id)
      .includes(props.el._id)
      ? "1px solid #ffffff53"
      : "1px solid #ffffff53"};
  border-radius: 50px;
  background-color: ${(props) =>
    props.dataForPicked?.fetchUseditemsIPicked
      .map((pick) => pick._id)
      .includes(props.el._id)
      ? "#1dbc6722"
      : "#ffffffe"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  margin-left: 40px;
  height: 500px;
  flex: 1;
`;

export const TodayTitle = styled.div`
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
`;

export const TodayItemWrapper = styled.div`
  width: 100px;

  display: flex;
  flex-direction: column;
  border: 1px solid #f5f5f5;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const ItemImg = styled.div`
  width: 100%;
  height: 100px;
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
  font-size: 12px;
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

// best

export const Best = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;

export const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const BestItemsTitle = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

export const BestDiv = styled.div`
  width: 220px;
  display: flex;
  /* background-color: blue; */
  flex-direction: column;
  /* opacity: 0.4; */
  margin: 20px 0px 20px 0px;
`;

export const BestPhoto = styled.div`
  width: 220px;
  height: 200px;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
`;

export const BImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #f7f7f7;

  object-fit: cover;
  :hover {
    border-radius: 7px;
    transform: scale(1.2);
    transition: ease 0.2s;
  }
`;

export const Label = styled.div`
  background-image: url("images/label.png");
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 45px;
  z-index: 1;
  position: absolute;
  left: 13px;
`;

export const LabelTxt = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
  font-weight: 700;
  text-align: center;
  font-family: "Montserrat-Medium";
  color: white;
`;

export const BestDetails = styled.div``;
export const BestDetail = styled.div`
  width: 100%;

  padding: 10px;
`;

export const BestTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 15px 0px 25px 0px;
  width: 100%;
  height: 35px;
  overflow: hidden;
  cursor: pointer;
`;

export const BestPriceAndPicked = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BestPrice = styled.span`
  color: #1dbc67;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;

export const BestPicked = styled.span`
  font-size: 12px;
  color: lightgray;
`;

export const CreateItemBtn = styled.div`
  cursor: pointer;
  width: 90px;
  height: 35px;
  padding: 5px;
  text-align: center;
  border-radius: 7px;
  border: 1px solid #ebebeb;
  color: #cccccc;
`;

export const ListMiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "#1dbc67" : "black")};
`;
