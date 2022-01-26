import styled from "@emotion/styled";
// import { Rate } from "antd";
// import { Rate } from "antd";

// export const Star = styled(Rate)``;

export const Wrapper = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f2f6f4; */
`;

export const CommentCreate = styled.div`
  padding: 60px;
  width: 1000px;
  background-color: white;
`;

// export const Star = styled(Rate)``;

export const Row = styled.div``;

export const CommentTitle = styled.div`
  padding-bottom: 20px;
`;

export const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const CommentWriteName = styled.input`
  margin-right: 25px;
  padding-bottom: 5px;
  height: 25px;
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

export const CommentWritePassword = styled.input`
  margin-right: 10px;
  padding-bottom: 5px;
  height: 25px;
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

export const Rate = styled.div`
  /* width: 400px; */
  padding-left: 20px;
  align-self: center;
  justify-self: center;
`;

export const CommentWrite = styled.div``;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 10px;
  border: none;
  background-color: #f2f6f4;
  /* border: 1px solid #dbdbdb; */
  /* border-radius: 4px; */
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
    /* border: 1px solid #787878; */
  }

  &:hover {
    /* border: 1px solid #787878; */
  }
`;

export const CommentBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CommentWords = styled.span`
  width: 90%;
  color: gray;
  font-size: 11px;
  padding-top: 2px;
`;

export const CommentSubmitButton = styled.span`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 32px;
  /* background-color: #1dbc67; */
  /* background-color: black; */
  border-radius: 10px;
  border: 1px solid #1dbc67;
  font-size: 14px;
  color: #1dbc67;
  font-weight: 600;
  align-self: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1dbc67;
    color: white;
  }
`;
