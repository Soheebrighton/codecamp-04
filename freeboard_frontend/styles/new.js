import styled from "@emotion/styled";
// import styled from "styled-components";

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 50px;
`;

export const Writer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 35px;
`;

export const WriterNameTitle = styled.div`
  padding-bottom: 10px;
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
    border-bottom: 1px solid black;
  }

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const WriterPasswordTitle = styled.div`
  padding-bottom: 10px;
  font-weight: 600;
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
    border-bottom: 1px solid black;
  }

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const WriterDiv = styled.div`
  width: 48.5%;
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.div`
  padding-bottom: 35px;
`;

export const PostTitleTitle = styled.div`
  padding-bottom: 10px;
  font-weight: 600;
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
    border-bottom: 1px solid black;
  }

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const PostContent = styled.div`
  padding-bottom: 35px;
`;

export const PostContentTitle = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
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
    border: 1px solid black;
  }

  &:hover {
    border: 1px solid black;
  }
`;

export const Address = styled.div`
  padding-bottom: 35px;
`;

export const AddressTitle = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
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
  width: 60px;
  padding: 10px;
  height: 32px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid black;
  }

  &:hover {
    border: 1px solid black;
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

  height: 32px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    border: 1px solid black;
  }

  &:hover {
    border: 1px solid black;
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
    border: 1px solid black;
  }

  &:hover {
    border: 1px solid black;
  }
`;

export const AddressMain = styled.div`
  padding-bottom: 20px;
`;

export const AddressOptional = styled.div``;

export const Youtube = styled.div`
  padding-bottom: 35px;
`;

export const YoutubeTitle = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
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
    border: 1px solid black;
  }

  &:hover {
    border: 1px solid black;
  }
`;

export const UploadImages = styled.div`
  padding-bottom: 35px;
`;

export const UploadImagesTitle = styled.div`
  font-weight: 600;
  padding-bottom: 10px;
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

export const MainSettingTitle = styled.div`
  font-weight: 600;
  padding-bottom: 15px;
`;

export const SubmitButton = styled.button`
  width: 170px;
  height: 42px;
  /* background-color: #988cff; */
  background-color: black;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: white;
  font-weight: 400;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #4a4a4a;
  }
  background-color: ${(props) => (props.MyAaa === true ? "yellow" : "gray")};
`;

export const Wrapper = styled.div`
  padding: 60px;
  width: 800px;
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
  &:checked {
    background-color: yellow;
  }
`;

export const Label = styled.label`
  padding-left: 5px;
  padding-right: 10px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
`;
