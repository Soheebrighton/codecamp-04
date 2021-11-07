import styled from "@emotion/styled";

export const Main = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 60px;
  width: 800px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
`;

export const Date = styled.div`
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 3px;
  align-self: center;
  background-color: #f2f2f2;
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  color: gray;
`;

export const Title = styled.div`
  /* align-self: ; */
  align-self: center;
  font-size: 39px;
  font-weight: 600;
  /* background-color: turquoise; */
  padding-bottom: 15px;
  /* border-bottom: 1px solid #bdbdbd; */
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background-color: yellow; */
`;

export const ProfilePhoto = styled.div`
  font-size: 25px;

  /* background-color: aqua; */
`;

export const Name = styled.div`
  font-weight: 600;
  padding-right: 10px;
  height: 100%;

  /* background-color: aliceblue; */
  align-content: center;
`;

export const SmallBar = styled.div`
  align-self: center;
  height: 1px;
  width: 28px;
  background: linear-gradient(0.25turn, #ffffff, #a8a8a8, #a8a8a8, #ffffff);
`;

export const Content = styled.div`
  padding-top: 15px;
  line-height: 1.7;
  letter-spacing: 0.6;
  font-weight: 400;
`;

export const Likes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  font-size: 17px;
`;

export const LikesText = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  padding-top: 5px;
  font-weight: 600;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  width: 70px;
  height: 70px;
  border-radius: 70px;
  padding: 10px;
`;

export const Dislike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
`;
