import styled from "@emotion/styled";
import { IPropsBtn } from "./MypageSide.types";

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

export const Pages = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`;

export const PointBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-weight: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage" ? "500" : "300"};
  background-color: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage" ? "#fafafa" : "none"};
`;

export const PickedBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-weight: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage/picked" ? "500" : "300"};
  background-color: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage/picked" ? "#fafafa" : "none"};
`;

export const BoughtBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-weight: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage/bought" ? "500" : "300"};

  background-color: ${(props: IPropsBtn) =>
    props.currentPage === "/mypage/bought" ? "#fafafa" : "none"};
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
  cursor: pointer;
`;
export const MyPointWrapper = styled.div`
  width: 100%;
`;

export const MyPointDetail = styled.div`
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
