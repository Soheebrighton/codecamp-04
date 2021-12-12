import styled from "@emotion/styled";

export const Background = styled.div`
  /* background-image: url("/images/background.png"); */

  /* width: 100%; */
  display: block;
  /* background-repeat: no-repeat; */
`;

export const Img = styled.img`
  width: 100%;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextDiv = styled.div`
  color: white;
  position: absolute;
  text-align: center;
  padding-bottom: 120px;

  z-index: 1;
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 38px;
  text-shadow: 0 2px 10px #108245;
`;
export const SubText = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 23px;
`;

export const Button = styled.button`
  background-color: #2a2a2a;
  /* background: rgb(34, 195, 147);
  background: linear-gradient(
    119deg,
    rgba(34, 195, 147, 1) 0%,
    rgba(207, 227, 101, 1) 100%
  ); */
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  box-shadow: 0 10px 20px 0 #108245;
  padding: 10px 35px 10px 35px;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    background-color: white;
    background: rgba(255, 255, 255, 0.7);
    color: black;
  }
`;
