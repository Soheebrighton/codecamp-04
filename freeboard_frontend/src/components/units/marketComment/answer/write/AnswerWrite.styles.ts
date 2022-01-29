import styled from "@emotion/styled";

export const CommentWrite = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: none;
  background-color: #f2f6f4;
  resize: none;
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const CommentBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
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
