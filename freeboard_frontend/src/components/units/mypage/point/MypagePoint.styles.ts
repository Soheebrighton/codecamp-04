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
  justify-content: space-between;
  width: 1200px;
`;
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
  width: 78%;
`;

export const MyPointDetail = styled.div`
  background-color: yellowgreen;
`;
