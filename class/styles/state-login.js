import styled from "@emotion/styled";

export const Background = styled.div`
  background-image: url("/images/img-bg.png");
  padding: 40px;
`;

export const Wrapper = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 55px;
  font-weight: 600;
`;

export const Loc = styled.div`
  z-index: 3;
`;
export const Rect = styled.div`
  position: absolute;
  top: 158px;
  z-index: 2;
`;

export const Login = styled.div`
  width: 100%;
`;

export const LoginInput = styled.input`
  width: 99%;
  height: 43px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(245, 255, 255, 0.4);
  margin-bottom: 10px;
`;

export const LoginEmail = styled.div`
  width: 100%;
  color: #ff1b6d;
  padding-bottom: 20px;
`;

export const LoginPassword = styled.div`
  color: #ff1b6d;
  padding-bottom: 20px;
  width: 100%;
`;

export const LoginBtn = styled.div`
  width: 100%;
  height: 76px;
  background-color: #ff1b6d;
  /* opacity: 0.6; */
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 38px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Btn = styled.span`
  color: white;

  z-index: 3;
  font-size: 26px;

  /* width: 100%; */
`;

export const HelpLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 20px;
`;

export const Bar = styled.span`
  width: 1px;
  height: 12px;
  opacity: 0.4;
  background-color: white;
  margin: 10px;
`;

export const OtherLogin = styled.div``;

export const KakaoLoginBtn = styled.div`
  width: 100%;
  height: 76px;
  background-color: transparent;
  border: 2px solid #fae100;
  position: relative;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 38px;
  justify-content: center;
  align-items: center;
`;

export const KaKaoBtnText = styled.span`
  color: #fae100;
  position: absolute;
  z-index: 3;
  font-size: 26px;

  /* width: 100%; */
`;
