import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentQandA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid #f5f5f5;
  padding-top: 20px;
`;

export const CommentView = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  width: 880px;
`;

export const CommentProfilePhoto = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CommentViewDetails = styled.div`
  width: 75%;
`;

export const CommentViewTop = styled.div`
  font-weight: 600;
  padding-bottom: 5px;
  /* background-color: lightseagreen; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

//
//
//
//
//

export const CommentWriter = styled.div``;

export const CommentViewRating = styled.div`
  padding-left: 10px;
`;

export const CommentViewText = styled.div``;

export const CommentViewDate = styled.div`
  color: gray;
  font-size: 9px;
`;

export const CommentEandD = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const CommentEdit = styled.span`
  padding-right: 10px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const CommentDelete = styled.span`
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

// 대댓글
