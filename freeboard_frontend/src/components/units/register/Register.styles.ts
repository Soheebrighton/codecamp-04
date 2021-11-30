import styled from "@emotion/styled";

export const Background = styled.div`
  background-image: url(/images/sign_up_background.png);
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 50px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Register = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
`;

export const Title = styled.div`
  padding-bottom: 20px;
  font-family: "Montserrat";
  font-size: 30px;
`;

export const Input = styled.input`
  width: 430px;
  height: 60px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid lightgray;
  :focus {
    outline: none;
  }
`;

export const Error = styled.div`
  color: red;
`;

export const RegisterBtn = styled.div`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 14px;
  width: 430px;
  height: 42px;
  padding: 8px;
  background-color: #1dbc67;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: white;
    background-color: #787878;
  }
`;
