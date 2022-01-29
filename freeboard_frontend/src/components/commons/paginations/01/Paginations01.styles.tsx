import styled from "@emotion/styled";

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const PrevPage = styled.span`
  padding-right: 10px;
  cursor: pointer;
`;

export const PageNums = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  height: 20px;
  width: 400px;
`;

export const PageNum = styled.span`
  width: 100%;
  font-family: "Montserrat";
`;

export const NextPage = styled.span`
  padding-left: 10px;
  cursor: pointer;
`;
