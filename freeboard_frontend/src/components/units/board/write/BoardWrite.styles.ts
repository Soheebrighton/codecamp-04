import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

// import styled from "styled-components";

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 3px;
`;

export const Bar = styled.div`
  width: 60px;
  height: 4px;
  background-color: black;
  align-self: center;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 35px;
`;

export const Titles = styled.div`
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const WriterName = styled.input`
  width: 100%;
  height: 32px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border-bottom: 1px solid #787878;
  }

  &:hover {
    border-bottom: 1px solid #787878;
  }
`;

export const WriterPassword = styled.input`
  width: 100%;
  height: 32px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border-bottom: 1px solid #787878;
  }

  &:hover {
    border-bottom: 1px solid #787878;
  }
`;

export const WriterDiv = styled.div`
  width: 48.5%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;

export const PostTitle = styled.div`
  padding-bottom: 35px;
`;

export const PostTitleInput = styled.input`
  width: 100%;
  padding: 10px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border-bottom: 1px solid #787878;
  }

  &:hover {
    border-bottom: 1px solid #787878;
  }
`;

export const PostContent = styled.div`
  padding-bottom: 35px;
`;

export const PostContentInput = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid #787878;
  }

  &:hover {
    border: 1px solid #787878;
  }
`;

export const Address = styled.div`
  padding-bottom: 35px;
`;

export const PostcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

export const PostcodeSpan = styled.span`
  padding-right: 20px;
`;

export const AddressPostcodeInput = styled.input`
  width: 65px;
  padding: 10px;
  height: 32px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid #787878;
  }

  &:hover {
    border: 1px solid #787878;
  }
`;

export const AddressPostcodeButton = styled.button`
  color: white;
  background-color: #4a4a4a;
  height: 32px;
  border: none;
  cursor: pointer;
`;

export const AddressMainInput = styled.input`
  width: 100%;
  padding: 10px;
  height: 32px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid #787878;
  }

  &:hover {
    border: 1px solid #787878;
  }
`;

export const AddressOptionalInput = styled.input`
  width: 100%;
  padding: 10px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid #787878;
  }

  &:hover {
    border: 1px solid #787878;
  }
`;

export const AddressMain = styled.div`
  padding-bottom: 20px;
`;

export const AddressOptional = styled.div``;

export const Youtube = styled.div`
  padding-bottom: 35px;
`;

export const YoutubeLinkInput = styled.input`
  width: 100%;
  padding: 10px;
  height: 32px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid #787878;
  }

  &:hover {
    border: 1px solid #787878;
  }
`;

export const UploadImages = styled.div`
  padding-bottom: 35px;
`;

export const UploadImageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 70px;
  height: 70px;
  background-color: #f5f5f5;
  color: #4f4f4f;
  font-size: 0.7rem;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    background-color: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const MainSetting = styled.div`
  padding-bottom: 35px;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 42px;
  /* background-color: #988cff; */
  background-color: black;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  color: gray;
  font-weight: 600;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #787878;
    color: white;
  }
  background-color: ${(props) =>
    props.changeBtnBC === true ? "#1dbc67" : "#ededed"};

  color: ${(props: ISubmitButtonProps) =>
    props.changeBtnColor === true ? "gray" : "white"};
`;

export const Wrapper = styled.div`
  padding: 60px;
  width: 1000px;
  display: flex;
  flex-direction: column;

  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
`;

export const Main = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Radio = styled.input`
  :checked {
    background: yellow;
  }
`;

export const Label = styled.label`
  padding-left: 5px;
  padding-right: 10px;
  border: 1px solid red;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
`;
