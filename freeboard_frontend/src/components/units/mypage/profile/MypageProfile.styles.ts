import styled from "@emotion/styled";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 30px 0px;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 30px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  /* background-color: blanchedalmond; */
`;

export const Label = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  border-radius: 7px;
  padding: 10px;
  background-color: #f2f6f4;
  :focus {
    outline: none;
  }
`;

export const Unchangable = styled.div`
  text-align: right;
  width: 100%;
  font-size: 0.7rem;
  font-weight: 500;
  color: #9f9f9f;
`;

export const SubmitBtn = styled.button`
  width: 30%;
  background-color: #1dbc67;
  margin: 10px 0px 30px 0px;
  color: white;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
