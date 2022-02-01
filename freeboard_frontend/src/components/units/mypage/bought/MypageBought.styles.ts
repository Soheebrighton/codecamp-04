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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 3px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  /* background-color: #f2f2f2; */
  padding: 10px 0px 10px 0px;
  text-align: center;
`;

export const HeaderTxt = styled.div`
  font-size: 0.9rem;
  color: black;
  font-weight: 700;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 30px 0px 30px 0px;
  justify-content: space-between;
`;

export const DetailWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  cursor: pointer;
`;

export const SoldAt = styled.div`
  width: 15%;
  font-size: 13px;
  color: gray;
  font-family: "Montserrat";
  text-align: center;
`;

export const ItemName = styled.div`
  font-size: 1rem;
`;

export const Price = styled.span`
  color: #1dbc67;
  font-size: 18px;
  font-weight: 700;
  font-family: "Montserrat-Medium";
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Seller = styled.div`
  width: 20%;
  text-align: center;
  color: #6f6f6f;
`;

export const Status = styled.div`
  width: 15%;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  color: #1dbc67;
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

export const TransTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  padding-bottom: 10px;
`;
